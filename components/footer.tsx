import Link from "next/link";
import { DISCORD_LINK, BOT_INVITE_LINK } from "@/settings";
import React from "react";
import Image from "next/image";

const Footer = () => {
    return <footer className="bg-gray-900/50 backdrop-blur-sm border-t-2 border-gray-700">
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
                        <li>
                            <Link
                                href="/faq"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                FAQ
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
                        <li>
                            <Link
                                href="/privacy"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/impressum"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Impressum
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <div className="flex flex-col sm:flex-row items-center justify-center text-sm sm:text-base">
                    <div className="flex items-center mb-2 sm:mb-0">
                        © {new Date().getFullYear()}
                        <span className="flex items-center mx-2">
                            <Image
                                src="https://cdn.discordapp.com/attachments/1369317160739930262/1369317274431000667/IMG_8687_3.png?ex=68215a56&is=682008d6&hm=e60b4bbea5062c4cf8004ed412c0e84808da1507bb495792e502013165b13e17&"
                                alt="Black Star Logo"
                                width={20}
                                height={20}
                                className="inline-block mx-1 rounded-full"
                            />
                            Black Star
                        </span>
                    </div>
                    <div>Team and Development. All rights reserved.</div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;