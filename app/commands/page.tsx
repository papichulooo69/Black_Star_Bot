"use client";

import { Command, COMMANDS } from "@/settings";
import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

export default function CommandsPage() {
    const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const copyCommand = (command: string) => {
        navigator.clipboard.writeText(command).then((r) => r);
        setCopiedCommand(command);
        setTimeout(() => setCopiedCommand(null), 2000);
    };

    // Get unique categories from all commands
    const allCategories = Array.from(
        new Set(COMMANDS.flatMap((cmd) => cmd.categories))
    );

    const groupedCommands = {
        slashCommands: COMMANDS.filter((cmd) => cmd.name.startsWith("/")),
        prefixCommands: COMMANDS.filter((cmd) => cmd.name.startsWith("!")),
    };

    const filteredCommands = {
        slashCommands: groupedCommands.slashCommands.filter((cmd) => {
            const matchesSearch = cmd.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesCategories =
                selectedCategories.length === 0 ||
                cmd.categories.some((cat) => selectedCategories.includes(cat));
            return matchesSearch && matchesCategories;
        }),
        prefixCommands: groupedCommands.prefixCommands.filter((cmd) => {
            const matchesSearch = cmd.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesCategories =
                selectedCategories.length === 0 ||
                cmd.categories.some((cat) => selectedCategories.includes(cat));
            return matchesSearch && matchesCategories;
        }),
    };

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    return (
        <main className="min-h-screen">
            {/* Angepasster Hintergrund mit der dunklen Struktur, wie auf anderen Seiten */}
            <div
                className="fixed inset-0 bg-black"
                style={{
                    zIndex: -1,
                    backgroundImage: "url('/images/background.jpg')", // Falls du ein Hintergrundbild verwendest
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.2  // Reduzierte Opazität für subtilen Effekt
                }}
            ></div>

            <div className="relative max-w-[98rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
                <div className="text-center mb-16">
                    <Terminal className="w-16 h-16 mx-auto mb-6 text-white" strokeWidth={2.2} />
                    <h1 className="text-4xl font-bold text-white mb-4">Bot Commands</h1>
                    <p className="text-xl text-gray-300 mb-32">
                        Nutze die folgenden Befehle mit dem Black Star Bot
                    </p>
                </div>

                <div className="mb-24 space-y-4">
                    <input
                        type="text"
                        placeholder="Suche nach Befehlen..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-slate-500 backdrop-blur-sm"
                    />

                    <div className="flex flex-wrap gap-2">
                        {allCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => toggleCategory(category)}
                                className={`px-3 py-1 rounded-full text-sm transition-colors backdrop-blur-sm ${selectedCategories.includes(category)
                                    ? "bg-slate-500/90 text-white"
                                    : "bg-gray-800/70 text-gray-300 hover:bg-gray-700/90"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Slash Commands Section */}
                {filteredCommands.slashCommands.length > 0 && (
                    <div className="mb-20">
                        <div className="flex items-center justify-between mb-8 py-3 px-8 bg-[#20242e]/90 backdrop-blur-sm rounded-lg border-2 border-[#323845]">
                            <div className="flex items-center">
                                <h2 className="text-4xl font-bold text-white tracking-wide">
                                    Slash Commands
                                </h2>
                                <div className="ml-4 bg-[#323845] text-white text-xl w-10 h-10 flex items-center justify-center rounded-lg border border-[#404758]">
                                    /
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-white">({filteredCommands.slashCommands.length})</span>
                        </div>
                        <CommandsList commands={filteredCommands.slashCommands} copyCommand={copyCommand}
                            copiedCommand={copiedCommand} />
                    </div>
                )}

                {/* Prefix Commands Section */}
                {filteredCommands.prefixCommands.length > 0 && (
                    <div>
                        <div className="flex items-center justify-between mb-8 py-3 px-8 bg-[#20242e]/90 backdrop-blur-sm rounded-lg border-2 border-[#323845]">
                            <div className="flex items-center">
                                <h2 className="text-4xl font-bold text-white tracking-wide">
                                    Prefix Commands
                                </h2>
                                <div className="ml-4 bg-[#323845] text-white text-xl w-10 h-10 flex items-center justify-center rounded-lg border border-[#404758]">
                                    !
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-white">({filteredCommands.prefixCommands.length})</span>
                        </div>
                        <CommandsList commands={filteredCommands.prefixCommands} copyCommand={copyCommand}
                            copiedCommand={copiedCommand} />
                    </div>
                )}

                {/* Show a message when no commands match the filters */}
                {filteredCommands.slashCommands.length === 0 &&
                    filteredCommands.prefixCommands.length === 0 && (
                        <div className="text-center py-10">
                            <p className="text-xl text-gray-400">
                                Keine Befehle gefunden. Bitte ändere deine Suchkriterien.
                            </p>
                        </div>
                    )}
            </div>
        </main>
    );
}

const CommandsList = ({ commands, copyCommand, copiedCommand }: {
    commands: Command[],
    copyCommand: (command: string) => void,
    copiedCommand: string | null
}) => {
    return <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8">
        {commands.map((cmd) => (
            <div
                key={cmd.name}
                className="bg-gray-800/70 rounded-lg p-6 backdrop-blur-sm border border-gray-700 h-full"
            >
                <div className="flex items-start justify-between">
                    <div className="w-full pr-4">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            {cmd.name}
                        </h3>
                        {cmd.categories.map((category, index) => (
                            <span
                                key={index}
                                className="inline-block bg-slate-500/20 text-slate-300 text-sm px-2 py-1 rounded-md mr-2 mb-2"
                            >
                                {category}
                            </span>
                        ))}
                        <p className="text-gray-300 mb-4">{cmd.description}</p>
                    </div>
                    <button
                        onClick={() => copyCommand(cmd.name)}
                        className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                        title="Copy example command"
                    >
                        {copiedCommand === cmd.name ? (
                            <Check className="h-5 w-5" />
                        ) : (
                            <Copy className="h-5 w-5" />
                        )}
                    </button>
                </div>
                <p className="text-gray-500 mb-2">Beispiel:</p>
                {/* Example command */}
                <div className="bg-gray-900/50 rounded p-3 font-mono text-sm text-gray-300 flex items-center gap-2 overflow-x-auto scrollbar-dark">
                    {
                        cmd.name.startsWith("/") ? (
                            cmd.parameters && cmd.parameters.length > 0 ? (
                                <>
                                    {cmd.name}
                                    {
                                        cmd.parameters.map((param, index) => (
                                            <span
                                                key={index}
                                                className="bg-slate-500/20 text-slate-300 text-sm pl-2 rounded-md mr-2 flex items-center gap-2"
                                            >
                                                {param.name}:
                                                {
                                                    param.example &&
                                                    <span
                                                        className="inline-block bg-slate-500/20 text-slate-300 text-sm px-2 py-1 rounded-md "
                                                    >
                                                        {param.example}
                                                    </span>
                                                }
                                            </span>
                                        ))
                                    }
                                </>
                            ) : (
                                cmd.name
                            )
                        ) : (
                            <>
                                {cmd.parameters && cmd.parameters.length > 0 ? (
                                    `${cmd.name} ${cmd.parameters.map(param => param.example || `<${param.name}>`).join(' ')}`
                                ) : (
                                    cmd.name
                                )}
                            </>
                        )
                    }
                </div>
                {cmd.parameters && cmd.parameters?.length > 0 && (
                    <>
                        <p className="text-gray-500 mt-4 mb-2">Parameter:</p>
                        <div className="space-y-2">
                            {cmd.parameters?.map((param, index) => (
                                <div key={index} className="text-sm flex flex-wrap items-baseline">
                                    <span className="text-slate-400 mr-1">{param.name}</span>
                                    <span className="text-gray-300"> - {param.description}</span>
                                    <span
                                        className={`ml-2 text-xs ${param.required ? 'text-red-400' : 'text-gray-500'}`}>
                                        {param.required ? '(required)' : '(optional)'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        ))}
    </div>
}
