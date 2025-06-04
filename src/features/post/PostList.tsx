import PostListingWrapper from "./PostListingWrapper";
import { PostResponseDto } from "./type";


export default function PostList({ page, posts, totalPages }: { page: number, posts: PostResponseDto[], totalPages: number }) {

    return <PostListingWrapper page={page} posts={posts} totalPages={totalPages} />
}