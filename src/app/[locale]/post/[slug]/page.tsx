
import { getPost } from "@/features/post/edit-post/actions/get-post.action";
import PostView from "@/features/post/show-post/PostView"
import { redirect } from "@/libs/i18nNavigation";
 async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
   const paramsData = await params;
   const result = await getPost({ id: paramsData.slug });
   
     if (!result.data?.success || !result.data.post) {
       return redirect({ href: "/", locale: "fr" });
     }
   return <PostView post={result.data.post} />
}

export default PostDetailPage