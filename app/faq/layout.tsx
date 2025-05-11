import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | Black Star Bot",
    description: "Häufig gestellte Fragen zum Black Star Discord Bot",
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex min-h-screen flex-col">
            {children}
        </section>
    );
}
