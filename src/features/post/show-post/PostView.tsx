'use client'
import React from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from "@tiptap/starter-kit"
import { Image } from "@tiptap/extension-image"
import { TaskItem } from "@tiptap/extension-task-item"
import { TaskList } from "@tiptap/extension-task-list"
import { TextAlign } from "@tiptap/extension-text-align"
import { Typography } from "@tiptap/extension-typography"
import { Highlight } from "@tiptap/extension-highlight"
import { Subscript } from "@tiptap/extension-subscript"
import { Superscript } from "@tiptap/extension-superscript"
import { Underline } from "@tiptap/extension-underline";
import { ImageUploadNode } from '@/components/tiptap-node/image-upload-node'
import TrailingNode from '@/components/tiptap-extension/trailing-node-extension'
import content from "@/components/tiptap-templates/simple/data/content.json"
import Link from '@tiptap/extension-link'
import "@/components/tiptap-templates/simple/simple-editor.scss"


 function PostView() {
    const editor = useEditor({

        immediatelyRender: false,
        editorProps: {
          attributes: {
            autocomplete: "off",
            autocorrect: "off",
            autocapitalize: "off",
            "aria-label": "Main content area, start typing to enter text.",
          },
        },
        extensions: [
          StarterKit,
          TextAlign.configure({ types: ["heading", "paragraph"] }),
          Underline,
          TaskList,
          TaskItem.configure({ nested: true }),
          Highlight.configure({ multicolor: true }),
          Image,
          Typography,
          Superscript,
          Subscript,
          ImageUploadNode.configure({
            accept: "image/*",
            maxSize: 1000,
            limit: 3,
            upload: (file)=>Promise.resolve(""),
            onError: (error) => console.error("Upload failed:", error),
          }),
          TrailingNode,
          Link.configure({ openOnClick: false }),
        ],
        content: content,
      })
    return  <EditorContent editor={editor} readOnly />
}

export default PostView