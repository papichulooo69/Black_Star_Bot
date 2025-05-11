"use client"

import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Circle, ChevronDown } from "lucide-react";

// Questions and answers directly integrated into the file
const QUESTIONS_AND_ANSWERS = [
    {
        question: "Wie erstelle ich einen Discord Account?",
        answer: "• Folge dazu einfach diesem Link: [Erstelle Deinen Account](https://support.discord.com/hc/de/articles/360033931551-Erste-Schritte#h_01H4RR2GE2FAK7DZ5W3765NGVT)",
    },
    {
        question: "Wer sind die Developer des Projekts?",
        answer: "• Paul - Discord Username: paul_pler </br> • [Colin](https://colin.heggli.dev/) - Discord Username: itadori",
    }
];

const QuestionAndAnswers = () => {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const toggleItem = (index: number) => {
        setOpenItems(prev => {
            const newSet = new Set<number>();
            // If clicking on already open item, close it
            // Otherwise, set only the clicked item as open
            if (prev.has(index)) {
                // Just return empty set (closing all items)
                return newSet;
            } else {
                // Add only the clicked item
                newSet.add(index);
                return newSet;
            }
        });
    };

    return (
        <main className="min-h-screen w-full">
            <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Häufig gestellte Fragen</h1>
                    <p className="text-xl text-gray-300 mb-32">
                        Hilft dir bei allgemeinen Fragen
                    </p>
                </div>

                <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-gray-300 space-y-6">
                    {QUESTIONS_AND_ANSWERS.map((qa, index) => {
                        const isOpen = openItems.has(index);

                        return (
                            <div
                                key={index}
                                className="border border-gray-700/40 rounded-xl overflow-hidden bg-gray-900/30 backdrop-blur-sm mb-4 last:mb-0"
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="flex items-center justify-between w-full px-6 py-5 text-left"
                                >
                                    <div className="flex items-center gap-5">
                                        <Circle
                                            className={`h-5 w-5 text-white ${isOpen ? 'fill-white' : 'fill-transparent'}`}
                                            strokeWidth={1.5}
                                        />
                                        <h3 className="text-lg font-medium text-white">
                                            {qa.question}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-12 pb-6 text-gray-300">
                                        <div className="rounded-lg p-4">
                                            <Markdown
                                                remarkPlugins={[remarkGfm]}
                                                rehypePlugins={[rehypeRaw]}
                                                components={{
                                                    a: ({ node, ...props }) => (
                                                        <a
                                                            {...props}
                                                            className="text-[#3dd1e7] hover:text-[#5eddf0] font-semibold hover:underline underline-offset-2 transition-colors duration-200"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{ color: '#3dd1e7' }}
                                                        />
                                                    ),
                                                }}
                                            >
                                                {qa.answer}
                                            </Markdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

const Page = () => {
    return <QuestionAndAnswers />;
};

export default Page;