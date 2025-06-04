
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function CommentForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Leave a Comment</CardTitle>
        <CardDescription>Share your thoughts and feedback with the community.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <Textarea placeholder="Write your comment here..." className="min-h-[120px] resize-none" />
          <Button type="submit">Comment</Button>
        </form>
      </CardContent>
    </Card>
  )
}