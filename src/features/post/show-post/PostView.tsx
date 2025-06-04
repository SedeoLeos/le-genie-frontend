'use client'
import React from 'react'
import { ContentManager } from '@/components/tiptap-templates/simple/simple-editor'
import { PostResponseDto } from '../type'


function PostView({ post }: { post: PostResponseDto|undefined }) {
  console.log('post', post)

  return <div>
    <h1>{post?.title}</h1>
    <ContentManager content={post?.content ?? ''} viewer={true} />
  </div>
}

export default PostView