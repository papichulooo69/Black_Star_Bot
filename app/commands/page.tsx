"use client";

import { COMMANDS } from "@/settings";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

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
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Bot Commands</h1>
                    <p className="text-xl text-gray-300">
                        Erkunde alle verfügbaren Befehle, um deine Universitätszeit zu
                        verbessern
                    </p>
                </div>

                <div className="mb-8 space-y-4">
                    <input
                        type="text"
                        placeholder="Suche nach Befehlen..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />

                    <div className="flex flex-wrap gap-2">
                        {allCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => toggleCategory(category)}
                                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                                    selectedCategories.includes(category)
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Slash Commands Section */}
                {filteredCommands.slashCommands.length > 0 && (
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Slash Commands
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredCommands.slashCommands.map((cmd) => (
                                <div
                                    key={cmd.name}
                                    className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                {cmd.name}
                                            </h3>
                                            {cmd.categories.map((category, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-blue-500/20 text-blue-300 text-sm px-2 py-1 rounded-md mr-2 mb-2"
                                                >
                          {category}
                        </span>
                                            ))}
                                            <p className="text-gray-300 mb-4">{cmd.description}</p>
                                        </div>
                                        <button
                                            onClick={() => copyCommand(cmd.example)}
                                            className="text-gray-400 hover:text-white transition-colors"
                                            title="Copy example command"
                                        >
                                            {copiedCommand === cmd.example ? (
                                                <Check className="h-5 w-5" />
                                            ) : (
                                                <Copy className="h-5 w-5" />
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
                )}

                {/* Prefix Commands Section */}
                {filteredCommands.prefixCommands.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Prefix Commands
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredCommands.prefixCommands.map((cmd) => (
                                <div
                                    key={cmd.name}
                                    className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                {cmd.name}
                                            </h3>
                                            {cmd.categories.map((category, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-blue-500/20 text-blue-300 text-sm px-2 py-1 rounded-md mr-2 mb-2"
                                                >
                          {category}
                        </span>
                                            ))}
                                            <p className="text-gray-300 mb-4">{cmd.description}</p>
                                        </div>
                                        <button
                                            onClick={() => copyCommand(cmd.example)}
                                            className="text-gray-400 hover:text-white transition-colors"
                                            title="Copy example command"
                                        >
                                            {copiedCommand === cmd.example ? (
                                                <Check className="h-5 w-5" />
                                            ) : (
                                                <Copy className="h-5 w-5" />
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
