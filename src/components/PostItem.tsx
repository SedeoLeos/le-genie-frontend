import { Badge } from "@/components/ui/badge";
import { PostResponseDto } from "@/features/post/type";
import { Link } from "@/libs/i18nNavigation";
import { slugify } from "@/libs/slugify";
import { getTiptapTextFromJSON } from "@/libs/tiptap/util";
import { Calendar, Eye } from "lucide-react";
import Image from "next/image";



type PostItemProps = {
    post: PostResponseDto
    editMode?: boolean
}
const PostItem = ({ post, editMode = false }: PostItemProps) => {
    const url = `/post/${post.id}/${editMode ? 'edit' : slugify(post.title)}`
    return (<Link key={post.id} href={url} className="flex flex-col sm:flex-row bg-white dark:bg-gray-900  overflow-hidden">
        <div className="w-full h-48 sm:w-48 flex-shrink-0 overflow-hidden">
            <Image
                src={post.imagePath || '/landscape-placeholder-svgrepo-com.svg'}
                alt={post.title}
                width={200}
                height={200}
                className="w-full h-48 sm:h-full object-cover"
                onError={(e) => {
                    e.currentTarget.src = '/landscape-placeholder-svgrepo-com.svg';
                }}
            />
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
                    {new Date(post.createdAt).toDateString()}
                </div>}
                {post.updatedAt && <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {new Date(post.updatedAt).toDateString()}
                </div>}
                <div className="space-y-4 p-3">
                    {post.contributors && post.contributors[0] && post.contributors[0].user &&
                        <div className="flex items-center space-x-5">
                            <div className="w-5 h-5 bg-gray-200  rounded-full flex items-center justify-center relative">
                                <Image
                                    src={post.contributors[0].user.avatarPath || '/landscape-placeholder-svgrepo-com.svg'}
                                    alt={post.contributors[0].user.name}
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 space-y-1">
                                <h4 className="text-gray-900 dark:text-white font-medium text-sm">{post.contributors[0].user.name}</h4>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <p className="text-gray-600 dark:text-white text-sm line-clamp-2">
                {getTiptapTextFromJSON(post.content)}
            </p>


        </div>
    </Link>)
}

export default PostItem;