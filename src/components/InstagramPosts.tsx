
import { Badge } from '@/components/ui/badge';

const InstagramPosts = () => {
  const posts = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop", 
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop"
  ];

  const tags = [
    "Angular", "Kotlin", "React", "Swift", "Javascript", "Svelte", "Spring Boot", "Delphi", "Architecture"
  ];

  return (
    <section className="px-4 md:px-6 py-8 bg-white dark:bg-gray-900">
      <div className="max-w-full">
        {/* Knowledge Sharing Section */}
        <div className="bg-gray-900 dark:bg-white rounded-lg p-6 md:p-8 text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white dark:text-gray-900 mb-4">Share Your Knowledge With Our Readers</h2>
          <button className="px-4 md:px-6 py-2 md:py-3 rounded-lg dark:text-white text-gray-900 
          font-medium hover:opacity-90 transition-opacity text-sm md:text-base bg-white dark:bg-gray-900 border-2 border-gray-200" >
            📝 Write On Notebook
          </button>
        </div>

        {/* Instagram Posts */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <Badge variant="secondary" className="text-white dark:text-gray-900 bg-gray-900 dark:bg-white"  >Instagram</Badge>
            <span className="ml-3 text-gray-900 dark:text-white font-semibold">Posts</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {posts.map((post, index) => (
              <div key={index} className="aspect-square">
                <img 
                  src={post} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tags Section */}
        <div>
          <div className="flex items-center mb-6">
            <Badge variant="secondary" className="text-white dark:text-gray-900 bg-gray-900 dark:bg-white" >Search</Badge>
            <span className="ml-3 text-gray-900 dark:text-white font-semibold">With Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors cursor-pointer text-xs md:text-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramPosts;
