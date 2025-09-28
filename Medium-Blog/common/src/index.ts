import { z } from "zod"

export const signUpInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string()
})
export type SignUpInput = z.infer<typeof signUpInput>

export const signInInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})
export type SignInInput = z.infer<typeof signInInput>

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})
export type CreateBlogInput = z.infer<typeof createBlogInput>

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    authorId: z.string()
})
export type UpdateBlogInput = z.infer<typeof updateBlogInput>

