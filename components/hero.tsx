import {ArrowRight, Bot} from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
            <div className="text-center">
                <div className="flex justify-center mb-8">
                    <Bot className="h-20 w-20 text-blue-500"/>
                </div>
                <h1 className="text-4xl font-bold text-white sm:text-6xl">
                    HTWK Leipzig Discord Bot
                </h1>
                <p className="mt-6 text-xl text-gray-300">
                    Dein digitaler Assistent für die HTWK Leipzig Community
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="https://discord.gg/your-invite-link"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        Join our Discord Server
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </Link>
                </div>
            </div>
    );
}

export default Hero;