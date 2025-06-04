import { getPost } from "@/features/post/actions/get-post.action";
import EditPost from "@/features/post/edit-post/EditPost";
import { redirect } from "@/libs/i18nNavigation";

export default async function EditPage({ params }: { params: Promise<{ slug: string }> }) {
  const paramsData = await params;
  const result = await getPost({ id: paramsData.slug });
  
    if (!result.data?.success || !result.data.post) {
      return redirect({ href: "/", locale: "fr" });
    }
  return <EditPost post={result.data.post} />


}

