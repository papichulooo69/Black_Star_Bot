"use client";

import CopyEmailButton from '../components/CopyEmailButton';
import { ScrollText } from "lucide-react";

export default function ImpressumPage() {
    return (
        <main className="min-h-screen w-full">
            <div className="max-w-full mx-auto px-2 sm:px-3 lg:px-4 py-16">
                <div className="text-center mb-12">
                    <ScrollText className="w-16 h-16 mx-auto mb-6 text-white" strokeWidth={2.2} />
                    <h1 className="text-4xl font-bold text-white mb-4">Impressum</h1>
                    <p className="text-xl text-gray-300 mb-32">
                        Ausführliche rechtliche Informationen zum Black Star Bot und dessen Betrieb
                    </p>
                </div>

                <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-gray-300 space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                        <div className="ml-8 space-y-2">
                            <p><strong className="text-white">Name:</strong> Paul Pleifer</p>
                            <p><strong className="text-white">Anschrift:</strong> Kochstraße 8, 04275 Leipzig, Deutschland</p>
                            <p><strong className="text-white">Status:</strong> Privatperson, nicht gewerblich tätig</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                        <div className="ml-8 space-y-2">
                            <p>
                                <strong className="text-white">E-Mail:</strong>{' '}
                                <CopyEmailButton email="kontakt.black.star.discord@gmail.com" />
                            </p>
                            <p><strong className="text-white">Discord:</strong> paul_pler</p>
                            <p><strong className="text-white">Discord Server:</strong> <a href="https://discord.gg/MtSnNfYttt" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://discord.gg/MtSnNfYttt</a></p>
                            <p className="mt-2 text-gray-400">Bei Fragen, Anregungen oder Problemen können Sie mich unter diesen Kontaktmöglichkeiten erreichen. Eine Antwort erfolgt in der Regel innerhalb von 48 Stunden.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                        <div className="ml-8 space-y-2">
                            <p><strong className="text-white">Name:</strong> Paul Pleifer</p>
                            <p><strong className="text-white">Anschrift:</strong> Kochstraße 8, 04275 Leipzig, Deutschland</p>
                            <p className="mt-2 text-gray-400">Die verantwortliche Person ist identisch mit dem Betreiber des Discord-Bots und der Website. Der Verantwortliche trägt die redaktionelle Verantwortung für alle veröffentlichten Inhalte und stellt sicher, dass diese den geltenden Gesetzen entsprechen.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Beschreibung des Dienstes</h2>
                        <div className="ml-8 space-y-2">
                            <p>Der Black Star Bot ist ein Discord-Bot, der verschiedene Funktionen für Server-Administratoren und Nutzer bereitstellt. Die Hauptfunktionen umfassen:</p>
                            <ul className="list-disc ml-8 mt-2 space-y-1">
                                <li>Moderation von Servern und Kanälen</li>
                                <li>Automatisierte Willkommensnachrichten</li>
                                <li>Rollenmanagement und Benutzerinteraktionen</li>
                            </ul>
                            <p className="mt-2 text-gray-400">Die Nutzung des Bots erfolgt auf eigenes Risiko. Es werden regelmäßige Updates und Wartungen durchgeführt, um die Stabilität und Sicherheit zu gewährleisten.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">EU-Streitschlichtung</h2>
                        <p className="ml-8">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
                                Online-Streitbeilegung
                            </a>
                        </p>
                        <p className="ml-8 mt-2 text-gray-400">
                            Diese Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten, die aus Online-Kauf- oder Dienstleistungsverträgen entstehen. Die Nutzung der OS-Plattform ist für Verbraucher und Unternehmer kostenlos und kann in allen Amtssprachen der EU, sowie Isländisch und Norwegisch erfolgen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Datenschutz</h2>
                        <div className="ml-8 space-y-2">
                            <p>Der Betrieb des Black Star Bots erfordert den Zugriff auf bestimmte Daten, die Discord zur Verfügung stellt. Dazu gehören:</p>
                            <ul className="list-disc ml-8 mt-2 space-y-1">
                                <li>Server-IDs und Kanal-IDs für die Einrichtung von Bot-Funktionen</li>
                                <li>Benutzer-IDs zur Identifizierung bei Bot-Interaktionen</li>
                                <li>Berechtigungen innerhalb von Discord-Servern</li>
                                <li>Von Nutzern explizit mit dem Bot geteilte Inhalte</li>
                            </ul>
                            <p className="mt-2">Folgende Grundsätze werden beim Umgang mit Daten beachtet:</p>
                            <ul className="list-disc ml-8 mt-2 space-y-1">
                                <li>Es werden nur Daten erhoben, die für die Funktion des Bots notwendig sind</li>
                                <li>Daten werden nicht an Dritte weitergegeben oder verkauft</li>
                                <li>Temporäre Daten werden nach angemessener Zeit automatisch gelöscht</li>
                            </ul>
                            <p className="mt-2 text-gray-400">
                                Eine detaillierte Datenschutzerklärung mit allen Informationen zur Datenverarbeitung finden Sie unter dem Menüpunkt "Datenschutz".
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Haftung für Inhalte</h2>
                        <p className="ml-8">
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                        <p className="ml-8 mt-2">
                            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        </p>
                        <p className="ml-8 mt-2 text-gray-400">
                            Dies gilt insbesondere für die automatisiert generierten Inhalte des Bots, die auf Eingaben von Nutzern basieren können. Server-Administratoren sind dafür verantwortlich, die Nutzung des Bots auf ihren Servern zu überwachen und sicherzustellen, dass keine rechtsverletzenden Inhalte durch den Bot verbreitet werden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Haftung für Links</h2>
                        <p className="ml-8">
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
                            Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                            waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                        </p>
                        <p className="ml-8 mt-2">
                            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                            umgehend entfernen.
                        </p>
                        <p className="ml-8 mt-2 text-gray-400">
                            Dies gilt auch für Links, die durch den Bot automatisch generiert oder durch Benutzer über Bot-Funktionen geteilt werden. Wir übernehmen keine Haftung für Inhalte, die über solche Links erreichbar sind.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Urheberrecht</h2>
                        <p className="ml-8">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                        </p>
                        <p className="ml-8 mt-2">
                            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                            Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>
                        <p className="ml-8 mt-2 text-gray-400">
                            Der Bot selbst, sein Name, Logo, Design und Funktionalität sind urheberrechtlich geschützt. Eine Nutzung des Bots ist nur im Rahmen der angebotenen Funktionen auf Discord-Servern gestattet. Das Reverse-Engineering, Dekompilieren oder sonstige Vervielfältigen des Bot-Codes ist ohne ausdrückliche Genehmigung untersagt.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Nutzungsbedingungen</h2>
                        <div className="ml-8 space-y-2">
                            <p>Die Nutzung des Black Star Bots unterliegt folgenden Bedingungen:</p>
                            <ul className="list-disc ml-8 mt-2 space-y-1">
                                <li>Der Bot darf nur für legale Zwecke verwendet werden</li>
                                <li>Die Nutzung des Bots darf nicht gegen die Discord-Nutzungsbedingungen verstoßen</li>
                                <li>Der Bot darf nicht verwendet werden, um Spam zu verbreiten oder Nutzer zu belästigen</li>
                                <li>Versuche, den Bot zu manipulieren oder dessen Funktion zu stören, sind untersagt</li>
                                <li>Eine übermäßige Nutzung, die die Funktionalität für andere Nutzer einschränken könnte, ist zu vermeiden</li>
                            </ul>
                            <p className="mt-2 text-gray-400">
                                Bei Verstoß gegen diese Bedingungen behalten wir uns vor, den Zugang zum Bot einzuschränken oder zu entziehen. Die Nutzung des Bots kann jederzeit ohne vorherige Ankündigung eingestellt oder verändert werden.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Änderungen am Dienst</h2>
                        <div className="ml-8 space-y-2">
                            <p>
                                Der Betreiber behält sich das Recht vor, jederzeit Änderungen am Bot und seinen Funktionen vorzunehmen. Dies umfasst:
                            </p>
                            <ul className="list-disc ml-8 mt-2 space-y-1">
                                <li>Hinzufügen oder Entfernen von Funktionen</li>
                                <li>Änderungen an der Funktionsweise bestehender Features</li>
                                <li>Temporäre oder permanente Einstellung des Dienstes</li>
                                <li>Änderungen an den Nutzungsbedingungen oder dem Datenschutz</li>
                            </ul>
                            <p className="mt-2 text-gray-400">
                                Wesentliche Änderungen werden in der Regel über den offiziellen Discord-Server oder durch Bot-Mitteilungen angekündigt. Es liegt in der Verantwortung der Nutzer, sich über aktuelle Änderungen zu informieren.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-2 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center text-gray-400">
                    <p>Letzte Aktualisierung | 01.06.2023</p>
                    <p className="mt-1 text-sm">Diese Impressumsangaben gelten für alle von diesem Bot angebotenen Dienste und Funktionen.</p>
                </div>
            </div>
        </main>
    );
}
