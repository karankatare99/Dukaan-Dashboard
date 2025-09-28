import { z } from "zod";
export const signUpInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string()
});
export const signInInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
});
export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    authorId: z.string()
});
//# sourceMappingURL=index.js.map