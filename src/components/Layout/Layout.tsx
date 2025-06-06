import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Sidebar from "../Sidebar";
export default function Layout({ children, sidebar = false, hero = false }: { children: React.ReactNode, sidebar?: boolean, hero?: boolean }) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 ">
            <Header />
            {hero && <Hero />}
            <main className="flex flex-col lg:flex-row max-w-7xl mx-auto py-10 gap-10">
                {/* Main Content */}
                <div className="flex-1 w-full lg:w-2/3">

                    {children}
                </div>

                {/* Sidebar */}
                {sidebar && <div className="w-full lg:w-1/3">
                    <Sidebar />
                </div>}
            </main>
            <Footer />
        </div>
    );
}