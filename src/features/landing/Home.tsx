
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Sidebar from '@/components/Sidebar';
import RecentPosts from '@/components/RecentPosts';
import InstagramPosts from '@/components/InstagramPosts';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      
      <main className="flex flex-col lg:flex-row max-w-7xl mx-auto py-10">
        {/* Main Content */}
        <div className="flex-1 w-full lg:w-2/3">
          <RecentPosts />
          <InstagramPosts />
        </div>
        
        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          <Sidebar />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
