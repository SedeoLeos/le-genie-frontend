
'use client'
import { Calendar, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const FeaturedSection = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Set Video Playback Speed With Javascript",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      date: "25 December 2022",
      readTime: "5 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      category: "Javascript"
    },
    {
      id: 2,
      title: "Design Is The Mix Of Emotions",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      date: "23 December 2022",
      readTime: "3 Min To Read",
      description: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum...",
      category: "Design"
    }
  ];

  return (
    <section className="px-4 md:px-6 ">
      <div className="max-w-full">
        <div className="flex items-center mb-6">
          <Badge variant="secondary" className="text-gray-900 dark:text-white dark:bg-gray-900 bg-white p-2" >Featured</Badge>
          <span className="ml-3 dark:text-gray-900 text-white font-semibold">This Month</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {featuredPosts.map((post) => (
            <article key={post.id} className="overflow-hidden ">
              <Badge className=" text-gray-900 dark:text-white dark:bg-gray-900 bg-white p-1 text-[8px]" >
                {post.category}
              </Badge>
              <h3 className="text-lg md:text-xl font-bold dark:text-gray-900 text-white mb-3 line-clamp-2 min-h-[60px] max-h-[60px]">
                {post.title}
              </h3>
              <div className="relative w-full h-48" >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="p-2 md:p-4">

                <div className="flex flex-wrap sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0  text-white dark:text-gray-500 text-sm mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <p className="dark:text-gray-600 text-white text-sm line-clamp-3">
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

export default FeaturedSection;
