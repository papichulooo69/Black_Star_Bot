'use client';

import { useState } from 'react';

export default function CopyEmailButton({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error('Fehler beim Kopieren: ', err);
            });
    };

    return (
        <span
            className="text-blue-400 hover:underline cursor-pointer ml-1 inline-flex items-center group relative"
            onClick={copyEmailToClipboard}
            title="Klicken zum Kopieren"
        >
            {email}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>

            {copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded">
                    Kopiert!
                </span>
            )}
        </span>
    );
}
