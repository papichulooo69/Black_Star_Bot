"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const NavLink = ({ href, label }: { href: string; label: string }) => {
        const isActive = pathname === href;
        return (
            <Link
                href={href}
                className={`${isActive ? 'text-white' : 'text-gray-500'} text-xl font-semibold hover:text-white transition-colors`}
            >
                {label}
            </Link>
        );
    };

    return <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16 space-x-12">
                <Link
                    href="/"
                    className={`${pathname === '/' ? 'text-white' : 'text-gray-500'} text-xl font-semibold hover:text-white transition-colors`}
                >
                    Start
                </Link>
                <NavLink href="/commands" label="Bot Commands" />
                <NavLink href="/faq" label="FAQ" />
            </div>
        </nav>
    </header>
}

export default Header;