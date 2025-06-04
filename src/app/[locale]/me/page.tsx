import Layout from '@/components/Layout/Layout'
import Profile from '@/features/auth/Profile'
import { getPaginatedPosts } from '@/features/post/actions/get-post.action';
import PostListingWrapper from '@/features/post/PostListingWrapper'
import React from 'react'
type Props = {
  searchParams: {
    page?: string;
  };
};
export default async function MePage({ searchParams }: Props) {
  const limit = 5;
  const page = Number(searchParams.page ?? "1");

  const { posts, total } = await getPaginatedPosts({ page, limit, mode: 'me' });
  return (
    <Layout sidebar>
      <Profile />
      <PostListingWrapper page={page} posts={posts} totalPages={total} editMode />
    </Layout>
  )
}