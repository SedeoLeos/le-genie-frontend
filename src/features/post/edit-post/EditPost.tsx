'use client'
import { ContentManager } from "@/components/tiptap-templates/simple/simple-editor"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import UploadImages from "@/components/ui/upload-images"
import { zodResolver } from "@hookform/resolvers/zod"
import { Editor } from "@tiptap/react"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { PostResponseDto, PostStatus } from "../type"
import { EditPostFormSchema, EditPostFormValues } from "./schema"


export default function EditPost({
  post,
}: {
  post: PostResponseDto
}) {
  const editorRef = useRef<{ editor: Editor | null }>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

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
    const formData = new FormData()
    formData.append("id", data.id)
    formData.append("title", data.title)
    formData.append("content", data.content)
    formData.append("status", data.status)
    if (selectedImage) {
      formData.append("image", selectedImage)
    }

    const post = await fetch(`/api/posts/${data.id}`, {
      method: "PATCH",
      credentials: 'include',
      body: formData,
    })
    if (post.ok) {
    }
  }
  useEffect(() => {
    console.log("selectedImage", selectedImage)
  }, [selectedImage])

  const handleSave = (status: PostStatus) => {
    const content = editorRef.current?.editor?.getJSON()
    setValue("status", status)
    if (content) {
      setValue("content", JSON.stringify(content), { shouldValidate: true })
    }
    console.log("selectedImage", selectedImage)
    handleSubmit((data) => onSubmit({ ...data, image: selectedImage } as EditPostFormValues))()
  }

  return <div className="flex flex-col gap-5">
    <div className="flex justify-end gap-5">
      <Button className="bg-red-900 dark:bg-white dark:text-gray-900 text-white" onClick={() => handleSave("DRAFT")}>Draft</Button>
      <Button className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white" onClick={() => handleSave("PUBLISHED")}>Publier</Button>
      <Button className="bg-gray-500 dark:bg-white dark:text-gray-900 text-white" onClick={() => handleSave("DRAFT")}>Brouillon</Button>
    </div>
    <UploadImages url={post.imagePath} onImageChange={setSelectedImage} />
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