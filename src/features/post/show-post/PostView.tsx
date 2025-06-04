'use client'
import React from 'react'
import { ContentManager } from '@/components/tiptap-templates/simple/simple-editor'
import { PostResponseDto } from '../type'
import CommentList from './CommentList'
import CommentForm from './Comment'


function PostView({ post }: { post: PostResponseDto|undefined }) {

  return <div>
    <h1 className='text-base md:text-xl font-semibold dark:text-white text-gray-900  mb-2 line-clamp-2'>{post?.title}</h1>
    <ContentManager content={post?.content ?? ''} viewer={true} />
    <CommentList/>
    <CommentForm/>
  </div>
}

export default PostView