'use client'
import React, { useEffect } from 'react'
import { ContentManager } from '@/components/tiptap-templates/simple/simple-editor'

import CommentList from './CommentList'
import CommentForm from './Comment'
import { CommentPostResponseDto, PostResponseDto } from '../type'
import { Provider, atom, useAtom } from 'jotai'

export const commentAtom = atom<{ comments: CommentPostResponseDto[], total: number, page: number, postId: string }>({ comments: [], total: 0, page: 1, postId: '' })
function PostView(
  { post, comments: commentApi, total, page }:
    { post: PostResponseDto | undefined, comments: CommentPostResponseDto[], total: number, page: number }) {
  const [_, setComments] = useAtom(commentAtom)

  useEffect(() => {
    setComments(() => ({ page, total, comments: commentApi, postId: post?.id ?? '' }))
  }, [commentApi, page, total, post?.id, setComments])



  return <div>
    <h1 className='text-base md:text-xl font-semibold dark:text-white text-gray-900  mb-2 line-clamp-2'>{post?.title}</h1>
    <ContentManager content={post?.content ?? ''} viewer={true} />

    <CommentForm postId={post?.id ?? ''} />
    <CommentList />

  </div>
}

function PostViewProvider(
  { post, comments: commentApi, total, page }:
    { post: PostResponseDto | undefined, comments: CommentPostResponseDto[], total: number, page: number }) {

  return <Provider>
    <PostView post={post} comments={commentApi} total={total} page={page} />
  </Provider>
}

export default PostViewProvider