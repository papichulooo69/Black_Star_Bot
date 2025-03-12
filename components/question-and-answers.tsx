"use client"

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import {QUESTIONS_AND_ANSWERS} from "@/settings"
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const QuestionAndAnswers = () => {
    return (
        <>
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
                <p className="text-xl text-gray-300">
                    Find answers to common questions about our services
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
                {QUESTIONS_AND_ANSWERS.map((qa, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700"
                    >
                        <AccordionTrigger className="text-left px-6 text-white hover:text-white">
                            {qa.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-300">
                            <Markdown remarkPlugins={[remarkGfm]}>{qa.answer}</Markdown>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}

export default QuestionAndAnswers;