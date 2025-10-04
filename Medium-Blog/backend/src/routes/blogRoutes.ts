import { Hono } from 'hono'
import { getPrisma } from '../prismaFunction'
import { verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from '@xkaranme/medium-blog'

const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>()

blog.use('/', async (c, next) => {
    const header = c.req.header("authorization") || "";
    const token = header.split(' ')[1]

    try {
        const res = await verify(token, c.env.JWT_SECRET)

        if (res) {
            c.set("userId", res.id as string)
            await next()
        }

    } catch(e) {
        c.status(403)
        return c.json({
            error: 'Authentication failed'
        })
    }

})

blog.post('/', async (c) => {
    const prisma = getPrisma(c.env.DATABASE_URL)
    const body = await c.req.json()
    const { success } = createBlogInput.safeParse(body)

    if (!success) {
      c.status(411)
      return c.text('Invalid Inputs')
    }

    const authorId = c.get("userId")
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })

    return c.json(post)

    // return c.json({
    //     postId: post.id
    // })
})

blog.put('/', async (c) => {
    const prisma = getPrisma(c.env.DATABASE_URL)
    const body = await c.req.json()
    const { success } = updateBlogInput.safeParse(body)

    if (!success) {
      c.status(411)
      return c.text('Invalid Inputs')
    }

    const post = await prisma.post.update({
        where: {
            id: body.postId
        },
        data: {
            title: body.title,
            content: body.content
        }
    })

    return c.json({
        postId: post.id
    })
})

// Add pagination - limit it to 10 title for start
blog.get('/bulk', async (c) => {
    const prisma = getPrisma(c.env.DATABASE_URL)
    const posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            publishedAt: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    })

    return c.json({
        posts
    })
})

blog.get('/:id', async (c) => {
    const prisma = getPrisma(c.env.DATABASE_URL)
    const postId = c.req.param("id")

    try {
        const post = await prisma.post.findFirst({
            where: {
                id: postId
            },
            select: {
                id: true,
                title: true,
                content: true,
                publishedAt: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })

        return c.json({
            post
        })
    } catch(e) {
        return c.text('Errored Out')
    }
})

export default blog
