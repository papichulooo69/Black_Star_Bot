"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { DISCORD_LINK } from "@/settings";
import Image from "next/image";

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavigate = (href: string) => {
        setMobileMenuOpen(false);

        // Only add fade effect if navigating to a different page
        if (pathname !== href) {
            // Create overlay for dark transition
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            overlay.style.transition = 'background-color 0.25s ease';
            overlay.style.zIndex = '9999';
            document.body.appendChild(overlay);

            // Fade to black, aber weniger intensiv (0.5 statt 0.8)
            setTimeout(() => {
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

                // Navigate after short delay
                setTimeout(() => {
                    router.push(href);

                    // Fade out the overlay after navigation
                    setTimeout(() => {
                        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';

                        // Remove overlay after fade out
                        setTimeout(() => {
                            document.body.removeChild(overlay);
                        }, 250);
                    }, 100);
                }, 200);
            }, 10);
        }
    };

    const NavLink = ({ href, label }: { href: string; label: string }) => {
        const isActive = pathname === href;
        return (
            <div className="relative">
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavigate(href);
                    }}
                    href={href}
                    className={`${isActive ? 'text-white' : 'text-gray-500'} text-xl font-semibold hover:text-white transition-colors cursor-pointer`}
                >
                    {label}
                </a>
                {isActive && (
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500"></div>
                )}
            </div>
        );
    };

    return <header className="sticky top-0 z-50 bg-[#0d1117]/70 backdrop-blur-md border-y border-gray-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            {/* Logo - always visible */}
            <div className="flex-shrink-0">
                <Link href="/" className="text-white hover:text-gray-400 transition-colors text-xl font-bold flex items-center">
                    <div className="flex items-center">
                        <Image
                            src="https://cdn.discordapp.com/attachments/1369317160739930262/1369317274431000667/IMG_8687_3.png?ex=6820b196&is=681f6016&hm=f6959bb77cdda987be2e3c5dc2c99d152133148039a47ec55e6aa8eef7d511f3&"
                            alt="Black Star Logo"
                            width={28}
                            height={28}
                            className="inline-block align-middle"
                        />
                        <span className="ml-2 inline-block align-middle">Black Star</span>
                    </div>
                </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex justify-center flex-1">
                <div className="flex items-center space-x-16">
                    <div className="relative">
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigate('/');
                            }}
                            href="/"
                            className={`${pathname === '/' ? 'text-white' : 'text-gray-500'} text-xl font-semibold hover:text-white transition-colors cursor-pointer`}
                        >
                            Home
                        </a>
                        {pathname === '/' && (
                            <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500"></div>
                        )}
                    </div>
                    <NavLink href="/commands" label="Commands" />
                    <NavLink href="/faq" label="FAQ" />
                    <NavLink href="/terms" label="Terms" />
                    <NavLink href="/privacy" label="Privacy" />
                </div>
            </div>

            {/* Right section - Discord button for desktop and mobile menu button for mobile */}
            <div className="flex-shrink-0 flex items-center">
                {/* Discord button - only visible on desktop */}
                <a
                    href={DISCORD_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium"
                >
                    Join Discord Server
                    <ArrowRight className="h-4 w-4" />
                </a>

                {/* Mobile menu button - only on small screens */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white hover:text-gray-400 focus:outline-none p-1.5 rounded-md"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-8 w-8" />
                        ) : (
                            <Menu className="h-8 w-8" />
                        )}
                    </button>
                </div>
            </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
            <div className="lg:hidden bg-transparent border-t border-gray-700 min-h-[calc(100vh-64px)] flex flex-col justify-center">
                <div className="flex flex-col items-center py-8">
                    <div className="flex flex-col items-center gap-16">
                        {['/', '/commands', '/faq', '/terms', '/privacy'].map(menuPath => {
                            const isActive = pathname === menuPath;
                            const label = menuPath === '/' ? 'Home' :
                                menuPath === '/commands' ? 'Commands' :
                                    menuPath === '/faq' ? 'FAQ' :
                                        menuPath === '/terms' ? 'Terms' :
                                            'Privacy';
                            return (
                                <div key={menuPath} className="relative">
                                    <a
                                        href={menuPath}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigate(menuPath);
                                        }}
                                        className={`text-2xl font-medium ${isActive ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors cursor-pointer`}
                                    >
                                        {label}
                                    </a>
                                    {isActive && (
                                        <div className="absolute mt-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-blue-500"></div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Action buttons */}
                        <div className="flex flex-col w-full gap-4 px-8 mt-4">
                            <a
                                href={DISCORD_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Join Discord Server
                                <ArrowRight className="h-5 w-5" />
                            </a>

                            <a
                                href="https://discord.com/api/oauth2/authorize?client_id=1125742322254688266&permissions=1377342354742&scope=bot%20applications.commands"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Invite Black Star
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot">
                                    <path d="M12 8V4H8" />
                                    <rect width="16" height="12" x="4" y="8" rx="2" />
                                    <path d="M2 14h2" />
                                    <path d="M20 14h2" />
                                    <path d="M15 13v2" />
                                    <path d="M9 13v2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </header>
}

export default Header;