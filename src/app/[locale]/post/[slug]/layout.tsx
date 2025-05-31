import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Header />
      
      <main className="flex flex-col lg:flex-row max-w-7xl mx-auto py-10 gap-10">
        {/* Main Content */}
        <div className="flex-1 w-full lg:w-2/3">
          {children}
        </div>
        
        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          <Sidebar />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default PostLayout