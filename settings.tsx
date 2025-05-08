import { BellDot, BookOpenText, LibraryBig, ServerIcon, MessageSquare, Users, UsersIcon, Zap, Bot } from "lucide-react";
// https://lucide.dev/
export interface Banner {
    title: string;
    link?: string;
    linkText?: string;
    color: "red" | "green" | "slate" | "yellow" | "purple" | "pink" | "gray"
}

export interface Command {
    name: string;
    description: string;
    categories: string[];
    parameters?: {
        name: string;
        description: string;
        required: boolean;
        example?: string;
    }[]
}

export const DISCORD_LINK = "https://discord.gg/MtSnNfYttt";
export const BOT_INVITE_LINK = "https://discord.com/oauth2/authorize?client_id=1366051950751121418";
// export const WEBSITE_LINK = "https://www.htwk-leipzig.de";
// export const GITHUB_LINK = "https://github.com/Hochschule-HTWK-Leipzig"

export const BANNERS: Banner[] = [
    // Banner removed
]

export const FEATURES = [
    {
        title: "Allgemeine Information",
        description: "Der Bot wurde am 27.04.2025 in Betrieb genommen und verfügt über viele Funktionen, die dir helfen werden, deinen Server zu verbessern.",
        Icon: BookOpenText,
    },
    {
        title: "Community Engagement",
        description: "Falls du Fragen zum Bot hast, neue Ideen ansprechen möchtest oder Probeleme bei der Installation hast, kannst du gerne dem Discord Server beitreten.",
        Icon: Users,
    },
    {
        title: "Benachrichtigungen",
        description: "Werde zu allgemeinen Discord Updates und Bot Changelogs benachrichtigt.",
        Icon: BellDot,
    },
    {
        title: "Sonstiges",
        description: "Auf dem Discord Server gibt es zudem noch eine Community Kategorie, in der du dich mit anderen Usern austauschen kannst.",
        Icon: LibraryBig,
    }
]

