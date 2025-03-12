import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import React from "react";
import {cn} from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Banners from "@/components/banners";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'HTWK Leipzig Discord Bot',
    description: 'Unofficial Discord bot for the HTWK Leipzig student community',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
        <body className={cn(inter.className, "bg-gray-900 text-white")}>
        <Banners/>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}