import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";
import { DISCORD_LINK } from "@/settings";
import React from "react";

const Header = () => {
    return <header className="sticky top-0 z-50 bg-gray-900/50 backdrop-blur-md border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-white font-semibold">Black Star Start</span>
                    </Link>
                    <div className="hidden md:flex ml-8 space-x-4">
                        <Link
                            href="/commands"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Bot Commands
                        </Link>
                        <Link
                            href="/faq"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            FAQ
                        </Link>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Link
                        href={DISCORD_LINK}
                        className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                    >
                        <span className="flex items-center justify-center">
                            Join Discord Server <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    </header>

}

export default Header;