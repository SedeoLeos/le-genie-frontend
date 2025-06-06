/* eslint-disable react/no-unescaped-entities */
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
 import {  Instagram
  , Linkedin, Twitter } from 'lucide-react';

const Sidebar = () => {
  const authors = [
    {
      name: "Saba Gedeon",
      role: "Senior Designer",
      followers: "2.5k",
      following: "180",
      posts: "45"
    },
    {
      name: "Andreas Raad",
      role: "Product Manager",
      followers: "1.8k",
      following: "92",
      posts: "32"
    },
    {
      name: "Jenny Kol",
      role: "UX Designer",
      followers: "3.2k",
      following: "156",
      posts: "67"
    }
  ];

  const categories = [
    { name: "Spring Boot", count: 58 },
    { name: "Java", count: 56 },
    { name: "Kotlin", count: 39 },
    { name: "React", count: 16 },
    { name: "Laravel", count: 23 }
  ];

  const stats = [
    { label: "New Posts", value: "14" },
    { label: "Total Visitors", value: "480" },
    { label: "New Subscribers", value: "29" },
    { label: "Blog Read", value: "138" }
  ];

  const tags = [
    "Angular", "Kotlin", "React", "Swift", "Javascript", "Svelte", "Spring Boot", "Delphi", "Architecture"
  ];

  return (
    <aside className="w-80  p-6 space-y-8">
      

      {/* Authors */}
      <div>
        <div className="flex items-center mb-4 text-xl">
          <Badge variant="secondary" className="text-white dark:text-gray-900 text-xl bg-gray-900 dark:bg-white" >Top</Badge>
          <span className="ml-3 text-gray-900 dark:text-white font-semibold">Authors</span>
        </div>
        <div className="space-y-4">
          {authors.map((author, index) => (
            <div key={index} className="flex items-center space-x-5">
              <div className="w-20 h-20 bg-gray-200  rounded-full flex items-center justify-center">
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-gray-900 dark:text-white font-medium text-sm">{author.name}</h4>
                <p className="text-gray-500 dark:text-white text-xs">{author.role}</p>
                <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-white mt-1">
                  
                <Twitter className="w-2 h-2 text-gray-400 dark:text-white hover:text-white  cursor-pointer transition-colors" />
                <Instagram className="w-2 h-2 text-gray-400 dark:text-white hover:text-white  cursor-pointer transition-colors" />
                <Linkedin className="w-2 h-2 text-gray-400 dark:text-white hover:text-white  cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Banner */}
      <div className="bg-gray-900 dark:bg-white  p-10">
        <h3 className="text-white dark:text-gray-900 font-semibold mb-2">Want To Travel Sikkim By Car?</h3>
        <p className="text-white dark:text-gray-900 text-sm mb-4">
          Did you come here for something in particular or just general Riker-bashing? And blowing into...
        </p>
        <Button className="w-full text-gray-900 dark:text-white" style={{ backgroundColor: 'white' }}>
          Start Up
        </Button>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-white">{category.name}</span>
              <span className="text-gray-500 dark:text-white">{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Update */}
      <div>
        <div className="flex items-center mb-4">
          <Badge variant="secondary" className="text-white dark:text-gray-900 bg-gray-900 dark:bg-white" >Today's</Badge>
          <span className="ml-3 text-gray-900 dark:text-white font-semibold">Update</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900 dark:bg-white rounded-sm p-4 text-center">
              <div className="text-2xl font-bold text-white dark:text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs text-white dark:text-gray-900">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

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
    </aside>
  );
};

export default Sidebar;
