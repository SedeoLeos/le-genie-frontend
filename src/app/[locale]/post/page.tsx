
import { getPaginatedPosts } from "@/features/post/actions/get-post.action";
import PostList from "@/features/post/PostList";
type Props = {
    searchParams: {
      page?: string;
    };
  };
export default async function PostPage({ searchParams }: Props) {
    const limit = 5;
    const page = Number(searchParams.page ?? "1");
    const { posts, total } = await getPaginatedPosts({ page, limit })
    return <PostList posts={posts} totalPages={total} page={page} />

}