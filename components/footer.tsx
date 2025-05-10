import Link from "next/link";
import { DISCORD_LINK, BOT_INVITE_LINK } from "@/settings";
import React from "react";

const Footer = () => {
    return <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-4">About</h3>
                    <p className="text-gray-400">
                        Das ist die offizielle Webseite des Black Star Discord Bots. Hier findest du Informationen über den Server, den Bot und wie du beitreten kannst.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/commands"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                View Commands
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={DISCORD_LINK}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Join Discord Server
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={BOT_INVITE_LINK}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Invite Black Star
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/terms"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                    <p className="text-gray-400 mt-2">
                        Diese Webseite ist offziell mit dem dazugehörigen Discord Server und Discord Bot verbunden.
                    </p>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>© {new Date().getFullYear()} Black Star Team. All rights reserved.</p>
            </div>
        </div>
    </footer>
}

export default Footer;