"use client";

import {Check, Copy} from "lucide-react";
import {useState} from "react";
import {COMMANDS} from "@/settings";

export default function CommandsPage() {
    const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

    const copyCommand = (command: string) => {
        navigator.clipboard.writeText(command).then(r => r);
        setCopiedCommand(command);
        setTimeout(() => setCopiedCommand(null), 2000);
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Bot Commands</h1>
                    <p className="text-xl text-gray-300">
                        Erkunde alle verfügbaren Befehle, um deine Universitätszeit zu verbessern
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {COMMANDS.map((cmd) => (
                        <div
                            key={cmd.name}
                            className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {cmd.name}
                                    </h3>
                                    {
                                        cmd.categories.map((category, index) => (
                                            <span
                                                key={index}
                                                className="inline-block bg-blue-500/20 text-blue-300 text-sm px-2 py-1 rounded-md mr-2 mb-2">
                                                {category}
                                            </span>
                                        ))
                                    }
                                    <p className="text-gray-300 mb-4">{cmd.description}</p>
                                </div>
                                <button
                                    onClick={() => copyCommand(cmd.example)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    title="Copy example command"
                                >
                                    {copiedCommand === cmd.example ? (
                                        <Check className="h-5 w-5"/>
                                    ) : (
                                        <Copy className="h-5 w-5"/>
                                    )}
                                </button>
                            </div>
                            <div className="bg-gray-900/50 rounded p-3 font-mono text-sm text-gray-300">
                                Beispiel: {cmd.example}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}