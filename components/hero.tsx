import { DISCORD_LINK, BOT_INVITE_LINK } from "@/settings";
import { ArrowRight, School, Bot } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="text-center">
            <div className="flex justify-center mb-8">
                <School className="h-20 w-20 text-slate-500" />
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
                Black Star Discord
            </h1>
            <p className="mt-6 text-xl text-gray-300">
                Dein zuverlässiger Discord Bot
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    href={DISCORD_LINK}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                    Join Discord Server
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                    href={BOT_INVITE_LINK}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                    Invite Black Star
                    <Bot className="ml-2 h-5 w-5" />
                </Link>
            </div>
        </div>
    );
}

export default Hero;