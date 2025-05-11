"use client";

import { useState, useRef } from "react";
import Link from "next/link";

type FAQItem = {
    question: string;
    answer: React.ReactNode;
};

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FAQItem[] = [
        {
            question: "Wer sind die Developer des Projekts?",
            answer: (
                <div>
                    <p>Unser Entwicklerteam besteht aus Programmierern mit Expertise in Bot-Entwicklung und Discord-Integration.</p>
                    <br />
                    <div className="flex flex-col space-y-8 mt-4">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            <div className="flex flex-col items-center w-28 flex-shrink-0">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-600">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/1369317160739930262/1371101459629867018/image.jpg?ex=6821e93d&is=682097bd&hm=548ff8cf14e10f91c576cd1e59212e67481af8189e992036cb60b26ad3591a8f&"
                                        alt="Paul"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="mt-2 font-medium text-white">Paul</p>
                            </div>
                            <div className="text-gray-300 text-center sm:text-left">
                                <p>Lead Developer des Black Star Bots und anderen Bots-System sowie der dazugehörigen Webseite.</p>
                                <p className="mt-2 text-white">Discord Username: <span className="text-blue-400">paul_pler</span></p>
                            </div>
                        </div>

                        <div className="border-t border-gray-700 w-full my-2"></div>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            <div className="flex flex-col items-center w-28 flex-shrink-0">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-600">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/1344654618428440708/1349393781086097420/filtersquality95formatwebp.png?ex=682161a3&is=68201023&hm=96bf7b8e3a18a1bbe54d121e145a1ae7aba9d83781a694179c732cd7e41b597e&"
                                        alt="Collin"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="mt-2 font-medium text-white">Collin</p>
                            </div>
                            <div className="text-gray-300 text-center sm:text-left">
                                <p>Ist die rechte Hand für Lead Developer und hat Expertise in der Erstellung von Bots-Systemen, Web Developing und ist außerdem DevOps Engineer.</p>
                                <p className="mt-2 text-white">Discord Username: <span className="text-blue-400">itadori</span></p>
                                <p className="mt-2 text-white">Website: <Link href="https://colin.heggli.dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://colin.heggli.dev</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            question: "Wie kann ich den Bot zu meinem Discord Server hinzufügen?",
            answer: (
                <div className="space-y-3">
                    <p>Du kannst den Black Star Bot ganz einfach zu deinem Discord Server hinzufügen:</p>
                    <div className="bg-gray-700/50 p-4 rounded-md border border-gray-600 mt-2">
                        <h3 className="text-white font-medium mb-2">So geht's:</h3>
                        <ol className="list-decimal ml-6 space-y-1">
                            <li>Klicke auf der Startseite auf den Button "Bot hinzufügen"</li>
                            <li>Melde dich bei Discord an, falls du nicht bereits angemeldet bist</li>
                            <li>Wähle den Server aus, zu dem du den Bot hinzufügen möchtest</li>
                            <li>Bestätige die erforderlichen Berechtigungen</li>
                            <li>Fertig! Der Bot ist jetzt auf deinem Server und du kannst ihn einrichten</li>
                        </ol>
                    </div>

                    <p className="pt-1">Nach der Installation kannst du den Bot mit <span className="bg-gray-700/70 px-2 py-0.5 rounded font-mono text-sm">/help</span> aufrufen, um alle verfügbaren Befehle anzuzeigen.</p>

                    <p className="italic text-sm">Hinweis: Du benötigst die "Administratoren" Berechtigung auf dem Discord-Server, um den Bot hinzufügen zu können.</p>
                </div>
            ),
        },
        {
            question: "Wie kann ich Unterstützen oder Feedback geben?",
            answer: (
                <div className="space-y-4">
                    <p>Es gibt verschiedene Möglichkeiten, wie du das Black Star Bot Projekt unterstützen kannst:</p>

                    <div className="bg-gray-700/50 p-4 rounded-md border border-gray-600">
                        <h3 className="text-white font-medium mb-2">Teile den Bot</h3>
                        <p>Eine der einfachsten Unterstützungsmöglichkeiten ist, den Bot zu teilen:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Lade Freunde ein, den Bot auf ihren Servern zu verwenden</li>
                            <li>Empfehle den Bot in Discord-Communities, die von seinen Funktionen profitieren könnten</li>
                            <li>Erwähne den Bot in relevanten Diskussionen über Discord-Bots</li>
                        </ul>
                    </div>

                    <div className="bg-gray-700/50 p-4 rounded-md border border-gray-600">
                        <h3 className="text-white font-medium mb-2">Feedback geben</h3>
                        <p>Dein Feedback ist für uns sehr wertvoll, um den Bot zu verbessern. Bitte nutze dafür unsere offiziellen Discord-Kanäle:</p>

                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-gray-800/80 p-3 rounded border border-gray-600">
                                <h4 className="text-white font-medium mb-1">Feedback Channel</h4>
                                <p className="text-sm mb-2">Hier kannst du uns mitteilen, was dir gefällt oder was verbessert werden könnte.</p>
                                <Link
                                    href="https://discord.com/channels/1366073415668334612/1368891597521158207"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <span className="underline">Zum Feedback Channel</span>
                                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                    </svg>
                                </Link>
                            </div>

                            <div className="bg-gray-800/80 p-3 rounded border border-gray-600">
                                <h4 className="text-white font-medium mb-1">Future Ideas Channel</h4>
                                <p className="text-sm mb-2">Teile deine Ideen für neue Funktionen oder Verbesserungen mit uns.</p>
                                <Link
                                    href="https://discord.com/channels/1366073415668334612/1368891642869977100"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <span className="underline">Zum Ideas Channel</span>
                                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <p className="mt-3 text-sm italic">Hinweis: Für Feedback und Ideen benötigst du Zugang zu unserem Discord-Server. Falls du noch nicht Mitglied bist, kannst du über die Einladung auf unserer Website beitreten.</p>
                    </div>
                </div>
            ),
        },
        {
            question: "Ist der Bot kostenlos?",
            answer: (
                <div className="space-y-4">
                    <p>Aktuell ist der Black Star Bot komplett kostenlos nutzbar. Alle Grundfunktionen stehen ohne Einschränkungen zur Verfügung.</p>

                    <div className="bg-gray-700/50 p-4 rounded-md border border-gray-600">
                        <h3 className="text-white font-medium mb-2">Zukünftige Pläne</h3>
                        <p>Mit zunehmender Größe und Funktionsumfang könnte es in Zukunft kostenpflichtige Premium-Funktionen geben. Die aktuellen Grundfunktionen werden jedoch weiterhin kostenlos bleiben.</p>
                        <p className="mt-2">Sollten Änderungen am Preismodell vorgenommen werden, informieren wir alle Nutzer rechtzeitig darüber.</p>
                    </div>
                </div>
            ),
        },
        {
            question: "Ist der Bot verifiziert?",
            answer: (
                <div className="space-y-4">
                    <p>Ja, der Black Star Bot ist ein von Discord verifizierter Bot. Das bedeutet, er erfüllt alle Anforderungen von Discord bezüglich Sicherheit und Qualität und kann auf Servern aller Größen eingesetzt werden.</p>

                    <div className="bg-gray-700/50 p-4 rounded-md border border-gray-600">
                        <h3 className="text-white font-medium mb-2">Zeitlinie</h3>
                        <div className="space-y-2">
                            <div className="flex items-start">
                                <span className="text-white mr-2 inline-block">•</span>
                                <div><span className="font-medium text-white">Registrierung bei Discord:</span> 27. April 2025</div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-white mr-2 inline-block">•</span>
                                <div><span className="font-medium text-white">Offizielle Verifizierung:</span> 11. Mai 2025</div>
                            </div>
                        </div>
                        <p className="mt-3">Die Verifizierung durch Discord bestätigt, dass unser Bot die Plattformrichtlinien einhält und sicher für alle Benutzer ist.</p>
                    </div>

                    <div className="bg-gray-700/50 p-4 rounded-md border border-gray-600">
                        <h3 className="text-white font-medium mb-2">Was bedeutet Verifizierung?</h3>
                        <p>Eine Verifizierung durch Discord ist ein wichtiger Qualitätsnachweis für Bots. Um verifiziert zu werden, muss ein Bot:</p>
                        <div className="mt-2 space-y-1">
                            {[
                                'Mindestens 75 Server erreichen',
                                'Umfangreiche Sicherheitsprüfungen bestehen',
                                'Die Discord-Entwicklerrichtlinien strikt einhalten',
                                'Datenschutz- und Sicherheitsstandards erfüllen',
                                'Eine Überprüfung durch das Discord-Team durchlaufen'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <span className="text-white mr-2 inline-block">•</span>
                                    <div>{item}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-700/50 p-4 rounded-md border border-gray-600">
                        <h3 className="text-white font-medium mb-2">Vorteile eines verifizierten Bots</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                            <div className="bg-gray-800/70 p-3 rounded border border-gray-600">
                                <h4 className="text-white font-medium mb-1">Für Server-Administratoren</h4>
                                <div className="space-y-1">
                                    {[
                                        'Sicherheit: Geprüfter Code ohne schädliche Funktionen',
                                        'Zuverlässigkeit: Stabile Performance auch auf großen Servern',
                                        'Support: Zugang zu offiziellem Support-Netzwerk'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start">
                                            <span className="text-white mr-2 inline-block">•</span>
                                            <div className="text-sm">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-800/70 p-3 rounded border border-gray-600">
                                <h4 className="text-white font-medium mb-1">Für Server-Mitglieder</h4>
                                <div className="space-y-1">
                                    {[
                                        'Vertrauen: Offizielles Gütesiegel von Discord',
                                        'Datenschutz: Garantierte Einhaltung der Datenschutzrichtlinien',
                                        'Qualität: Höhere Anforderungen an Funktionalität und Design'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start">
                                            <span className="text-white mr-2 inline-block">•</span>
                                            <div className="text-sm">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="italic text-sm">Die Verifizierung ist ein kontinuierlicher Prozess. Unser Team stellt sicher, dass der Black Star Bot stets allen Anforderungen entspricht, um den verifizierten Status beizubehalten.</p>
                </div>
            ),
        },
        {
            question: "Wie erstelle ich einen Discord Account?",
            answer: (
                <div className="space-y-4">
                    <p>Um einen Discord Account zu erstellen, folge diesen einfachen Schritten:</p>

                    <div className="bg-gray-700/50 p-4 rounded-md border border-gray-600">
                        <h3 className="text-white font-medium mb-2">Registrierungsprozess</h3>
                        <ol className="list-decimal ml-6 space-y-2">
                            <li>Besuche die <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Discord Website</Link> oder lade die App herunter</li>
                            <li>Klicke auf "Registrieren" und gib deine E-Mail-Adresse ein</li>
                            <li>Wähle einen Benutzernamen und ein sicheres Passwort</li>
                            <li>Bestätige deine E-Mail-Adresse über den Bestätigungslink</li>
                            <li>Optional: Personalisiere deinen Account mit einem Profilbild und einer Beschreibung</li>
                        </ol>
                    </div>

                    <div className="bg-gray-700/50 p-4 rounded-md border border-gray-600">
                        <h3 className="text-white font-medium mb-2">Hilfreiche Ressourcen</h3>
                        <p>Für detaillierte Anweisungen kannst du folgende Ressourcen nutzen:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>
                                <Link href="https://support.discord.com/hc/de/articles/360033931551-Erste-Schritte"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline font-medium">
                                    Offizielle Discord-Anleitung
                                </Link>
                            </li>
                            <li>
                                <Link href="https://discord.com/safety"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline">
                                    Discord Sicherheitshinweise
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <p className="italic text-sm">Hinweis: Um unserem Black Star Bot-Server beitreten zu können, benötigst du einen verifizierten Discord-Account.</p>
                </div>
            ),
        },
    ];

    return (
        <main className="min-h-screen">
            {/* Background with dark structure */}
            <div
                className="fixed inset-0 bg-black"
                style={{
                    zIndex: -1,
                    backgroundImage: "url('/images/background.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.2
                }}
            ></div>

            <div className="relative max-w-[98rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Häufig gestellte Fragen</h1>
                    <p className="text-xl text-gray-300 mb-32">
                        Hilft dir bei allgemeinen Fragen
                    </p>
                </div>

                <div className="space-y-8">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/70 rounded-lg overflow-hidden border border-gray-700 backdrop-blur-sm"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left text-white text-xl font-medium focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex items-center">
                                    <div className={`w-7 h-7 rounded-full mr-4 flex items-center justify-center transition-colors duration-300 ${openIndex === index ? "bg-white" : "bg-transparent border-2 border-white"}`}>
                                        {openIndex === index && <div className="w-3 h-3 rounded-full bg-white"></div>}
                                    </div>
                                    <span className="font-semibold">{item.question}</span>
                                </div>
                                <svg
                                    className={`w-7 h-7 transition-transform duration-300 ${openIndex === index ? "transform rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-700 ${openIndex === index ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
                                style={{
                                    transitionProperty: "max-height, opacity",
                                    transitionDuration: openIndex === index ? "1s" : "0.5s"
                                }}
                            >
                                <div className="p-8 pt-4 text-gray-300">
                                    <div className="ml-11 text-xl leading-relaxed py-4 transition-opacity duration-300">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
