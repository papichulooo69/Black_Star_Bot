"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { DISCORD_LINK } from "@/settings";

const Header = () => {
    const pathname = usePathname();

    const NavLink = ({ href, label }: { href: string; label: string }) => {
        const isActive = pathname === href;
        return (
            <div className="relative">
                <Link
                    href={href}
                    className={`${isActive ? 'text-white' : 'text-gray-500'} text-xl font-semibold hover:text-white transition-colors`}
                >
                    {label}
                </Link>
                {isActive && (
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500"></div>
                )}
            </div>
        );
    };

    return <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute left-4 sm:left-6 lg:left-8 flex items-center h-16">
                <Link href="/" className="text-white text-xl font-bold">
                    Black Star
                </Link>
            </div>

            <div className="absolute left-0 right-0 flex justify-center">
                <div className="flex items-center space-x-12 h-16">
                    <div className="relative">
                        <Link
                            href="/"
                            className={`${pathname === '/' ? 'text-white' : 'text-gray-500'} text-xl font-semibold hover:text-white transition-colors`}
                        >
                            Start
                        </Link>
                        {pathname === '/' && (
                            <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500"></div>
                        )}
                    </div>
                    <NavLink href="/commands" label="Commands" />
                    <NavLink href="/faq" label="FAQ" />
                </div>
            </div>

            <div className="flex items-center justify-end h-16">
                <div>
                    <Link
                        href={DISCORD_LINK}
                        className="inline-flex items-center px-6 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                    >
                        Join Discord Server <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </nav>
    </header>
}

export default Header;