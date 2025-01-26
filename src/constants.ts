import { Experience, Project, Skill, Social } from "@/types/types";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export const BREAK_POINTS = {
  // Same as tailwindcss configuration
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const NAV_ITEMS = [
  { name: "Experience" as const, path: "/#experience" },
  { name: "Projects" as const, path: "/#projects" },
  { name: "Skills & Technologies" as const, path: "/#techbag" },
  // { name: "Blog" as const, path: "/#blog" },
  { name: "Contact" as const, path: "/#contact" },
];

export const EXPERIENCE: Experience[] = [
  {
    companyName: "Netsol Technologies",
    position: "Team Lead | Software Engineer II",
    roleType: "Full Time",
    startDate: new Date(2024, 10 - 1),
    endDate: "Current",
    description:
      "As a Team lead, I have been proactively working on shaping the technical side of the product. From leading the technical side in grooming sessions to writing quality code and conducting high quality code reviews.",
    points: [
      {
        title: "Siemens",
        description:
          "Collaborated with the integrations team in order to integrate the Siemens for submitting deals. Moreover wrote a routing system that routes the deals to different providers depending upon certain criteria",
      },
      {
        title: "Grooming Sessions",
        description:
          "I actively participate in the grooming sessions, discuss and shape the technical side of the product.",
      },
      {
        title: "Notification System",
        description:
          "I have designed and implemented the notification system, generating email notification on occurrence of key events in our app. Wrote an optimized cron job that sends email notifications depending upon the different deal criteria",
      },
      {
        title: "Code Reviews",
        description:
          "Conducted thorough code reviews (both frontend & backend) enabling my team to ship high quality code to production",
      },
    ],
    technologies: [
      "Reactjs",
      "FastAPI",
      "Postgres",
      "Sqlalchemy",
      "Python",
      "JavaScript",
      "TypeScript",
      "MUI",
    ],
  },
  {
    companyName: "Netsol Technologies",
    position: "Software Engineer II",
    roleType: "Full Time",
    startDate: new Date(2024, 4 - 1),
    endDate: "Current",
    description:
      "As a Software Engineer II, I was responsible for developing the frontend of the Broker App using React.js and MUI. I collaborated with a team of five and led the frontend development, designing the app's architecture, including data fetching, global state management with context, and error handling.",
    points: [
      {
        title: "Quotation Control",
        description:
          "Architected the Quotation Control module and published it to the private npm registry for reuse across multiple microfrontends.",
      },
      {
        title: "Workflows",
        description:
          "Designed and implemented dynamic, URL-based workflows on the frontend, enabling admin configuration while ensuring workflow integrity and restricting unauthorized URL access.",
      },
      {
        title: "Code Reviews",
        description:
          "Conducted thorough code reviews (both frontend & backend) to ensure high-quality code was deployed to production",
      },
    ],
    technologies: [
      "Reactjs",
      "FastAPI",
      "Postgres",
      "Sqlalchemy",
      "Python",
      "JavaScript",
      "TypeScript",
      "MUI",
    ],
  },
  {
    companyName: "Educative",
    position: "Software Engineer",
    roleType: "Full Time",
    startDate: new Date(2022, 6 - 1),
    endDate: new Date(2023, 9 - 1),
    description:
      "As a Software Engineer, I was responsible for implementing full stack features mostly related to on-platform payment handling using Braintree, Stripe and Paypal. Moreover, my key responsibilities also included investigating and resolving bugs that occurred on production. Here are some of my highlights:",
    points: [
      {
        title: "Course Ratings",
        description:
          "Lead the design and the development of calculating the Course Ratings feature. Devised a formula that involved the calculating and normalising the rating in certain range. Finally wrote an optimised cron job which was responsible for fetching the data about different factors involved in the formula from BigQuery and calculating and updating the ratings.",
      },
      {
        title: "Enterprise Payouts",
        description:
          "Worked on the blockers for making the enterprise payouts feature live. Designed the backend API that fetched and transformed payouts insights from data models. Moreover, handled the enterprise payouts while processing returns and chargebacks.",
      },
      {
        title: "Chargebacks",
        description:
          "Designed the system to manage chargebacks from Stripe and Braintree. Designed a flexible common interface for chargebacks that could incorporate other payment processors as well.",
      },
      {
        title: "Stripe Prices Automation",
        description:
          "Removed the manual effort of creating stripe prices and automated this process on subscription package price update or price slabs update for multi currency.",
      },
      {
        title: "Recurring Gift Subscriptions",
        description:
          "Worked on making the Subscription Gifts recurring on Stripe, Braintree and Paypal for increasing recurring revenue and lowering the customer churn rate.",
      },
      {
        title: "Subscription Reactivation",
        description:
          "Implemented the Subscription Reactivation feature for Braintree payment processor (Backend and Frontend).",
      },
      {
        title: "Trial Page",
        description:
          "Enabled Quick Availing (Logged out) of B2C Trial to minimise friction in the Trial avail process, thereby boosting conversion rate. Moreover, Improved the LCP and FCP for Trial Page.",
      },
    ],
    technologies: [
      "Reactjs",
      "Nextjs",
      "Stripe",
      "Paypal",
      "Braintree",
      "BigQuery",
      "Python",
      "JavaScript",
      "TypeScript",
      "Tailwindcss",
      "Webapp2",
      "NDB",
    ],
  },
  {
    companyName: "Digital Websters",
    position: "Web Developer Intern",
    roleType: "Intern",
    startDate: new Date(2019, 6 - 1),
    endDate: new Date(2019, 9 - 1),
    description: "",
    points: [
      { description: "Worked on Several websites built using Wordpress." },
      {
        description:
          "Actively contributed to the creative design and implementation of these websites, using the features of the Divi theme to deliver visually appealing and highly functional web experiences.",
      },
      {
        description:
          "Worked on the customizations of different themes using JavaScript, HTML and CSS ",
      },
    ],
    technologies: ["Wordpress", "HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Keramos Ceramica",
    description:
      "Keramos Ceramica is an e-commerce store for Ceramics based products. This project encompasses the website and admin dashboard to manage products",
    imageURL: "/images/projects/keramos-ceramica-overlay.jpg",
    technologies: ["nextjs", "firebase", "tailwindcss"],
    projectURL: "https://keramos-ceramica.vercel.app/",
  },
  {
    name: "Ahmad Zaheer",
    description:
      "ahmadzaheer.dev is my personal portfolio. It consists of an elegant dark theme developed using Nextjs. For managing content and blogs, have developed Admin panel which is authenticated using NextAuthjs. Morever, for storing content PostgresSQL is used with Prisma ORM.",
    imageURL: "/images/projects/ahmadzaheer-dev.png",
    technologies: [
      "nextjs",
      "PostgresSQL",
      "tailwindcss",
      "Prisma",
      "NextAuth",
    ],
    projectURL: "https://ahmadzaheer.com",
  },
];

export const SKILLS: Skill[] = [
  { name: "HTML5", category: "frontend", skillLevel: 80 },
  { name: "CSS", category: "frontend", skillLevel: 90 },
  { name: "TailwindCSS", category: "frontend", skillLevel: 90 },
  { name: "Reactjs", category: "frontend", skillLevel: 90 },
  { name: "Markdown", category: "frontend", skillLevel: 80 },
  { name: "Nodejs", category: "backend", skillLevel: 70 },
  { name: "Flask", category: "backend", skillLevel: 70 },
  { name: "Webapp2", category: "backend", skillLevel: 80 },
  { name: "Nextjs", category: "fullstack", skillLevel: 90 },
  { name: "NextAuth", category: "fullstack", skillLevel: 70 },
  { name: "NDB", category: "database", skillLevel: 90 },
  { name: "MongoDB", category: "database", skillLevel: 80 },
  { name: "Firestore", category: "database", skillLevel: 80 },
  { name: "PostgresSQL", category: "database", skillLevel: 80 },
  { name: "Prisma ORM", category: "database", skillLevel: 80 },
  { name: "Python", category: "language", skillLevel: 85 },
  { name: "Javascript", category: "language", skillLevel: 90 },
  { name: "C++", category: "language", skillLevel: 80 },
  { name: "Typescript", category: "language", skillLevel: 90 },
  { name: "GCP", category: "cloud", skillLevel: 70 },
  { name: "Git & Github", category: "versionControl", skillLevel: 90 },
];

export const SOCIALS: Social[] = [
  {
    platform: "GitHub",
    icon: GithubIcon,
    url: "https://github.com/ahmadzaheer-dev",
  },
  {
    platform: "Linkedin",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/ahmad-zaheer/",
  },
];
