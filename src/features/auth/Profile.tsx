'use client'
import { Twitter, Instagram, Linkedin, PlusCircle, Settings } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useUser } from "@/features/auth/hooks/useAuth";
import { createPost } from "../post/actions/create-post.action";
import { useRouter } from "@/libs/i18nNavigation";
import { useState } from "react";



export default function UserProfile() {
  const { user } = useUser();
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const handleCreatePost = async () => {
    setLoading(true)
    const post = await createPost();
    if (post) {
      router.push(`/post/${post.id}/edit`)
    }
    setLoading(false)
  }
  return (
    <Card className="max-w-md mx-auto p-6 space-y-6 border-gray-200 shadow-none">
      <div className="flex items-center space-x-5">
        <Avatar className="w-24 h-24 mb-2">
          <AvatarImage src={user?.avatarPath} alt={user?.name} />
          <AvatarFallback>
            {user?.name?.charAt(0).toUpperCase()}
            {user?.name?.charAt(1).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-1">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{user?.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-300">{user?.email}</p>

          <div className="flex items-center space-x-3 text-gray-400 dark:text-gray-200 mt-2">
            <Twitter className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
            <Instagram className="w-4 h-4 hover:text-pink-500 cursor-pointer" />
            <Linkedin className="w-4 h-4 hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="flex space-x-3 justify-center pt-4 border-t border-gray-200">
        <Button variant="default" className="gap-2" onClick={handleCreatePost} disabled={loading}>
          <PlusCircle className="w-4 h-4" />
          Créer un post
        </Button>
        <Button variant="outline" className="gap-2">
          <Settings className="w-4 h-4" />
          Gérer votre profil
        </Button>
      </div>
    </Card>
  );
}
