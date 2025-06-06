
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CommentPostFormSchema, CommentPostFormValues } from "../edit-post/schema"
import { Form } from "@/components/ui/form"
import { commentPost } from "../actions/comment.post.action"
import { useAtom } from "jotai"
import { commentAtom } from "./PostView"
import { useToast } from "@/hooks/use-toast"

export default function CommentForm({ postId }: { postId: string }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setComments] = useAtom(commentAtom)
  const form = useForm<CommentPostFormValues>({
    resolver: zodResolver(CommentPostFormSchema),
    defaultValues: {

      content: "",
      postId: postId,
    },
  })
  const { toast } = useToast()

  const onSubmit = async (data: CommentPostFormValues) => {
    const commentResult = await commentPost(data)
    if (commentResult.data?.success) {
      const { comment } = commentResult.data
      setComments((prev) => (
        { ...prev, total: prev.total + 1, comments: [comment, ...prev.comments] })
      )
      form.reset()
      toast({
        title: "Comment added",
        description: "Your comment has been added successfully.",
        variant: "default",
      })
    }
    else {
      toast({
        title: "Error",
        description: commentResult.validationErrors?._errors?.join(', ') || 'An error occurred.',
        variant: "destructive",
      })
    }
  }


  return (
    <div className="flex justify-center p-5">
      <Card className="w-full max-w-md border-gray-200 shadow-none">
        <CardHeader>
          <CardTitle>Leave a Comment</CardTitle>
          <CardDescription>Share your thoughts and feedback with the community.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <Textarea {...form.register("content")} placeholder="Write your comment here..." className="min-h-[120px] resize-none border-gray-200 borer-2 focus-visible:ring-0 focus-visible:ring-offset-0" />
              <Button type="submit" className="bg-gray-900 text-white dark:bg-white dark:text-gray-900">Comment</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}