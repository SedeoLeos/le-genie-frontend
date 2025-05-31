
import { Badge } from '@/components/ui/badge';
import FeaturedSection from './FeaturedSection';
import { Calendar, Eye } from 'lucide-react';
import { Separator } from './ui/separator';

const Hero = () => {
  const popularPosts = [
    {
      title: "Design Is The Mix Of Emotions",
      date: "23 December 2022",
      readTime: "3 Min To Read",
      category: "Design"
    },
    {
      title: "Design Is The Mix Of Emotions",
      date: "23 December 2022",
      readTime: "3 Min To Read",
      category: "Design"
    }
  ];
  return (
    <section className="bg-gray-900 dark:bg-white py-12 md:py-20 px-4 md:px-6 flex justify-center gap-10 ">
      <div className='max-w-[700px]'>
        <FeaturedSection />
      </div>
      <Separator orientation="vertical" color='red' className='h-full w-1.5 bg-red-500' />
      {/* Popular Posted */}
      <div className='min-w-80 '>
        <div className="flex items-center mb-4">
          <Badge variant="secondary" className="text-white" style={{ backgroundColor: '#131A21' }}>Popular</Badge>
          <span className="ml-3 text-gray-900 font-semibold">Posted</span>
        </div>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <article key={index} className="bg-white  p-4">
              <Badge className="text-white text-xs mb-2" style={{ backgroundColor: '#131A21' }}>
                {post.category}
              </Badge>
              <h4 className="text-gray-900 font-medium mb-2 text-sm line-clamp-2">
                {post.title}
              </h4>
              <div className="flex items-center space-x-3 text-gray-500 text-xs">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Eye className="w-3 h-3 mr-1" />
                  {post.readTime}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
