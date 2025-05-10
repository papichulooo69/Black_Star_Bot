export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-xl text-gray-300 mb-32">
                        Datenschutzerklärung für Black Star Bot
                    </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-gray-300 space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Einleitung</h2>
                        <p className="ml-8">
                            Diese Datenschutzerklärung informiert über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten durch den Discord-Bot "Black Star". Die Verwendung der App ist freiwillig, wenn du also nicht möchtest, dass Daten über dich und deinen Server gesammelt werden, solltest du die App nicht verwenden. Bei Fragen zum Datenschutz kontaktieren Sie bitte den Bot-Betreiber über Discord.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Verantwortlicher</h2>
                        <p className="ml-8">
                            Verantwortlich für die Datenverarbeitung ist der Betreiber des Black Star Bots.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Erhobene Daten</h2>
                        <p className="ml-8">Der Black Star Bot erhebt und speichert folgende Daten:</p>

                        <h3 className="text-xl font-semibold text-white mt-4 mb-2 pl-4">3.1 Serverdaten</h3>
                        <ul className="list-disc ml-16 space-y-1">
                            <li className="ml-4">Server-ID</li>
                            <li className="ml-4">Konfigurierte Rollen-IDs (Administrator, Moderator, Mitglied, Verifiziert)</li>
                            <li className="ml-4">Konfigurierte Kanal-IDs (Privat, Logging, Willkommen, Werbung, News)</li>
                            <li className="ml-4">Konfigurierte Kategorie-IDs (Private Kategorien)</li>
                            <li className="ml-4">Join-to-Create Kanaleinstellungen</li>
                            <li className="ml-4">Einstellungen für Auto-Reaktionen</li>
                            <li className="ml-4">Einstellungen für Auto-Publishing</li>
                            <li className="ml-4">Einstellungen für Discord-Link-Filterung</li>
                            <li className="ml-4">Einstellungen für Willkommensnachrichten</li>
                            <li className="ml-4">Einstellungen für Werbung</li>
                            <li className="ml-4">Statistik-Kanal-Konfigurationen</li>
                            <li className="ml-4">Umfragedaten</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mt-4 mb-2 pl-4">3.2 Benutzerdaten</h3>
                        <ul className="list-disc ml-16 space-y-1">
                            <li className="ml-4">Benutzer-IDs für bestimmte Funktionen</li>
                            <li className="ml-4">Voice-Channel Nutzungsstatistiken (Zeitstempel, Gesamtzeiten)</li>
                            <li className="ml-4">Daten im Zusammenhang mit der Verwendung von Moderationsbefehlen</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Zweck der Datenverarbeitung</h2>
                        <p className="ml-8">Die Verarbeitung der oben genannten Daten erfolgt zu folgenden Zwecken:</p>

                        <h3 className="text-xl font-semibold text-white mt-4 mb-2 pl-4">4.1 Serverdaten</h3>
                        <ul className="list-disc ml-16 space-y-1">
                            <li className="ml-4">Ermöglichung der Konfiguration des Bots für den jeweiligen Server</li>
                            <li className="ml-4">Bereitstellung von serverweiten Funktionen wie Join-to-Create, Auto-Reaktionen, etc.</li>
                            <li className="ml-4">Speicherung von Einstellungen, damit diese nicht bei jedem Bot-Neustart neu konfiguriert werden müssen</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mt-4 mb-2 pl-4">4.2 Benutzerdaten</h3>
                        <ul className="list-disc ml-16 space-y-1">
                            <li className="ml-4">Ermöglichung der Voice-Time-Tracking-Funktion</li>
                            <li className="ml-4">Nachverfolgung von Moderationsaktionen</li>
                            <li className="ml-4">Zuweisung temporärer Voice-Channels zu ihren Erstellern</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Rechtsgrundlage</h2>
                        <p className="ml-8">
                            Die Verarbeitung erfolgt auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) zur Bereitstellung der Discord-Bot-Funktionalität. Durch die Nutzung des Bots und seiner Funktionen stimmt der Nutzer der Verarbeitung der dafür notwendigen Daten zu.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Speicherdauer</h2>
                        <p className="ml-8">Die Daten werden gespeichert, solange sie für die Bereitstellung der Bot-Funktionalität erforderlich sind:</p>
                        <ul className="list-disc ml-16 space-y-1 mt-2">
                            <li className="ml-4">Serverkonfigurationsdaten werden gespeichert, bis der Bot vom Server entfernt wird oder eine manuelle Zurücksetzung erfolgt</li>
                            <li className="ml-4">Voice-Nutzungsdaten werden für statistische Zwecke dauerhaft gespeichert.</li>
                            <li className="ml-4">Temporäre Daten (z.B. für Join-to-Create-Channels) werden gelöscht, sobald sie nicht mehr benötigt werden</li>
                        </ul>
                        <p className="mt-2 ml-8">
                            Nach Entfernung des Bots von einem Server werden alle zugehörigen Daten nach einer angemessenen Frist (spätestens 30 Tage) automatisch gelöscht.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Datenweitergabe</h2>
                        <p className="ml-8">
                            Eine Weitergabe der erhobenen Daten an Dritte findet grundsätzlich nicht statt, es sei denn, es besteht eine gesetzliche Verpflichtung hierzu.
                        </p>

                        <h3 className="text-xl font-semibold text-white mt-4 mb-2 pl-4">7.1 Discord-API</h3>
                        <p className="ml-8">
                            Der Bot kommuniziert mit der Discord-API und übermittelt dabei notwendige Daten gemäß den Discord-Nutzungsbedingungen und deren Datenschutzrichtlinien. Weitere Informationen hierzu finden Sie unter: <a href="https://discord.com/privacy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://discord.com/privacy</a>
                        </p>

                        <h3 className="text-xl font-semibold text-white mt-4 mb-2 pl-4">7.2 Hosting-Anbieter</h3>
                        <p className="ml-8">
                            Die Datenbank des Bots wird auf Servern eines Hosting-Anbieters gespeichert. Mit diesem besteht ein Auftragsverarbeitungsvertrag, der die sichere und datenschutzkonforme Verarbeitung der Daten gewährleistet.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Datensicherheit</h2>
                        <p className="ml-8">
                            Der Bot-Betreiber trifft angemessene technische und organisatorische Maßnahmen, um die erhobenen Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen. Dies umfasst:
                        </p>
                        <ul className="list-disc ml-16 space-y-1 mt-2">
                            <li className="ml-4">Verschlüsselte Datenbankverbindungen</li>
                            <li className="ml-4">Regelmäßige Sicherheitsupdates</li>
                            <li className="ml-4">Zugangsbeschränkungen zur Datenbank</li>
                            <li className="ml-4">Regelmäßige Backups der Datenbank</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Änderungen der Datenschutzerklärung</h2>
                        <p className="ml-8">
                            Diese Datenschutzerklärung kann gelegentlich aktualisiert werden, um geänderten Funktionen des Bots oder rechtlichen Anforderungen gerecht zu werden. Die aktuelle Version dieser Datenschutzerklärung ist stets über die Website abrufbar.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Voice-Channel Tracking</h2>
                        <p className="ml-8">
                            Der Bot speichert Informationen über Ihre Nutzung von Voice-Channels, um die Voice-Time-Tracking-Funktion zu ermöglichen. Dabei werden folgende Daten erfasst:
                        </p>
                        <ul className="list-disc ml-16 space-y-1 mt-2">
                            <li className="ml-4">Benutzer-ID</li>
                            <li className="ml-4">Server-ID</li>
                            <li className="ml-4">Zeitpunkt des Betretens eines Voice-Channels</li>
                            <li className="ml-4">Zeitpunkt des Verlassens eines Voice-Channels</li>
                            <li className="ml-4">Gesamtzeit in Voice-Channels</li>
                        </ul>
                        <p className="mt-2 ml-8">
                            Diese Daten können auf Anfrage beim Bot-Betreiber gelöscht werden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Moderationsfunktionen</h2>
                        <p className="ml-8">
                            Bei Nutzung der Moderationsfunktionen (Kick, Ban, Timeout) werden folgende Daten erfasst:
                        </p>
                        <ul className="list-disc ml-16 space-y-1 mt-2">
                            <li className="ml-4">Moderator (Benutzer-ID)</li>
                            <li className="ml-4">Betroffener Benutzer (Benutzer-ID)</li>
                            <li className="ml-4">Zeitpunkt der Aktion</li>
                            <li className="ml-4">Grund der Aktion</li>
                        </ul>
                        <p className="mt-2 ml-8">
                            Diese Daten werden im Server-Log gespeichert und dienen ausschließlich der Transparenz und Nachvollziehbarkeit von Moderationsaktionen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">12. Umfragedaten</h2>
                        <p className="ml-8">
                            Bei Erstellung von Umfragen werden folgende Daten gespeichert:
                        </p>
                        <ul className="list-disc ml-16 space-y-1 mt-2">
                            <li className="ml-4">Umfrage-ID</li>
                            <li className="ml-4">Ersteller der Umfrage (Benutzer-ID)</li>
                            <li className="ml-4">Kanal-ID</li>
                            <li className="ml-4">Nachricht-ID</li>
                            <li className="ml-4">Umfrage-Optionen</li>
                            <li className="ml-4">Umfrage-Einstellungen (z.B. Einzelauswahl)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">12. Automatische Löschung</h2>
                        <p className="ml-8">
                            Inaktive Daten werden nach angemessener Zeit automatisch aus der Datenbank entfernt, um Speicherplatz zu sparen und den Datenschutz zu gewährleisten.
                        </p>
                        <p className="mt-4 ml-8">
                            Bei Fragen oder Anmerkungen zum Datenschutz kontaktieren Sie bitte den Bot-Betreiber über Discord.
                        </p>
                    </section>
                </div>

                <div className="mt-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center text-gray-400">
                    <p>Letzte Aktualisierung | 10.05.2025</p>
                </div>
            </div>
        </main>
    );
}
