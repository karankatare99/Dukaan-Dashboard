import { Hono } from 'hono'
import { getPrisma } from '../prismaFunction'
import { sign } from 'hono/jwt'
import { signUpInput, signInInput } from '@xkaranme/medium-blog'

const user = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()

user.post('/signup', async (c) => {
    const body = await c.req.json()
    const prisma = getPrisma(c.env.DATABASE_URL)
    const { success } = signUpInput.safeParse(body)

    if (!success) {
      c.status(411)
      return c.text('Invalid Inputs')
    }

    try {
      const user = await prisma.user.create({
          data: {
          email: body.email,
          password: body.password,
          name: body.name,
          },
      })
      const token = await sign({ id: user.id }, c.env.JWT_SECRET)
      return c.json({ token })

    } catch(e) {
      c.status(411)
      return c.text('Errored Out')
    }
  })

user.post('/signin', async (c) => {
    const body = await c.req.json()
    const prisma = getPrisma(c.env.DATABASE_URL)
    const { success } = signInInput.safeParse(body)

    if (!success) {
      c.status(411)
      return c.text('Invalid Inputs')
    }

    try {
      const user = await prisma.user.findFirst({
        where: {
          email: body.email,
          password: body.password
        }
      })

      if (!user) {
        c.status(403)
        return c.text('Incorrect Credentials')
      }

      const token = await sign({
        id: user.id
      }, c.env.JWT_SECRET)

      return c.json({
        token
      })

    } catch(e) {
      c.status(411)
      c.text('Errored Out')
    }
})

export default user
