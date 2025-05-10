export default function TermsPage() {
    return (
        <main className="min-h-screen w-full"> {/* Added w-full for full width */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> {/* Increased from max-w-4xl to max-w-6xl */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-xl text-gray-300 mb-32">
                        Nutzungsbedingungen für Black Star Bot
                    </p>
                </div>

                <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-gray-300 space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Akzeptanz der Nutzungsbedingungen</h2>
                        <p className="ml-8">
                            Durch die Nutzung des Black Star Discord Bots stimmst du diesen Nutzungsbedingungen zu. Falls du mit diesen Bedingungen nicht einverstanden bist, nutze den Bot bitte nicht.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Allgemeine Bestimmungen</h2>
                        <p className="ml-8">
                            <strong className="text-white">Bot-Nutzung:</strong>
                            <span className="pl-4 block ml-4">Der Black Star Bot wird "wie er ist" zur Verfügung gestellt und darf ausschließlich auf Discord-Servern innerhalb der Discord-Nutzungsbedingungen verwendet werden.</span>
                        </p>
                        <p className="ml-8">
                            <strong className="text-white">Änderungen:</strong>
                            <span className="pl-4 block ml-4">Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit ohne vorherige Ankündigung zu ändern. Die fortgesetzte Nutzung des Bots nach solchen Änderungen gilt als Zustimmung zu den aktualisierten Bedingungen.</span>
                        </p>
                        <p className="ml-8">
                            <strong className="text-white">Serverinformationen:</strong>
                            <span className="pl-4 block ml-4">Der Bot speichert bestimmte Serverinformationen zur Funktionalität, darunter Server-ID, konfigurierte Rollen, Kanäle und Kategorien sowie benutzerspezifische Daten wie Voice-Channel-Zeiten.</span>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Funktionalitäten und Nutzungsbeschränkungen</h2>
                        <p className="ml-8">
                            <strong className="text-white">Moderationsfunktionen:</strong>
                            <span className="pl-4 block ml-4">Die Moderationsbefehle (wie Ban, Kick, Timeout) dürfen nur im Einklang mit den Discord Community-Richtlinien verwendet werden.</span>
                        </p>
                        <p className="ml-8">
                            <strong className="text-white">Automatisierte Funktionen:</strong>
                            <span className="pl-4 block ml-4">Funktionen wie Auto-Reaktionen, Auto-Publishing und automatische Werbung dürfen nicht zur Verbreitung von unerwünschten oder unangemessenen Inhalten genutzt werden.</span>
                        </p>
                        <p className="ml-8">
                            <strong className="text-white">Voice-Funktionen:</strong>
                            <span className="pl-4 block ml-4">Die Join-to-Create und Voice-Limit-Funktionen unterliegen zeitlichen Begrenzungen, um Missbrauch zu verhindern.</span>
                        </p>
                        <p className="ml-8">
                            <strong className="text-white">Verfügbarkeit:</strong>
                            <span className="pl-4 block ml-4">Der Bot-Betreiber garantiert keine ununterbrochene Verfügbarkeit und behält sich das Recht vor, den Dienst jederzeit einzuschränken oder einzustellen.</span>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Datenschutz</h2>
                        <p className="ml-8">
                            <strong className="text-white">Datenerhebung:</strong>
                            <span className="pl-4 block ml-4">Der Bot sammelt und speichert nur die für seine Funktionen notwendigen Daten. Dies umfasst Server-IDs, Kanal-IDs, Rollen-IDs und nutzerbezogene Daten wie Voice-Channel-Nutzungsstatistiken.</span>
                        </p>
                        <p className="ml-8">
                            <strong className="text-white">Datennutzung:</strong>
                            <span className="pl-4 block ml-4">Gesammelte Daten werden ausschließlich für die Bereitstellung der Bot-Funktionen verwendet und nicht an Dritte weitergegeben.</span>
                        </p>
                        <p className="ml-8">
                            <strong className="text-white">Datenlöschung:</strong>
                            <span className="pl-4 block ml-4">Bei Entfernung des Bots vom Server werden zugehörige Daten nach angemessener Zeit gelöscht.</span>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Verbotene Nutzung</h2>
                        <p className="ml-8">
                            <strong className="text-white">Missbrauch:</strong>
                            <span className="pl-4 block ml-4">Jede Form von Missbrauch des Bots, einschließlich Spamming, Umgehung von Cooldowns oder Ausnutzung von Fehlern, ist untersagt.</span>
                        </p>
                        <p className="ml-8">
                            <strong className="text-white">Unangemessene Inhalte:</strong>
                            <span className="pl-4 block ml-4">Die Verwendung des Bots zur Verbreitung oder Förderung von illegalen, beleidigenden, diskriminierenden oder anderweitig unangemessenen Inhalten ist strengstens verboten.</span>
                        </p>
                        <p className="ml-8">
                            <strong className="text-white">Discord-Links:</strong>
                            <span className="pl-4 block ml-4">Die Funktion zur Filterung von Discord-Links darf nicht umgangen werden.</span>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Haftungsausschluss</h2>
                        <p className="ml-8">
                            <strong className="text-white">Haftung:</strong>
                            <span className="pl-4 block ml-4">Der Bot-Betreiber übernimmt keine Haftung für Schäden, die durch die Nutzung des Bots entstehen könnten, einschließlich Datenverlust oder Serverprobleme.</span>
                        </p>
                        <p className="ml-8">
                            <strong className="text-white">Gewährleistung:</strong>
                            <span className="pl-4 block ml-4">Es wird keine Garantie für die Richtigkeit, Vollständigkeit oder Zuverlässigkeit der Bot-Funktionen übernommen.</span>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Beendigung der Nutzung</h2>
                        <p className="ml-8">
                            <strong className="text-white">Sperrung:</strong>
                            <span className="pl-4 block ml-4">Der Bot-Betreiber behält sich das Recht vor, bei Verdacht auf Verstoß gegen diese Bedingungen den Zugang zum Bot einzuschränken oder zu sperren.</span>
                        </p>
                        <p className="ml-8">
                            <strong className="text-white">Entfernung:</strong>
                            <span className="pl-4 block ml-4">Server-Administratoren können den Bot jederzeit von ihrem Server entfernen.</span>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Kontakt</h2>
                        <p className="ml-8">
                            Bei Fragen, Problemen oder Anliegen bezüglich dieser Nutzungsbedingungen oder des Bots im Allgemeinen kann der Bot-Betreiber über Discord kontaktiert werden.
                        </p>
                    </section>
                </div>

                <div className="mt-2 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center text-gray-400">
                    <p>Letzte Aktualisierung | 10.05.2025</p>
                </div>
            </div>
        </main>
    );
}
