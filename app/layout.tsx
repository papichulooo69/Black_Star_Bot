import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from "react";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Banners from "@/components/banners";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Black Star Bot',
    description: 'Offizielle Webseite des Black Star Discord Bots',
    themeColor: '#000000', // Setzt die Akzentfarbe auf Schwarz
    openGraph: {
        title: 'Black Star Bot',
        description: 'Offizielle Webseite des Black Star Discord Bots',
        url: 'https://black-star.xyz/',
        siteName: 'Black Star Bot',
        images: [
            {
                url: 'https://cdn.discordapp.com/attachments/1366089317541351444/1366089406708191283/pexels-slendyalex-3648850.jpg',
                width: 1200,
                height: 630,
                alt: 'Black Star Bot',
            }
        ],
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Black Star Bot',
        description: 'Offizielle Webseite des Black Star Discord Bots',
        images: ['https://cdn.discordapp.com/attachments/1366089317541351444/1366089406708191283/pexels-slendyalex-3648850.jpg'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
            <body
                className={cn(inter.className, "text-white relative")}
            >
                {/* Background image with blur effect */}
                <div
                    className="fixed inset-0 -z-20"
                    style={{
                        backgroundImage: "url('https://cdn.discordapp.com/attachments/1366089317541351444/1366089406708191283/pexels-slendyalex-3648850.jpg?ex=6820d0e7&is=681f7f67&hm=5948a2d0dc8ff5592037cf5127f125f9d863c673536f93110b4fec1c78179272&')",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        filter: "blur(2px)", // Reduced from 5px to 2px
                        transform: "scale(1.1)", // Prevents blur edges from showing
                    }}
                />

                {/* Dark overlay for readability */}
                <div
                    className="fixed inset-0 bg-black/60 -z-10" // Reduced opacity from 70% to 60%
                    style={{ pointerEvents: "none" }}
                />

                {/* Content */}
                <div className="relative z-10">
                    <Banners />
                    <Header />
                    <main className="min-h-screen">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                            {children}
                        </div>
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}