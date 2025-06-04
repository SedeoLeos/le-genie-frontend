import { z } from "zod"
export const EditPostFormSchema = z.object({
  title: z.string().min(5),
  content: z.string(),
  id: z.string(),
})
export type EditPostFormValues = z.infer<typeof EditPostFormSchema>


export const GetPostFormSchema = z.object({
  id: z.string(),
})
export type GetPostFormValues = z.infer<typeof GetPostFormSchema>

export const GetPaginatedPostsFormSchema = z.object({
  page: z.number(),
  limit: z.number(),
})