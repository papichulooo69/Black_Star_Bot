import { DISCORD_LINK, BOT_INVITE_LINK } from "@/settings";
import { ArrowRight, School, Bot } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="text-center">

            <h1 className="text-4xl font-bold text-white sm:text-6xl mt-16 mb-4">
                Black Star
            </h1>
            <p className="text-xl text-gray-300">
                Dein zuverlässiger Discord Bot
            </p>
            <div className="mt-10 mb-32 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    href={DISCORD_LINK}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                    <span className="flex items-center justify-center">
                        Join Discord Server
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                </Link>
                <Link
                    href={BOT_INVITE_LINK}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                    <span className="flex items-center justify-center">
                        Invite Black Star
                        <Bot className="ml-2 h-5 w-5" />
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Hero;