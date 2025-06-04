
import { Badge } from '@/components/ui/badge';

import { PostResponseDto } from './type';
import PostItem from '@/components/PostItem';
import { Link } from '@/libs/i18nNavigation';
const PostListingWrapper = ({ page, posts, totalPages, editMode = false }: { page: number, posts: PostResponseDto[], totalPages: number, editMode?: boolean }) => {


    return (
        <section className="px-4 md:px-6 py-8 bg-white dark:bg-gray-900">
            <div className="max-w-full">
                <div className="flex items-center mb-6">
                    <Badge variant="secondary" className="text-white dark:text-gray-900 bg-gray-900 dark:bg-white">Recently</Badge>
                    <span className="ml-3 text-gray-900 dark:text-white font-semibold">Posted</span>
                </div>

                <div className="space-y-6">
                    {posts.map((post, index) => (
                        <PostItem post={post} key={index} editMode={editMode} />
                    ))}
                </div>


                <div className='w-full py-5 flex items-center justify-center gap-10'>
                    {page > 1 && <Link href={`post/?page=${page - 1}`}>
                        <Badge
                            variant="outline"
                            className="border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors cursor-pointer text-xs md:text-sm"

                        >⬅️ Précédent
                        </Badge>
                    </Link>}
                    {(page * 5) < totalPages && <Link href={`post/?page=${page + 1}`}>

                        <Badge
                            variant="outline"
                            className="border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors cursor-pointer text-xs md:text-sm"
                        >
                            Suivant ➡️
                        </Badge>
                    </Link>}
                </div>

            </div>
        </section>
    );
};

export default PostListingWrapper;
