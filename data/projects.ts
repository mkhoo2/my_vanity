import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    name: "Telegram Daily Singapore Weather Bot",
    description:
      "A bot that provides daily weather updates for Singapore users via Telegram.",
    purpose:
      "To provide a convenient way for users to receive daily weather updates without having to check a website or app.",
    category: "API",
    features: [
      "Automated daily weather updates sent to users",
      "Customizable settings for users to choose their preferred time and format of updates",
      "Integration with Telegram for easy access and notifications",
    ],
    technologies: ["FastAPI", "Python", "Telegram Bot API", "NEA Weather API", "CronJob", "PostgreSQL", "Render", "Github Actions"],
    imageUrl: "/images/telegram_weather_bot.jpg",
    imageLabel: "Telegram weather bot project screenshot",
    sourceUrl: "https://github.com/mkhoo2/telegram-weather-bot",
    demoUrl: "https://t.me/sg_daily_weather_bot"
  },
];
