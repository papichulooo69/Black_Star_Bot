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
                url: 'https://cdn.discordapp.com/attachments/1366089317541351444/1370887676491726919/IMG_5514.jpg?ex=68212223&is=681fd0a3&hm=fd7180751c534d95f18a5dd191f4e254f8009f3fc0bc291e6ce9803b79be2c2e&',
                width: 1200,
                height: 630,
            }
        ],
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Black Star Bot',
        description: 'Offizielle Webseite des Black Star Discord Bots',
        images: ['https://cdn.discordapp.com/attachments/1366089317541351444/1370887676491726919/IMG_5514.jpg?ex=68212223&is=681fd0a3&hm=fd7180751c534d95f18a5dd191f4e254f8009f3fc0bc291e6ce9803b79be2c2e&'],
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
                        backgroundImage: "url('/backgroud.png')",
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