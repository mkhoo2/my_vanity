import type { EducationEntry, ExperienceEntry, NavItem, Profile, SkillGroup } from "@/types/portfolio";

export const profile: Profile = {
  name: "Marcus Khoo",
  title: "Software Engineer",
  location: "Singapore",
  email: "marcuskhoo2@gmail.com",
  summary:
    "I build tech products. I ride my bicycle when I'm not building tech. I tinker my bicycle when I'm not riding.",
  professionalSummary:
    "Software engineer focused on creating reliable user experiences, clean interfaces, and well-structured web applications. I enjoy turning product ideas into maintainable systems, collaborating across teams, and shipping work that is easy to extend over time.",
  profileImageUrl: "/images/profile_pic.jpg",
  resumeUrl: "https://1drv.ms/b/c/778b2d66ad283fe9/IQAF1y950BAaT44E5FgtmxCmAZLUzaQ31MOt76Q1O-F1jKk?e=vGBKto&download=1",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
];

export const skills: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "C++", "JavaScript"],
  },
  {
    title: "Frontend Development",
    items: ["React", "Next.js", "HTML5", "CSS"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "REST APIs", "Springboot"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "CI/CD", "GitHub Actions", "Kubernetes", "Jenkins"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "SQLite", "MongoDB", "S3"],
  },
  {
    title: "Testing",
    items: ["Cypress", "Selenium", "Karate", "JUnit"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "VS Code", "MCP", "Claude", "OpenAI API", "Postman", "Confluence", "Copilot"],
  },
  {
    title: "Game Development",
    items: ["Unity", "Perforce", "Physics"],
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "Visa Worldwide Pte Ltd",
    role: "Senior Software Engineer, DevOps Engineering",
    location: "Singapore",
    startDate: "Jan 2026",
    endDate: "Jul 2026",
    responsibilities: [
      "Built and maintained CI/CD tooling to accelerate containerization efforts across 90% of projects.",
      "Leveraged Jenkins to automate CI/CD pipelines and streamline software delivery. ",
      "Developed Ansible-based CI/CD automation supporting .NET, Python, Spring Boot, and Node.js applications.",
    ],
  },
  {
    company: "Visa Worldwide Pte Ltd",
    role: "Software Engineer, Testing Engineering",
    location: "Singapore",
    startDate: "Mar 2024",
    endDate: "Jan 2026",
    responsibilities: [
      "Developed and maintained internal test automation tools to streamline testing processes and improve engineering efficiency.",
      "Developed a Generative AI agent proof of concept to improve performance test engineering efficiency.",
      "Collaborated with test engineers to identify pain points and develop features for end-to-end test automation, improving overall testing efficiency.",
      "Developed an internal LoadRunner Enterprise MCP server to accelerate performance testing and troubleshooting."
    ],
  },
  {
    company: "Visa Worldwide Pte Ltd",
    role: "Associate Software Engineer, Testing Engineering",
    location: "Singapore",
    startDate: "Feb 2022",
    endDate: "Mar 2024",
    responsibilities: [
      "Developed test scenarios, test plans, and test cases based on Business Requirement Documents to ensure comprehensive test coverage.",
      "Automated end-to-end test cases, improving testing efficiency and reducing time to market.",
      "Performed manual and automated test execution to improve software quality and testing efficiency.",
    ],
  },
  {
    company: "Ubisoft Singapore",
    role: "Gameplay Programmer",
    location: "Singapore",
    startDate: "Jan 2019",
    endDate: "Nov 2021",
    responsibilities: [
      "Collaborated with designers, programmers, and QA testers to enhance gameplay systems, functionality, and user experience.",
      "Streamlined and optimized game data pipelines to improve development efficiency and workflow.",
      "Debugged physics issues using middleware tools to improve system stability and performance.",
      "Contributed engine improvements and features to enhance the project's integration pipeline and streamline development processes.",
      "Implemented server-side optimizations to improve performance, efficiency, and reliability."
    ],
  },
];

export const education: EducationEntry[] = [
  {
    school: "The Linux Foundation",
    degree: "CKAD",
    period: "2025",
    certificateUrl: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/ecb1f9d3-67f4-45d9-8c2e-aa954ed1d77c-marcus-khoo-lian-kai-a48d7e36-c36a-48dc-bad6-35de0cd2ea9a-certificate.pdf",
  },
  {
    school: "ASTQB - ISTQB",
    degree: "Certified Tester, Foundation Level",
    period: "2025",
    certificateUrl: "https://atsqa.org/certified-testers/profile/0e240367f67441209c809e650d7f1992",
  },
  {
    school: "NUS",
    degree: "Diploma in Software Development",
    period: "2023",
    certificateUrl: "https://credentials.nus.edu.sg/2712b568-1b0f-4a11-8dc3-5e48cb8f9fbf#acc.0IRF7or5",
  },
  {
    school: "Microsoft",
    degree: "Azure Fundamentals",
    period: "2024",
    certificateUrl: "https://learn.microsoft.com/en-us/users/marcuskhoo-3092/credentials/a007669f93a010bc?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    school: "Singapore Institute of Technology, DigiPen",
    degree: "B.S. in Computer Science and Game Design",
    period: "2015 — 2018",
  },
];
