
import { getPaginatedComments } from "@/features/post/actions/get-comment.action";
import { getPost } from "@/features/post/actions/get-post.action";
import PostView from "@/features/post/show-post/PostView"
import { redirect } from "@/libs/i18nNavigation";
import { slugify } from "@/libs/slugify";
import { getTiptapTextFromJSON } from "@/libs/tiptap/util";
type Props = {
  params: Promise<{ postId: string, slug?: string[], locale: string }>
  searchParams: Promise<{ page?: string }>
};
type Params = {
  params: Promise<{ postId: string, slug?: string[], locale: string }>
}
type Metadata = {
  title: string;
  description?: string;
  openGraph?: {
    title: string;
    description?: string;
    url?: string;
  };
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { postId } = await params;

  const result = await getPost({ id: postId });

  if (!result.data?.success || !result.data.post) {
    return {
      title: "Post introuvable",
    };
  }

  const post = result.data.post;

  return {
    title: post.title,
    description: getTiptapTextFromJSON(post.content).slice(0, 150),
    openGraph: {
      title: post.title,
      description: getTiptapTextFromJSON(post.content).slice(0, 150),
      url: `/post/${postId}/${slugify(post.title)}`,
    },
  };
}
async function PostDetailPage({ params, searchParams }: Props) {
  const { postId, slug, locale } = await params;
  const searchParamsData = await searchParams;
  const limit = 5;
  const page = Number(searchParamsData.page ?? "1");
  const result = await getPost({ id: postId });

  if (!result.data?.success || !result.data.post) {
    return redirect({ href: "/", locale });
  }
  const post = result.data.post;
  const expectedSlug = slugify(post.title);

  if (!slug || slug[0] !== expectedSlug) {
    return redirect({
      href: `/post/${postId}/${expectedSlug}`,
      locale: locale,
    });
  }
  const { comments, total } = await getPaginatedComments({ page, limit, postId: result.data.post.id })
  return <PostView post={result.data.post} comments={comments} total={total} page={page} />
}

export default PostDetailPage