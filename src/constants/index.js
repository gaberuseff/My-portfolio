import projects1 from '../assets/project-1.png';
import projects2 from "../assets/project-2.png";
import projects3 from "../assets/project-3.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Gaber Usef, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "Open Resume",
  resumeLink: "https://drive.google.com/file/d/14mje9uOi5n11jfA0X2CTiLh1xt2H2M-Y/view?usp=sharing",
};

export const PROJECTS = [
  {
    name: "Donut Hub",
    description: "Donut hub is a web for donut lovers to order donuts and track orders",
    image: projects2,
    github_link: "https://github.com/gaberuseff/donut-hub",
    live_link: "https://donut-hub.vercel.app/",
  },
  {
    name: "Donut Hub - Admin",
    description: "Donut hub is a web app for admins to manage donut hub website",
    image: projects1,
    github_link: "https://github.com/gaberuseff/donut-hub-admin",
    live_link: "https://donut-hub-admin.vercel.app/",
  },
  {
    name: "OmniFood",
    description: "Omnifood is a premium healthy food delivry service ",
    image: projects3,
    github_link: "https://github.com/gaberuseff/Omnifood-Project",
    live_link: "https://omnifood-gaber.netlify.app/",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. I have worked on numerous projects, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like JavaScript, React, Styled Components, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const SKILLS = [
  {
    toolName: "React Js",
    title: "React JS",
    description:
      "I have extensive experience in building dynamic and responsive user interfaces using React JS. I am proficient in using hooks, context API, and state management libraries like Redux toolkit.",
  },
  {
    toolName: "JavaScript",
    title: "JavaScript",
    description:
      "I have knownledge of JavaScript and I have good understanding of ES6+ features, to create interactive web applications.",
  },
  {
    toolName: "Tailwind CSS",
    title: "Tailwind CSS",
    description:
      "I am skilled in using Tailwind CSS to create custom designs and responsive layouts. I can build user interfaces with Tailwind's utility-first approach.",
  },
  {
    toolName: "Html & Css",
    title: "HTML & CSS",
    description:
      "I have a foundation in HTML and CSS, allowing me to create semantic and accessible web pages. I am familiar with modern CSS techniques like Flexbox and Grid.",
  }
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "dev.gaber@gmail.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/gaberuseff",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/gaberuseff",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/gaberuseff",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
    {
      platform: "Whatsapp",
      url: "https://wa.me/+201098922786",
      ariaLabel: "Connect with me on WhatsApp",
      icon: "RiWhatsappFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Gaber Usef. All rights reserved.`,
};
