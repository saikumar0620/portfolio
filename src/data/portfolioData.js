export const personalInfo = {
  name: "Saikumar Bammidi",
  firstName: "Saikumar",
  role: "Frontend Developer",
  tagline: "Crafting pixel-perfect, performant web experiences",
  bio: `I'm a passionate Frontend Developer who loves turning ideas into elegant, responsive, and user-friendly web applications. With a strong foundation in modern JavaScript and React, I focus on building interfaces that are not just functional, but delightful to use.`,
  email: "sai06.bammidi@gmail.com",
  location: "India",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/saikumar0620",
    linkedin: "https://www.linkedin.com/in/saikumar-bammidi-85a850318/",
    email: "mailto:sai06.bammidi@gmail.com",
  },
};

export const skills = [
  {
    name: "HTML5",
    level: 90,
    icon: "🏗️",
    category: "frontend",
    description: "Semantic markup, accessibility, SEO",
  },
  {
    name: "CSS3 / Tailwind",
    level: 85,
    icon: "🎨",
    category: "frontend",
    description: "Responsive design, animations, Tailwind CSS",
  },
  {
    name: "JavaScript",
    level: 85,
    icon: "⚡",
    category: "frontend",
    description: "ES6+, DOM, async programming",
  },
  {
    name: "React",
    level: 80,
    icon: "⚛️",
    category: "frontend",
    description: "Hooks, Context, component architecture",
  },
  {
    name: "Git & GitHub",
    level: 75,
    icon: "🔀",
    category: "tools",
    description: "Version control, collaboration, CI/CD",
  },
  {
    name: "Responsive Design",
    level: 88,
    icon: "📱",
    category: "frontend",
    description: "Mobile-first, cross-browser compatibility",
  },
];

export const projects = [
  {
    id: 1,
    title: "Roomie Finder",
    description:
      "A modern roommate discovery application featuring an intuitive UI, sophisticated interest-matching, and responsive design. Built to help users find their perfect living space seamlessly.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React"],
    image: "/roomie-finder.png",
    liveUrl: "https://roomie-finder-pi.vercel.app/",
    githubUrl: "https://github.com/saikumar0620/Roomie-finds",
    featured: true,
  },
  {
    id: 2,
    title: "Multi-step Form",
    description:
      "A sleek, interactive multi-step form featuring a dynamic progress indicator, smooth step transitions, and form validation. Designed for an optimal user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/multi-step-form.png",
    liveUrl: "https://multi-step-form-with-progress-indic-beta.vercel.app/",
    githubUrl:
      "https://github.com/saikumar0620/Multi-step-Form-with-Progress-Indicator",
    featured: true,
  },
  // {
  //   id: 3,
  //   title: "Digital Wishes App",
  //   description:
  //     "A beautiful, interactive web application designed to create and share digital wishes. Features smooth CSS animations and fluid, responsive transitions.",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   image: "/digital-wishes.png",
  //   liveUrl: "https://wishes-ashen.vercel.app",
  //   githubUrl: "https://github.com/saikumar0620/wishes",
  //   featured: false,
  // },
  {
    id: 4,
    title: "React Todo App",
    description:
      "A full-featured task management application built with React. Includes functionality for adding, completing, and organizing daily tasks within a clean, modern interface.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/todo-app.png",
    liveUrl: "",
    githubUrl: "https://github.com/saikumar0620/todo_App",
    featured: false,
  },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Mechanical Engineering",
    institution: "Aditya institiute of technology and management",
    year: "2021 - 2025",
    description: `Motivated and detail-oriented Web Developer with a strong foundation in HTML, CSS, JavaScript, and
ReactJs. Eager to apply academic knowledge and hands-on skills to build responsive, user-friendly web
applications. Passionate about continuous learning, clean code practices, and contributing to innovative
projects.`,
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    type: "Projects & Internships",
    period: "Fresher",
    description:
      "Building responsive web applications using React and modern CSS. Focused on creating pixel-perfect UIs with smooth animations and optimal performance.",
    highlights: [
      "Built 5+ responsive web applications using React & Tailwind CSS",
      "Implemented dark/light theme systems with smooth transitions",
      "Collaborated with teams using Git and agile methodologies",
      "Focused on accessibility and cross-browser compatibility",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
