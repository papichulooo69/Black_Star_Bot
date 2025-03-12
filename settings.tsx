import {BellDot, BookOpenText, LibraryBig, ServerIcon, MessageSquare, Users, UsersIcon, Zap} from "lucide-react";
// https://lucide.dev/
interface Banner {
    title: string;
    link?: string;
    linkText?: string;
    color: "red" | "green" | "blue" | "yellow" | "purple" | "pink" | "gray"
}

export const DISCORD_LINK = "https://discord.gg/eenP4pu7k7";
export const WEBSITE_LINK = "https://www.htwk-leipzig.de";
export const GITHUB_LINK = "https://github.com/Hochschule-HTWK-Leipzig"

export const BANNERS: Banner[] = [
    {
        title: "⚠️ Unofficial project - Not affiliated with HTWK Leipzig",
        link: DISCORD_LINK,
        linkText: "Join our Discord Server",
        color: "yellow"
    }
]

export const FEATURES = [
    {
        title: "Course Information",
        description: "Get instant access to course schedules, room changes, and important deadlines directly through Discord.",
        Icon: BookOpenText,
    },
    {
        title: "Community Engagement",
        description: "Participate in discussions, ask questions, and connect with fellow students and faculty members.",
        Icon: Users,
    },
    {
        title: "Event Notifications",
        description: "Stay updated on university events, workshops, and seminars.",
        Icon: BellDot,
    },
    {
        title: "Study Groups",
        description: "Find or create study groups for your courses.",
        Icon: LibraryBig,
    },
    {
        title: "Quick Answers",
        description: "Get quick answers to common questions about university life, courses, and campus facilities.",
        Icon: Zap,
    },
]

export const COMMANDS = [
    {
        name: "/schedule",
        description: "View your course schedule for the day or week",
        example: "/schedule week",
        categories: ["Academic", "Course Management"]
    },
    {
        name: "/mensa",
        description: "Check today's menu at the university cafeteria",
        example: "/mensa today",
        categories: ["Campus Life"]
    },
    {
        name: "/room",
        description: "Find available study rooms or check room schedules",
        example: "/room Li-115",
        categories: ["Campus Life"]
    },
    {
        name: "/events",
        description: "List upcoming university events and activities",
        example: "/events next-week",
        categories: ["Social"]
    },
    {
        name: "/studygroup",
        description: "Create or find study groups for your courses",
        example: "/studygroup create Mathematics-101",
        categories: ["Academic"]
    },
    {
        name: "/deadline",
        description: "Set reminders for assignment deadlines",
        example: "/deadline add 'Project Report' 2024-06-15",
        categories: ["Academic"]
    }
];

export const STATS = [
    {
        title: "Active Users",
        value: "1,200+",
        icon: UsersIcon,
    },
    {
        title: "Commands Used",
        value: "50,000+",
        icon: MessageSquare,
    },
    {
        title: "Servers",
        value: "300+",
        icon: ServerIcon,
    },
];