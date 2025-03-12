"use client";

import Stats from "@/components/stats";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Join from "@/components/join";

export default function Home() {

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <Hero/>
                <Stats/>
                <Features/>
                <Join/>
            </div>
        </main>
    );
}