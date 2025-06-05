import { z } from "zod"
export const PostStatus = z.enum(["DRAFT", "PUBLISHED", "EMPTY"]);

export type PostStatus = z.infer<typeof PostStatus>;
export const EditPostFormSchema = z.object({
  title: z.string().min(5),
  content: z.string(),
  id: z.string(),
  status: PostStatus,
  image: z.any().optional(), 
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



export const UpdatePostFormSchema = z.object({
  id: z.string(),
  status: z.string(),
})
export type UpdatePostFormValues = z.infer<typeof UpdatePostFormSchema>

export const CommentPostFormSchema = z.object({
  content: z.string(),
  postId: z.string(),

})
export type CommentPostFormValues = z.infer<typeof CommentPostFormSchema>