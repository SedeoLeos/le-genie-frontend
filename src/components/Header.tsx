'use client'
import { Search, User, Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditIcon from './edit';
import Logo from './ui/logo';
import { useUser } from '@/features/auth/hooks/useAuth';
import { Link, useRouter } from '@/libs/i18nNavigation';

const Header = () => {
  const router = useRouter();
  const { user } = useUser();
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Navigation */}
        <div className="flex items-center space-x-8">
         
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition-colors">Homepage</Link>
            <a href="#" className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition-colors">About</a>
            <div className="relative">
              <a href="#" className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition-colors flex items-center">
                Categories
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </nav>
        </div>

        <div>
          <Logo/>
        </div>

        
        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200">
            <Search className="text-gray-600 dark:text-white w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200">
            <EditIcon className="text-gray-600 dark:text-white w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200">
            Contact
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200">
            En
          </Button>
          <Bell className="w-5 h-5 text-gray-500 dark:text-white cursor-pointer hover:text-gray-900 dark:hover:text-gray-200 transition-colors" />
          {user ? (
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600 dark:text-white" />
            </div>
          ) : (
            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200" onClick={() => router.push('/auth/sign-in')}>
              Se connecter
            </Button>
          )}
           <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
