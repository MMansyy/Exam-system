import Navbar from '@/components/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';

// Temporary Footer Placeholder (You can replace this with your component import later)
const Footer = () => (
    <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
        <div className="mx-auto max-w-7xl px-4">
            <p>&copy; {new Date().getFullYear()} Mansy App. All rights reserved.</p>
        </div>
    </footer>
);

export default function MainLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 antialiased">
            <Navbar />
            <main className="grow pt-20">
                <div className="mx-auto w-full max-w-7xl px-4  sm:px-6 lg:px-8">
                    <div className="animate-fade-in-up">
                        <ScrollRestoration />
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}