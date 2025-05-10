import Link from "next/link";
import { Command, PlayCircle, ArrowRight } from "lucide-react";
import { DISCORD_LINK } from "@/settings";

const Join = () => {
    return (
        <div className="mt-20">
            <div
                className="bg-slate-600/20 rounded-lg p-8 text-center backdrop-blur-sm border border-slate-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                    Bist du bereit deinen Discord Server auf ein neues Level zu bringen?
                </h2>
                <p className="text-gray-300 mb-8">
                    Benutze den Black Star Bot, um deinen Server zu verbessern und deine Community zu unterstützen.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/commands"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-600 text-base font-medium rounded-md hover:bg-gray-100 transition-colors"
                    >
                        <span className="flex items-center justify-center">
                            View Commands
                            <Command className="ml-2 h-5 w-5" />
                        </span>
                    </Link>
                    <Link
                        href={DISCORD_LINK}
                        className="inline-flex items-center justify-center px-6 py-3 border border-white text-white text-base font-medium rounded-md hover:bg-white/10 transition-colors"
                    >
                        <span className="flex items-center justify-center">
                            Join Discord Server
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Join;