import { DISCORD_LINK } from "@/settings";
import { ArrowRight, School } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="text-center">
            <div className="flex justify-center mb-8">
                <School className="h-20 w-20 text-slate-500" />
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
                HTWK Leipzig Discord Server
            </h1>
            <p className="mt-6 text-xl text-gray-300">
                Deine digitale Anlaufstelle bei Problemen und Fragen
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    href={DISCORD_LINK}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 transition-colors"
                >
                    Join Discord Server
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </div>
        </div>
    );
}

export default Hero;