export default function TermsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-xl text-gray-300">
                        Nutzungsbedingungen für Black Star Bot
                    </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-gray-300 space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Akzeptanz der Nutzungsbedingungen</h2>
                        <p>
                            Durch die Nutzung des Black Star Discord Bots stimmst du diesen Nutzungsbedingungen zu. Falls du mit diesen Bedingungen nicht einverstanden bist, nutze den Bot bitte nicht.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Nutzung des Bots</h2>
                        <p>
                            Der Black Star Bot wird "wie er ist" zur Verfügung gestellt. Wir behalten uns das Recht vor, jederzeit Änderungen vorzunehmen oder den Dienst einzustellen. Die Nutzung erfolgt auf eigene Gefahr.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Verbotene Aktivitäten</h2>
                        <p>
                            Die Nutzung des Bots für jegliche illegalen Aktivitäten oder Aktivitäten, die gegen die Discord-Nutzungsbedingungen verstoßen, ist strengstens untersagt. Der Missbrauch des Bots kann zu einem permanenten Ausschluss führen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Datenschutz</h2>
                        <p>
                            Wir sammeln nur die Daten, die für den Betrieb des Bots notwendig sind. Weitere Informationen findest du in unserer Datenschutzerklärung.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Änderungen der Nutzungsbedingungen</h2>
                        <p>
                            Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Die fortgesetzte Nutzung des Bots nach solchen Änderungen gilt als Zustimmung zu den neuen Bedingungen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Kontakt</h2>
                        <p>
                            Bei Fragen zu diesen Nutzungsbedingungen kontaktiere uns bitte über unseren Discord Server.
                        </p>
                    </section>
                </div>

                <div className="text-center mt-10 text-gray-400">
                    <p>Letzte Aktualisierung: {new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </main>
    );
}
