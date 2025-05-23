import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
    Workmode:"Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "security researcher",
    icon: mobile,
  },
  {
    title: "Smart contract Auditor",
    icon: backend,
  },
  {
    title: "Ethical Hacker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Ethical Hacker Intern",
    company_name: "Symbiosys Technologies",
    icon: starbucks, // Changed from symbiosyslogo to meta
    iconBg: "#383E56",
    date: "November 2024 - Present",
    points: [
      "Exposed technical flaws and security weaknesses in various industry-based projects",
      "Utilized Splunk for real-time data monitoring and threat detection",
      "Conducted network security analysis and infrastructure protection",
      "Collaborated with cross-functional teams for financial and healthcare security",
      "Performed risk assessment and reporting following international standards"
    ],
  },
  {
    title: "Professional Penetration Tester Intern",
    company_name: "Darkrelay Security Labs",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2022 - September 2022",
    points: [
      "Conducted security validation and threat hunting",
      "Performed comprehensive penetration testing",
      "Developed and implemented security validation strategies",
      "Provided detailed security consulting services",
      "Enhanced organizational security posture against cyber threats"
    ],
  },
  {
    title: "Ethical Hacker Intern",
    company_name: "ERSEGMENT Private Limited",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021 - 2022",
    points: [
      "Reduced security vulnerabilities by 30% through penetration testing",
      "Conducted vulnerability assessments for critical systems",
      "Enhanced overall system resilience and security measures",
      "Developed comprehensive security documentation",
      "Implemented effective cybersecurity strategies"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ravi keen eye for vulnerabilities has significantly strengthened our security. Their insights are invaluable",
    name: "Pooja sri",
    designation: "Cyber Security Analyst",
    company: "",
    // Fix the invalid image URL
    image: "https://randomuser.me/api/portraits/women/4.jpg", // Using a placeholder image instead of invalid google.com URL
  },
  {
    testimonial:
      "Ravikumar expertise in uncovering critical issues has been a game-changer for our security team.",
    name: "karthik  chanda",
    designation: "CEO",
    company: "ERsegment",
    image: "https://media.licdn.com/dms/image/C4D03AQFcCgTGYZmeSQ/profile-displayphoto-shrink_200_200/0/1598123199011?e=2147483647&v=beta&t=RvLj--cHvDLFlZYH87WiFOY6StuoucO6beCmLWksy0A",
  },
  {
    testimonial:
      "RaviKumar is a standout learner whose curiosity and diligence have greatly enriched our cybersecurity classes",
    name: "Sager",
    designation: "CEO",
    company: "darkrelay",
    image: "https://media.licdn.com/dms/image/D560BAQFf_IyFpy3ZBQ/company-logo_200_200/0/1711727160715/darkrelay_logo?e=2147483647&v=beta&t=hCkrOXAJOqJsYsxf4YpL_H-XrAFtbbJiA2Pn2CMgoMg",
  },
];

const projects = [
  {
    name: "Certified Ethical Hacker (CEH) v12",
    description:
      "Achieved EC-Council's CEH v12 certification, demonstrating advanced expertise in ethical hacking methodologies, penetration testing, and security assessment. Mastered tools and techniques for identifying and mitigating cybersecurity vulnerabilities across diverse platforms.",
    tags: [
      {
        name: "Ethical Hacking",
        color: "blue-text-gradient",
      },
      {
        name: "Penetration Testing",
        color: "green-text-gradient",
      },
      {
        name: "Security Assessment",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Solana Blockchain Developer Certification",
    description:
      "Earned Solana Foundation's blockchain developer certification, demonstrating expertise in building decentralized applications on the Solana network. Mastered Rust programming, smart contract development, and implementation of secure blockchain solutions using Solana's high-performance architecture.",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Solana",
        color: "green-text-gradient",
      },
      {
        name: "Smart Contracts",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Certified AppSec Practitioner (CAP)",
    description:
      "Earned SecOps Group's Certified AppSec Practitioner certification, demonstrating expertise in application security testing, vulnerability assessment, and secure development practices. Mastered OWASP Top 10 vulnerabilities, secure coding guidelines, and modern AppSec tools and methodologies.",
    tags: [
      {
        name: "AppSec",
        color: "blue-text-gradient",
      },
      {
        name: "Secure Development",
        color: "green-text-gradient",
      },
      {
        name: "OWASP",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
