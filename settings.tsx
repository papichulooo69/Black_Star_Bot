import {BellDot, BookOpenText, LibraryBig, ServerIcon, MessageSquare, Users, UsersIcon, Zap, Bot} from "lucide-react";
// https://lucide.dev/
export interface Banner {
    title: string;
    link?: string;
    linkText?: string;
    color: "red" | "green" | "blue" | "yellow" | "purple" | "pink" | "gray"
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

export const DISCORD_LINK = "https://discord.gg/eenP4pu7k7";
export const WEBSITE_LINK = "https://www.htwk-leipzig.de";
export const GITHUB_LINK = "https://github.com/Hochschule-HTWK-Leipzig"

export const BANNERS: Banner[] = [
    {
        title: "⚠️ Inoffizielles Projekt - Nicht offiziell mit der HTWK Leipzig verbunden",
        color: "yellow"
    }
]

export const FEATURES = [
    {
        title: "Allgemeine Information",
        description: "Falls ihr schon Studenten der HTWK seid oder auch nicht, ist völlig egal, hier könnt ihr euch austauschen, informieren und gemeinsam Spaß haben!",
        Icon: BookOpenText,
    },
    {
        title: "Community Engagement",
        description: "Nimm an spannenden Diskussionen teil, stelle Fragen und vernetze dich mit anderen Studenten.",
        Icon: Users,
    },
    {
        title: "Benachrichtigungen",
        description: "Du kannst über folgende Themen informieren: Offizielle News, StuRa News, FSR News, HTWK-Bot News, Umfragen und Giveaways.",
        Icon: BellDot,
    },
    {
        title: "Studiengänge",
        description: "Auf dem Server gibt es für jeden Studiengang (Bachelor und Master) einen eigenen Kanal zum informieren und austauschen.",
        Icon: LibraryBig,
    },
    {
        title: "Question and Answer",
        description: "Erhalte schnelle Antworten auf häufig gestellte Fragen zur Universität, zu Kursen und Campuseinrichtungen.",
        Icon: Zap,
    },
    {
        title: "HTWK Leipzig Bot",
        description: "Der HTWK Leipzig Discord Server verfügt über ein eigenes Bot-System. ",
        Icon: Bot,
    }
]

export const COMMANDS: Command[] = [
    {
        name: "/hilfe",
        description: "Zeigt dir alle wichtigen Informationen zum Bot.",
        categories: ["Hilfe", "Bot", "Mitglieder"],
    },
    {
        name: "/verify-email",
        description: "Gib deine Hochschul-E-Mail Adresse ein, um dich als Student zu verifizieren. schau dazu in dein Mail-Postfach.",
        categories: ["Verifizieren", "Mitglieder"],
        parameters: [{
            name: "email",
            description: "Gib deine Hochschul-E-Mail Adresse ein",
            required: true,
            example: ""
        }]
    },
    {
        name: "/verify-token",
        description: "Gib deinen Token (Code) aus der zuvor gesendeten E-Mail hier ein.",
        categories: ["Verifizieren", "Mitglieder"],
        parameters: [{
            name: "code",
            description: "8stelliger Code siehe Mail-Postfach",
            required: true,
            example: "7i92djw2"
        }]
    },
    {
        name: "/user-report",
        description: "Melde einen User auf Grund von Fehlverhalten.",
        categories: ["Report", "Mitglieder"],
        parameters: [{
            name: "user",
            description: "Wen möchtest du Melden?",
            required: true,
            example: "@Max"
        },
        {
            name: "grund",
            description: "Warum soll der User gemldet werden?",
            required: true,
            example: "Spam"
        }]
    },
    {
        name: "/bewerbung",
        description: "Schicke eine bewerbung für das Discord Server Team ab.",
        categories: ["Bewerbung", "Team", "Mitglieder"]
    },
    {
        name: "/status",
        description: "Zeigt dir Informationen über den Bot an.",
        categories: ["Bot", "Mitglieder"]
    },
    {
        name: "/developer",
        description: "Zeigt dir die Developer des HTWK Bots an.",
        categories: ["Developer", "Bot"]
    },
        {
        name: "!verify",
            description: "Verifiziere dich, um den Server komplett nutzen zu können.",
            categories: ["Verifizieren", "Mitglieder"]
    },
    {
        name: "!clear",
        description: "Lösche als Moderator ungewünschte Nachrichten aus dem Chat.",
        categories: ["Moderator", "Team"],
        parameters: [{
            name: "Zahl",
            description: "Wie viele Nachrichten sollen gelöscht werden?",
            required: true,
            example: "10"
        },
        {
            name: "Username",
            description: "Von wem sollen die Nachrichten gelöscht werden?",
            required: false,
            example: "max_mustermann"
        }]
    },
    {
        name: "!slowmode",
        description: "Verändere als Moderator die Schreibgeschwindigkeit des Chats.",
        categories: ["Moderator", "Team"],
        parameters: [{
            name: "Zeit",
            description: "Wie hoch soll der Slowmode sein (in Sek.)?",
            required: true,
            example: "10 "
        }]
    },
    {
        name: "!de",
        description: "Lass dir die Nachricht eines Users ins Deutsche übersetzen.",
        categories: ["Übersetzten", "Mitglieder"],
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
            categories: ["Übersetzten", "Mitglieder"],
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
            categories: ["Übersetzten", "Mitglieder"],
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
            categories: ["Übersetzten", "Mitglieder"],
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
        title: "Aktive Benutzer",
        value: "30+",
        icon: UsersIcon,
    },
    {
        title: "Bots",
        value: "4",
        icon: Bot,
    },
    {
        title: "Developer",
        value: "3+",
        icon: ServerIcon,
    },
];

export const QUESTIONS_AND_ANSWERS = [
    {
        question: "Wie erstelle ich einen Discord Account?",
        answer: " Folge dazu einfach diesem Link: [Erstelle Deinen Account](https://support.discord.com/hc/de/articles/360033931551-Erste-Schritte#h_01H4RR2GE2FAK7DZ5W3765NGVT)",
    },
    {
        question: "Wer sind die Developer des Projekts?",
        answer: "• Paul - Discord Username: paul_pler </br> • [Colin](https://colin.heggli.dev/) - Discord Username: itadori </br> • Max - Discord Username: sifu_max",
    }
]