import Layout from "@/components/Layout/Layout";
import Home from "@/features/landing/Home";
import { getPaginatedPosts } from "@/features/post/actions/get-post.action";

export default async function HomePage() {
  const { posts } = await getPaginatedPosts({ page: 1, limit: 5 })
  return (
    <Layout hero sidebar>
      <Home posts={posts}  />
    </Layout>
  )
}
