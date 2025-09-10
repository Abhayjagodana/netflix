"use client";
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-4 md:px-8 py-4 bg-gray-100 text-gray-900 shadow-md">
            {/* Left: Logo */}
            <div>
                <Link href="/">
                    <img
                        src="/logo1.png"
                        alt="Netflix Logo"
                        className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                    />
                </Link>
            </div>
            {/* Hamburger for mobile */}
            <button
                className="md:hidden ml-auto text-gray-900 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {/* Right: Navigation */}
            <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white-100 md:bg-transparent z-10 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 px-4 md:px-0 py-4 md:py-0">
                    <li>
                        <Link href="/" className="hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/movie" className="hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
                            Movie
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
                            Contact Us
                        </Link>
                    </li>

                    <li>
                        <Link href="/login" className="hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
                            Login
                        </Link>
                    </li>

                      <li>
                        <Link href="/signup" className="hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
                           Sign-up
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;