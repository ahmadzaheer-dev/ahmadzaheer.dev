import { Experience, Project, Skill } from "@/types/types";

export const BREAK_POINTS = {
  // Same as tailwindcss configuration
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const NAV_ITEMS = [
  { name: "Experience" as const, path: "#experience" },
  { name: "Projects" as const, path: "#projects" },
  { name: "Bagpack" as const, path: "#bagpack" },
  { name: "Blog" as const, path: "#blog" },
  { name: "Contact" as const, path: "#contact" },
];

export const EXPERIENCE: Experience[] = [
  {
    companyName: "Educative Inc.",
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
          "mplemented the Subscription Reactivation feature for Braintree payment processor (Backend and Frontend).",
      },
      {
        title: "Trial Page",
        description:
          "Enabled Quick Availing (Logged out) of B2C Trial to minimise friction in the Trial avail process, thereby boosting conversion rate. Moreover, Improved the LCP and FCP for Trial Page.",
      },
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
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Keramos Ceramica",
    description:
      "Keramos Ceramica is an e-commerce store for Ceramics based products. This project encompasses the website and admin dashboard to manage products",
    imageURL: "/project-2.png",
    overlayImageURL: "/project-2.png",
    technologies: ["nextjs", "firebase", "tailwindcss"],
  },
  {
    name: "Instant Chat",
    description:
      "This project contains chat application that eases the day to day communication.",
    imageURL: "/project-1.png",
    overlayImageURL: "/project-1.png",
    technologies: ["nextjs", "SQL", "tailwindcss"],
  },
  {
    name: "ahmadzaheer.dev",
    description:
      "This project contains my personal portfolio listing my experience, achievements, projects and skills. This also includes the admin side containing functionalities of blog editing using markdown, projects management etc.",
    imageURL: "/project-2.png",
    overlayImageURL: "/project-2.png",
    technologies: ["nextjs", "tailwindcss"],
  },
  {
    name: "ahmadzaheer.dev",
    description:
      "This project contains my personal portfolio listing my experience, achievements, projects and skills. This also includes the admin side containing functionalities of blog editing using markdown, projects management etc.",
    imageURL: "/project-1.png",
    overlayImageURL: "/project-1.png",
    technologies: ["nextjs", "tailwindcss"],
  },
  {
    name: "Keramos Ceramica",
    description:
      "Keramos Ceramica is an e-commerce store for Ceramics based products. This project encompasses the website and admin dashboard to manage products",
    imageURL: "/project-2.png",
    overlayImageURL: "/project-2.png",
    technologies: ["nextjs", "firebase", "tailwindcss"],
  },
  {
    name: "Instant Chat",
    description:
      "This project contains chat application that eases the day to day communication.",
    imageURL: "/project-1.png",
    overlayImageURL: "/project-1.png",
    technologies: ["nextjs", "SQL", "tailwindcss"],
  },
  {
    name: "ahmadzaheer.dev",
    description:
      "This project contains my personal portfolio listing my experience, achievements, projects and skills. This also includes the admin side containing functionalities of blog editing using markdown, projects management etc.",
    imageURL: "/project-2.png",
    overlayImageURL: "/project-2.png",
    technologies: ["nextjs", "tailwindcss"],
  },
];

//TODO: Have to add logos of Technologies
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
  { name: "Prisma", category: "database", skillLevel: 80 },
  { name: "Python", category: "language", skillLevel: 85 },
  { name: "Javascript", category: "language", skillLevel: 90 },
  { name: "C++", category: "language", skillLevel: 80 },
  { name: "Typescript", category: "language", skillLevel: 90 },
  { name: "GCP", category: "cloud", skillLevel: 70 },
  { name: "Git & Github", category: "versionControl", skillLevel: 90 },
];
