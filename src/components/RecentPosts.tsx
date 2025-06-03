
import { Badge } from '@/components/ui/badge';
import PostItem from './PostItem'
const RecentPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Design Is The Mix Of Emotions",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      createdAt: new Date(1234585589494),
      readTime: "3 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      postTags: ["Design"]
    },
    {
      id: 2,
      title: "Design Is The Mix Of Emotions",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      createdAt: new Date(1234585589494),
      readTime: "3 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      postTags: ["Design"]
    },
    {
      id: 3,
      title: "I Created A Developer Rap Video - Here's What I Learned",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      createdAt: new Date(1234585589494),
      readTime: "4 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      postTags: ["Video"]
    },
    {
      id: 4,
      title: "Design Is The Mix Of Emotions",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      createdAt: new Date(1234585589494),
      readTime: "5 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      postTags: ["Design"]
    },
    {
      id: 5,
      title: "Design Is The Mix Of Emotions Try To Feel It",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      createdAt: new Date(1234585589494),
      readTime: "3 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      postTags: ["Design"]    
    },
    {
      id: 6,
      title: "Design Is The Mix Of Emotions",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      createdAt: new Date(1234585589494),
      readTime: "2 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      postTags: ["Design"]
    }
  ];


  return (
    <section className="px-4 md:px-6 py-8 bg-white dark:bg-gray-900">
      <div className="max-w-full">
        <div className="flex items-center mb-6">
          <Badge variant="secondary" className="text-white dark:text-gray-900 bg-gray-900 dark:bg-white">Recently</Badge>
          <span className="ml-3 text-gray-900 dark:text-white font-semibold">Posted</span>
        </div>

        <div className="space-y-6">
          {posts.map((post,index) => (
            <PostItem post={post} key={index}/>
          ))}
        </div>


        <div className='w-full py-5 flex items-center justify-center gap-10'>
          <Badge
            variant="outline"
            className="border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors cursor-pointer text-xs md:text-sm"
          >
            preview
          </Badge>
          <Badge
            variant="outline"
            className="border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors cursor-pointer text-xs md:text-sm"
          >
            next
          </Badge>

        </div>

      </div>
    </section>
  );
};

export default RecentPosts;
