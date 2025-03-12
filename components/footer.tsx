import Link from "next/link";
import {DISCORD_LINK, GITHUB_LINK, WEBSITE_LINK} from "@/settings";
import React from "react";
import {FolderGit2} from "lucide-react";

const Footer = () => {
    return   <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">About</h3>
                    <p className="text-gray-400">
                        Ein inoffizieller Discord Bot, erstellt von Studierenden für Studierende der HTWK Leipzig.
                    </p>
                    <p className="text-gray-400 mt-4">
                        <Link href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FolderGit2 className="inline-block mr-1"/>
                        </Link>
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href={WEBSITE_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                HTWK Leipzig
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/commands"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Commands
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={DISCORD_LINK}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Discord Server
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                    <p className="text-gray-400">
                        Diese Webseite und der Bot sind nicht offiziell mit der HTWK Leipzig verbunden.
                    </p>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>© {new Date().getFullYear()} HTWK Discord Team. All rights reserved.</p>
            </div>
        </div>
    </footer>
}

export default Footer;