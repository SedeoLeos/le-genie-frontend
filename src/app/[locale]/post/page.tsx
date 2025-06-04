
import { getPaginatedPosts } from "@/features/post/edit-post/actions/get-post.action";
import PostList from "@/features/post/PostList";
type Props = {
    searchParams: {
      page?: string;
    };
  };
export default async function PostPage({ searchParams }: Props) {
    const limit = 5;
    const page = Number(searchParams.page ?? "1");
    const { posts, total,page:pageNumber } = await getPaginatedPosts({ page, limit });
    console.log("pageNumber", pageNumber,typeof pageNumber,typeof page)
    return <PostList posts={posts} totalPages={total} page={page} />

}