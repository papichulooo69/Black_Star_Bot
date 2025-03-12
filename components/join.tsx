import Link from "next/link";
import {Command, PlayCircle} from "lucide-react";
import {DISCORD_LINK} from "@/settings";

const Join = () => {
    return (
        <div className="mt-20">
            <div
                className="bg-blue-600/20 rounded-lg p-8 text-center backdrop-blur-sm border border-blue-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                    Bist du bereit, deine Universitätszeit zu verbessern?
                </h2>
                <p className="text-gray-300 mb-8">
                    Tritt unserer Community bei und entdecke die Möglichkeiten, die dir unser Bot bietet.
                    Erhalte Informationen über Veranstaltungen, Kurse und vieles mehr direkt in deinem
                    Discord-Server. Egal, ob du Fragen hast oder einfach nur plaudern möchtest, wir sind
                    hier, um dir zu helfen!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/commands"
                        className="inline-flex items-center px-6 py-3 bg-white text-blue-600 text-base font-medium rounded-md hover:bg-gray-100 transition-colors"
                    >
                        View Commands
                        <Command className="ml-2 h-5 w-5"/>
                    </Link>
                    <Link
                        href={DISCORD_LINK}
                        className="inline-flex items-center px-6 py-3 border border-white text-white text-base font-medium rounded-md hover:bg-white/10 transition-colors"
                    >
                        Join the Discord Server
                        <PlayCircle className="ml-2 h-5 w-5"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Join;