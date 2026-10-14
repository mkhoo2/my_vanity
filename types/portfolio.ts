export type NavItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  summary: string;
  professionalSummary: string;
  profileImageUrl?: string;
  resumeUrl?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements?: string[];
};

export type EducationEntry = {
  school: string;
  degree: string;
  period: string;
  details?: string;
  certificateUrl?: string;
};

export type Project = {
  name: string;
  description: string;
  purpose: string;
  category?: string;
  features: string[];
  technologies: string[];
  sourceUrl?: string;
  demoUrl?: string;
  detailUrl?: string;
  imageUrl?: string;
  imageLabel?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  platform: string;
  showInFooter?: boolean;
};
