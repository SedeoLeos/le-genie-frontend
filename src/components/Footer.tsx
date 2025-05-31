
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from './ui/logo';

const Footer = () => {
  return (
    <footer className="bg-gray-400 dark:bg-white mt-16">
      <div className='bg-gray-900/90 dark:bg-white'>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          {/* Hero Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <Logo defaultPlatform="light" />
              <p className="text-gray-400 dark:text-gray-900 text-sm mb-4">
                Did you come here for something in particular or just general Riker-bashing? And blowing into...
              </p>
            </div>

            {/* Blogs */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold mb-4">Blogs</h3>
              <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-900">
                <li><a href="#" className="hover:text-white dark:hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-900 transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-900 transition-colors">Archive</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-900 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-900 transition-colors">Authors</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-900">
                <li><a href="#" className="hover:text-white dark:hover:text-gray-900 transition-colors">Homepage</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-900 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-900 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-900 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="text-center md:text-left">
              <h3 className="text-white dark:text-gray-900 font-semibold mb-4">Subscribe For Newsletter</h3>
              <div className="flex bg-white  dark:bg-gray-900 rounded-sm overflow-hidden">
                <Input
                  placeholder="Your Email"
                  className="!bg-transparent focus-visible:ring-0 !border-0  focus-visible:ring-offset-0  focus-visible:outline-0 text-white dark:text-white placeholder-gray-400 dark:placeholder-gray-600 rounded-none"
                />
                <Button className=" dark:bg-[#666666] bg-gray-900 p-2 dark:text-white  text-white dark:hover:bg-gray-100 hover:bg-gray-900 rounded-none rounded-r-sm ">
                  Subscribe
                </Button>
              </div>
              <div className="mt-6">
                <p className="text-gray-400 dark:text-gray-900 text-sm mb-3">Follow On:</p>
                <div className="flex justify-center md:justify-start space-x-3">
                  <Facebook className="w-3 h-3 text-gray-400 dark:text-gray-900 hover:text-white dark:hover:text-gray-900 cursor-pointer transition-colors" />
                  <Twitter className="w-3 h-3 text-gray-400 dark:text-gray-900 hover:text-white dark:hover:text-gray-900 cursor-pointer transition-colors" />
                  <Instagram className="w-3 h-3 text-gray-400 dark:text-gray-900 hover:text-white dark:hover:text-gray-900 cursor-pointer transition-colors" />
                  <Linkedin className="w-3 h-3 text-gray-400 dark:text-gray-900 hover:text-white dark:hover:text-gray-900 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t dark:border-gray-400 border-white mt-8 md:mt-12 pt-6 text-center">
            <p className="text-gray-400 dark:text-gray-900 text-xs md:text-sm">
              Inpered to <a href="https://www.ramkrishsancharle.com/" target="_blank" rel="noopener noreferrer"> RamKrish & Sancharle</a> Integrate by Slaega.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
