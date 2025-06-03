import { ContentManager } from "@/components/tiptap-templates/simple/simple-editor"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function EditPost() {
  return <div className="flex flex-col gap-5">
    <div className="flex justify-end">

      <Button variant={'ghost'}>Sauvegarder</Button>
    </div>
    <div className="h-40 w-full bg-gray-400 border-2 border-gray-600 rounded-lg cursor-pointer">

      <Input type="file"  className="hideen"/>
    </div>
    <Input />
    <ContentManager content={""} viewer={false} />
  </div>
}
