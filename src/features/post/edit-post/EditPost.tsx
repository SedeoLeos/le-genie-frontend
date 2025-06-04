'use client'
import { ContentManager } from "@/components/tiptap-templates/simple/simple-editor"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import UploadImages from "@/components/ui/upload-images"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { editPost,  publishPost } from "../actions/edit-post.action"
import { EditPostFormSchema, EditPostFormValues } from "./schema"
import { PostResponseDto } from "../type"


export default function EditPost({
  post,
}: {
  post: PostResponseDto
}) {
  const editorRef = useRef<typeof ContentManager>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditPostFormValues>({
    resolver: zodResolver(EditPostFormSchema),
    defaultValues: {
      title: post.title,
      content: post.content,
      id: post.id,
    },
  })

  const onSubmit = async (data: EditPostFormValues) => {
    const editPostResult = await editPost(data)
    if (editPostResult.data?.success) {
    }
  }


  const handleSave = () => {
    const content = editorRef.current?.editor?.getJSON()
    if (content) {
      setValue("content", JSON.stringify(content), { shouldValidate: true })
    }
    handleSubmit(onSubmit)()
  }
  const publishPost = async (postId: string) => {
    const editPostResult = await publishPost(postId)
  }

  return <div className="flex flex-col gap-5">
    <div className="flex justify-end gap-5">
      <Button className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white" onClick={handleSave}>Sauvegarder</Button>
      <Button className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white" onClick={() => publishPost(post.id)}>Publier</Button>
    </div>
    <UploadImages />
    <div>
      <Input
        {...register("title")}
        placeholder="Titre du post"
        className="border border-gray-200 shadow-none focus-visible:ring-gray-300 focus-visible:ring-1 focus-visible:ring-offset-0"
      />
      {errors.title && (
        <p className="text-sm text-red-500">{errors.title.message}</p>
      )}
    </div>

    <ContentManager content={post.content ?? ''} viewer={false} ref={editorRef} />
    {errors.content && (
      <p className="text-sm text-red-500">{errors.content.message}</p>
    )}
  </div>
}