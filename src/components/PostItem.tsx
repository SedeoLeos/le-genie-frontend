import { Badge } from "@/components/ui/badge";
import { PostResponseDto } from "@/features/post/type";
import { Link } from "@/libs/i18nNavigation";
import { getTiptapTextFromJSON } from "@/libs/tiptap/util";
import { Calendar, Eye } from "lucide-react";
import Image from "next/image";



type PostItemProps = {
    post: PostResponseDto
    editMode?: boolean
}
const PostItem = ({ post, editMode = false }: PostItemProps) => {

    return (<Link key={post.id} href={'/post/' + post.id + (editMode ? '/edit' : '')} className="flex flex-col sm:flex-row bg-white dark:bg-gray-900  overflow-hidden">
        <div className="w-full sm:w-48 flex-shrink-0 overflow-hidden">
            {post.imagePath && <Image
                src={post.imagePath}
                alt={post.title}
                fill
                className="w-full h-48 sm:h-full object-cover"
            />}

            {!post.imagePath && <div
                className="w-full h-48 sm:h-full object-cover bg-amber-50"
            ></div>}
        </div>
        <div className="p-4 md:p-6 flex-1">
            {
                post.postTags && post.postTags.map((tag, index) =>
                    <Badge key={index} className="text-white dark:text-gray-900 bg-gray-900 dark:bg-white text-xs mb-2">
                        {tag}
                    </Badge>

                )
            }
            <h3 className="text-base md:text-lg font-semibold dark:text-white text-gray-900  mb-2 line-clamp-2">
                {post.title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-gray-500 dark:text-white text-sm mb-3">
                {post.createdAt && <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.createdAt.toLocaleDateString()}
                </div>}
                {post.createdAt && <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {post.createdAt.toLocaleDateString()}
                </div>}
            </div>
            <p className="text-gray-600 dark:text-white text-sm line-clamp-2">
                {getTiptapTextFromJSON(post.content)}
            </p>
        </div>
    </Link>)
}

export default PostItem;