export const COMMANDS: Command[] = [
    {
        name: "/hilfe",
        description: "Zeigt eine Liste aller verfügbaren Bot-Funktionen.",
        categories: ["Bot"],
    },
    {
        name: "/status",
        description: "Zeigt den aktuellen Bot-Status an.",
        categories: ["Bot"]
    },
    {
        name: "/user-info",
        description: "Zeigt detaillierte Informationen über einen Benutzer an.",
        categories: ["Administratoren", "Moderatoren"],
        parameters: [{
            name: "user",
            description: "Gib einen User an",
            required: true,
            example: "Max"
        }]
    },
    {
        name: "/show-setup",
        description: "Zeigt die aktuellen Server-Konfigurationen an.",
        categories: ["Setup Bot", "Administratoren"]
    },
    {
        name: "/setup-roles",
        description: "Konfiguriere die Server-Rollen für den Bot.",
        categories: ["Setup Bot", "Administratoren"]
    },
    {
        name: "/setup-channels",
        description: "Konfiguriere die Server-Kanäle für den Bot.",
        categories: ["Setup Bot", "Administratoren"]
    },
    {
        name: "/setup-categorys ",
        description: "Konfiguriere die Server-Kategorien für den Bot.",
        categories: ["Setup Bot", "Administratoren"]
    },
    {
        name: "/setup-stats",
        description: "Konfiguriere Statistik-Kanäle für Mitgliederanzahl, Boosts und Bots.",
        categories: ["Setup Bot", "Administratoren"],
        parameters: [{
            name: "option",
            description: "Wähle, welche Statistiken angezeigt werden sollen.",
            required: true,
            example: "Nur Mitglieder",
        }]
    },
    {
        name: "/setup-autopublishing",
        description: "Konfiguriere das automatische Veröffentlichen von Nachrichten in Ankündigungskanälen.",
        categories: ["Setup Bot", "Administratoren"],
        parameters: [{
            name: "status",
            description: "Autopublishing aktivieren oder deaktivieren.",
            required: true,
            example: "aktivieren",
        }]
    },
    {
        name: "/setup-verification",
        description: "Konfiguriere ein Verifizierungssystem für den Server.",
        categories: ["Setup Bot", "Administratoren"],
    },
    {
        name: "/setup-discord-links",
        description: "Konfiguriere das Löschen von Discord-Einladungslinks (Administratoren und Moderatoren ausgeschlossen).",
        categories: ["Setup Bot", "Administratoren"],
        parameters: [{
            name: "status",
            description: "Discord-Link Filterung aktivieren oder deaktivieren.",
            required: true,
            example: "aktivieren",
        }]
    },
    {
        name: "/setup-welcome-message ",
        description: "Konfiguriere Willkommensnachrichten für neue Mitglieder.",
        categories: ["Setup Bot", "Administratoren"],
        parameters: [{
            name: "status",
            description: "Nachrichten aktivieren oder deaktivieren.",
            required: true,
            example: "aktivieren",
        },
        {
            name: "ping",
            description: "Soll der Benutzer in der Nachricht gepingt werden?",
            required: true,
            example: "Ja"
        },
        {
            name: "thumbnail",
            description: "Soll das Profilbild des Users in der Nachricht angezeigt werden?",
            required: true,
            example: "Spam"
            },
            {
            name: "publisher",
            description: "Wer soll als Herausgeber der Nachricht angezeigt werden?",
            required: true,
            example: "Server Besitzer"
            }]
    },
    {
        name: "/setup-autoreaction",
        description: "Konfiguriere automatische Reaktionen auf Nachrichten in einem Kanal.",
        categories: ["Setup Bot", "Administratoren"],
        parameters: [{
            name: "status",
            description: "Autoreaction aktivieren oder deaktivieren.",
            required: true,
            example: "aktivieren",
        },
        {
            name: "emojis",
            description: "Die Emojis, die automatisch hinzugefügt werden sollen.",
            required: true,
            example: "👍"
        },
        {
            name: "content",
            description: "Auf welche Nachrichten soll der Bot reagieren.",
            required: true,
            example: "Nur Text"
        }]
    },
    {
        name: "/setup-advertising",
        description: "Konfiguriere das automatische senden von Werbung im Werbekanal.",
        categories: ["Setup Bot", "Administratoren"],
        parameters: [{
            name: "repetition",
            description: "Wie oft soll die Werbung wiederholt werden?",
            required: true,
            example: "Alle 30 Minuten",
        }]
    },
    {
        name: "/add-join2create",
        description: "Verwandelt einen Voice-Channel in einen Join to Create Channel.",
        categories: ["Setup Bot", "Administratoren", "Voice Channel"],
        parameters: [{
            name: "channel",
            description: "Der Voice-Channel, der als Join to Create eingerichtet werden soll.",
            required: true,
            example: "Voice Channel 1",
        }]
    },
    {
        name: "/rename-join2create",
        description: "Benennt deinen aktuellen temporären Voice-Channel um.",
        categories: ["Setup Bot", "Administratoren", "Voice Channel"],
    },
    {
        name: "/remove-join2create",
        description: "Verwandelt einen Join to Create Channel zurück in einen normalen Voice-Channel.",
        categories: ["Setup Bot", "Administratoren", "Voice Channel"],
        parameters: [{
            name: "channel",
            description: "Der Voice-Channel, der als Join to Create eingerichtet werden soll.",
            required: true,
            example: "『🔊』Join to Create 1",
        }]
    },
    {
        name: "/voice-time",
        description: "Zeigt dir, wie lange du in Voice-Channels verbracht hast.",
        categories: ["Setup Bot", "Administratoren", "Voice Channel"],
    },
    {
        name: "/voice-limit",
        description: "Zeigt dir, wie lange du in Voice-Channels verbracht hast.",
        categories: ["Setup Bot", "Administratoren", "Voice Channel"],
    },
        {
        name: "/send-news",
        description: "Sendet eine Nachricht in den News-Kanal.",
        categories: ["Setup Bot", "Administratoren"],
        parameters: [{
            name: "User (Du)",
            description: "Wer soll als Herausgeber der News angezeigt werden?",
            required: true,
            example: "Max"
        }]
    },
    {
        name: "/moderation-panel",
        description: "Öffnet ein Moderations-Panel für den ausgewählten Benutzer.",
        categories: ["Administratoren", "Moderatoren"],
        parameters: [{
            name: "user",
            description: "Der Benutzer, für den Moderationsaktionen durchgeführt werden sollen.",
            required: true,
            example: "Max",
        },
        {
            name: "action",
            description: "Die Moderationsaktion, die durchgeführt werden soll.",
            required: true,
            example: "Timeout"
        }]
    },
    {
        name: "/clear",
        description: "Zeigt dir, wie lange du in Voice-Channels verbracht hast.",
        categories: ["Administratoren", "Moderatoren"],
        parameters: [{
            name: "anzahl",
            description: "Anzahl der zu löschenden Nachrichten.",
            required: true,
            example: "25",
        },
        {
            name: "user",
            description: "Lösche nur Nachrichten von diesem Benutzer.",
            required: false,
            example: "Max"
        }]
    },
    {
        name: "!de",
        description: "Lass dir die Nachricht eines Users ins Deutsche übersetzen.",
        categories: ["Mitglieder", "Übersetzten"],
        parameters: [{
            name: "Nachricht",
            description: "Antworte mit diesem Command auf eine Nachricht von einem User",
            required: true,
            example: " "
        }]
    },
    {
        name: "!eng",
        description: "Lass dir die Nachricht eines Users ins Englische übersetzen.",
        categories: ["Mitglieder", "Übersetzten"],
        parameters: [{
            name: "Nachricht",
            description: "Antworte mit diesem Command auf eine Nachricht von einem User",
            required: true,
            example: " "
        }]
    },
    {
        name: "!fr",
        description: "Lass dir die Nachricht eines Users ins Französische übersetzen.",
        categories: ["Mitglieder", "Übersetzten"],
        parameters: [{
            name: "Nachricht",
            description: "Antworte mit diesem Command auf eine Nachricht von einem User",
            required: true,
            example: " "
        }]
    },
    {
        name: "!esp",
        description: "Lass dir die Nachricht eines Users ins Spanische übersetzen.",
        categories: ["Mitglieder", "Übersetzten"],
        parameters: [{
            name: "Nachricht",
            description: "Antworte mit diesem Command auf eine Nachricht von einem User",
            required: true,
            example: " "
        }]
    }
];

export const STATS = [
    {
        title: "Server Mitglieder",
        value: "5+",
        icon: UsersIcon,
    },
    {
        title: "Server",
        value: "7+",
        icon: Bot,
    },
    {
        title: "Developer",
        value: "2+",
        icon: ServerIcon,
    },
];

export const QUESTIONS_AND_ANSWERS = [
    {
        question: "Wie erstelle ich einen Discord Account?",
        answer: "• Folge dazu einfach diesem Link: [Erstelle Deinen Account](https://support.discord.com/hc/de/articles/360033931551-Erste-Schritte#h_01H4RR2GE2FAK7DZ5W3765NGVT)",
    },
    {
        question: "Wer sind die Developer des Projekts?",
        answer: "• Paul - Discord Username: paul_pler </br> • [Colin](https://colin.heggli.dev/) - Discord Username: itadori",
    }
]