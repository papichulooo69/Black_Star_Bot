"use client"

import { useState } from "react";
import { QUESTIONS_AND_ANSWERS } from "@/settings"
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Circle, ChevronDown } from "lucide-react";

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
        <>
            <div className="text-center mb-32 mt-12 py-4">
                <h1 className="text-4xl font-bold text-white mb-8">Häufig gestellte Fragen</h1>
                <p className="text-xl text-gray-300">
                    Hilft dir bei allgemeinen Fragen
                </p>
            </div>

            <div className="w-full space-y-6 max-w-4xl mx-auto">
                {QUESTIONS_AND_ANSWERS.map((qa, index) => {
                    const isOpen = openItems.has(index);

                    return (
                        <div
                            key={index}
                            className="border border-gray-400/20 rounded-lg pb-6 mb-4"
                        >
                            <div className="flex items-start gap-4 p-4">
                                <div className="mt-1 flex-shrink-0">
                                    <Circle
                                        className={`h-5 w-5 text-white ${isOpen ? 'fill-white' : 'fill-transparent'}`}
                                        strokeWidth={4.5}
                                    />
                                </div>
                                <div className="flex-1">
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="flex justify-between items-center w-full text-left"
                                    >
                                        <h3 className="text-lg font-medium text-white mb-2">
                                            {qa.question}
                                        </h3>
                                        <ChevronDown
                                            className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className={`text-gray-300 markdown mt-3 pl-4 border-l-2 border-cyan-800/40`}>
                                            <div className="bg-gray-900/30 rounded-lg p-4 backdrop-blur-sm">
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
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default QuestionAndAnswers;