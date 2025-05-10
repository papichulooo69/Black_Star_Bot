import { DISCORD_LINK, BOT_INVITE_LINK } from "@/settings";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="text-center">

            <div className="flex items-center justify-center gap-4 mt-16 mb-4">
                <Image
                    src="https://cdn.discordapp.com/attachments/1369317160739930262/1369317274431000667/IMG_8687_3.png?ex=6820b196&is=681f6016&hm=f6959bb77cdda987be2e3c5dc2c99d152133148039a47ec55e6aa8eef7d511f3&"
                    alt="Black Star Logo"
                    width={60}
                    height={60}
                    className="rounded-full"
                />
                <h1 className="text-4xl font-bold text-white sm:text-6xl">
                    Black Star
                </h1>
            </div>
            <p className="text-xl text-gray-300">
                Dein zuverlässiger Discord Bot
            </p>
            <div className="mt-20 mb-32 flex flex-col sm:flex-row justify-center gap-4 mx-auto">
                <Link
                    href={DISCORD_LINK}
                    className="flex items-center justify-center px-6 py-3 text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                    Join Discord Server
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                    href={BOT_INVITE_LINK}
                    className="flex items-center justify-center px-6 py-3 text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                    Invite Black Star
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 lucide lucide-bot">
                        <path d="M12 8V4H8" />
                        <rect width="16" height="12" x="4" y="8" rx="2" />
                        <path d="M2 14h2" />
                        <path d="M20 14h2" />
                        <path d="M15 13v2" />
                        <path d="M9 13v2" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default Hero;