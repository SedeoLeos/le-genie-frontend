
import { Calendar, Eye, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const RecentPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Design Is The Mix Of Emotions",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      date: "23 December 2022",
      readTime: "3 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      category: "Design"
    },
    {
      id: 2,
      title: "Design Is The Mix Of Emotions",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      date: "23 December 2022",
      readTime: "3 Min To Read", 
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      category: "Design"
    },
    {
      id: 3,
      title: "I Created A Developer Rap Video - Here's What I Learned",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      date: "22 December 2022",
      readTime: "4 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      category: "Video"
    },
    {
      id: 4,
      title: "Design Is The Mix Of Emotions",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      date: "21 December 2022",
      readTime: "5 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      category: "Design"
    },
    {
      id: 5,
      title: "Design Is The Mix Of Emotions Try To Feel It",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      date: "20 December 2022",
      readTime: "3 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      category: "Design"
    },
    {
      id: 6,
      title: "Design Is The Mix Of Emotions",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      date: "19 December 2022",
      readTime: "2 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      category: "Design"
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
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col sm:flex-row bg-white dark:bg-gray-900  overflow-hidden">
              <div className="w-full sm:w-48 flex-shrink-0 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 sm:h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex-1">
                <Badge className="text-white dark:text-gray-900 bg-gray-900 dark:bg-white text-xs mb-2">
                  {post.category}
                </Badge>
                <h3 className="text-base md:text-lg font-semibold dark:text-white text-gray-900  mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-gray-500 dark:text-white text-sm mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-white text-sm line-clamp-2">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
