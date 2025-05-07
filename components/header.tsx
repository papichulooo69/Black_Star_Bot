import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { DISCORD_LINK } from "@/settings";
import React from "react";

const Header = () => {
    return <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <GraduationCap className="h-8 w-8 text-slate-500" />
                        <span className="text-white font-semibold">Discord Server</span>
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
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 transition-colors"
                    >
                        Join Discord Server
                    </Link>
                </div>
            </div>
        </nav>
    </header>

}

export default Header;