

import RecentPosts from '@/components/RecentPosts';
import InstagramPosts from '@/components/InstagramPosts';
import { PostResponseDto } from '../post/type';


const Home = ({posts}: {posts: PostResponseDto[]}) => {
  return (
    < >
      {/* Main Content */} 
        <RecentPosts posts={posts} />
        <InstagramPosts />
     </>
  );
};

export default Home;
