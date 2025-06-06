'use client'
import React, { useEffect, useRef } from 'react'
import { ContentManager } from '@/components/tiptap-content-manage/content-manage'
import Image from 'next/image'
import CommentList from './CommentList'
import CommentForm from './Comment'
import { CommentPostResponseDto, PostResponseDto } from '../type'
import { Provider, atom, useAtom } from 'jotai'
import { Editor } from '@tiptap/react'

export const commentAtom = atom<{ comments: CommentPostResponseDto[], total: number, page: number, postId: string }>({ comments: [], total: 0, page: 1, postId: '' })
function PostView(
  { post, comments: commentApi, total, page }:
    { post: PostResponseDto | undefined, comments: CommentPostResponseDto[], total: number, page: number }) {
  const editorRef = useRef<{ editor: Editor | null }>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setComments] = useAtom(commentAtom)

  useEffect(() => {
    setComments(() => ({ page, total, comments: commentApi, postId: post?.id ?? '' }))
  }, [commentApi, page, total, post?.id, setComments])

  

  if (!post)
    return <div className="animate-spin rounded-full h-6 w-6 border-2 border-t-2 border-gray-300 border-t-gray-900 mr-2"></div>

  return <div className='space-y-5'>
    <div className='relative w-full h-56'>
      {!editorRef.current && <div className="animate-spin rounded-full h-6 w-6 border-2 border-t-2 border-gray-300 border-t-gray-900 mr-2"></div>}
      {editorRef.current && <Image
        className='object-cover' alt={post.title}
        fill
        src={post.imagePath || '/landscape-placeholder-svgrepo-com.svg'}
      />}

    </div>
    {editorRef.current && <h1 className='text-base md:text-xl font-semibold dark:text-white text-gray-900  mb-2 line-clamp-2'>{post?.title}</h1>}
    <ContentManager content={post?.content ?? ''} viewer={true} ref={editorRef}  />
    {editorRef.current && <CommentForm postId={post?.id ?? ''} />}
    {editorRef.current && <CommentList />}

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