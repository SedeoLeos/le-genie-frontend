
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useAtom } from "jotai"
import { commentAtom } from "./PostView"
import { JSX, SVGProps } from "react"
import { Link } from "@/libs/i18nNavigation"
import { Badge } from "@/components/ui/badge"

function humanizeDate(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  let diff = Math.floor((now.getTime() - date.getTime()) / 1000); // seconds

  const days = Math.floor(diff / (3600 * 24));
  diff -= days * 3600 * 24;
  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;
  const minutes = Math.floor(diff / 60);

  let result = "il y a ";
  if (days > 0) result += days + (days === 1 ? " jour " : " jours ");
  if (hours > 0) result += hours + (hours === 1 ? " heure " : " heures ");
  if (days === 0 && hours === 0 && minutes > 0) result += minutes + (minutes === 1 ? " minute" : " minutes");
  if (days === 0 && hours === 0 && minutes === 0) result = "à l'instant";
  return result.trim();
}

export default function CommentList() {
  const [{ comments, total, page, postId }] = useAtom(commentAtom)
  return (
    <div className="mx-auto px-4 md:px-6 max-w-2xl grid gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>{total} comments</span>
          <Separator orientation="vertical" />
          <Button variant="ghost" size="icon">
            <ListOrderedIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="grid gap-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src={comment.user.avatarPath} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <div className="font-medium">{comment.user.name}</div>
                <div className="text-xs text-muted-foreground">{humanizeDate(comment.createdAt)}</div>
              </div>
              <div className="text-sm leading-relaxed text-muted-foreground">
                {comment.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full py-5 flex items-center justify-center gap-10'>
        {page > 1 && <Link href={`post/${postId}?page=${page - 1}`}>
          <Badge
            variant="outline"
            className="border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors cursor-pointer text-xs md:text-sm"

          >⬅️ Précédent
          </Badge>
        </Link>}
        {(page * 5) < total && <Link href={`post/${postId}?page=${page + 1}`}>

          <Badge
            variant="outline"
            className="border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors cursor-pointer text-xs md:text-sm"
          >
            Suivant ➡️
          </Badge>
        </Link>}
      </div>
    </div>
  )
}

function ListOrderedIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}