import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation();


    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Pricing", path: "/pricing" },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md transition-all duration-300">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between p-4">
                {/* Logo Section */}
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center whitespace-nowrap text-3xl font-bold text-gray-900">
                        Quizee
                    </span>
                </Link>

                {/* Mobile Menu Button (Hamburger) */}
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <div className="relative h-5 w-5">
                        <span className={`absolute left-0 top-0 block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                        <span className={`absolute left-0 top-2 block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`absolute left-0 top-4 block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
                    </div>
                </button>

                {/* Desktop Menu */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:items-center md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    isActive={location.pathname === link.path}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                        {/* Special CTA Button for the last item */}
                        <li>
                            <Link
                                to="/login"
                                className="block rounded-full bg-black px-5 py-2 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 md:inline-block"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Dropdown (Animated) */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col space-y-2 border-t border-gray-100 bg-gray-50 p-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block rounded py-2 px-3 text-base ${location.pathname === link.path
                                        ? "bg-gray-600 text-white"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block rounded py-2 px-3 text-base font-medium text-gray-600 hover:bg-gray-100"
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function NavLink({ to, children, isActive }: { to: string; children: React.ReactNode, isActive: boolean }) {
    return (
        <Link
            to={to}
            className={`block rounded py-2 px-3 transition-colors md:bg-transparent md:p-0 ${isActive
                    ? "text-gray-700 font-semibold md:text-gray-600"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700"
                }`}
            aria-current={isActive ? "page" : undefined}
        >
            {children}
            <span className={`hidden md:block h-0.5 bg-gray-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}></span>
        </Link>
    );
}