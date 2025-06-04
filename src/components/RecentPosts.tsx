
import { Badge } from '@/components/ui/badge';
import PostItem from './PostItem'
import { PostResponseDto } from '@/features/post/type';
const RecentPosts = ({posts}: {posts: PostResponseDto[]}) => {



  return (
    <section className="px-4 md:px-6 py-8 bg-white dark:bg-gray-900">
      <div className="max-w-full">
        <div className="flex items-center mb-6">
          <Badge variant="secondary" className="text-white dark:text-gray-900 bg-gray-900 dark:bg-white">Recently</Badge>
          <span className="ml-3 text-gray-900 dark:text-white font-semibold">Posted</span>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <PostItem post={post} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
