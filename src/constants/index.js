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
  paperRockScissors,
  pricingPage,
  modernArtCollection,
  threejs,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Next JS",
    icon: nextjs,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Point Sigma",
    company_url: "https://pointsigma.com/",
    imageUrl: "https://app.point-sigma.com/assets/images/PsLogo.png",
    icon: web,
    iconBg: "#fbc3bc",
    date: "Sep 2023 - Present",
    points: [
      "Transformed Salesforce Aura and Lightning Web Components (LWC) into reusable and modular React components, improving maintainability and scalability.",
      "Developed functional components using React hooks and custom hooks to optimize performance and code reusability.",
      "Ensured robust type safety and error prevention by implementing TypeScript across the codebase.",
      "Managed global state efficiently using Context API, reducing dependency on external state management libraries.",
      "Integrated AWS, Amplify, Cognito for user authentication processes, including signup, login, and session management.",
      "Utilized Salesforce Lightning Design System (SLDS), Ant Design, and CSS/SCSS for responsive and consistent UI design.",
      "Implemented CRUD operations using RESTful APIs with endpoints written in Python, ensuring efficient data management and integration with the backend.",
      "Enhanced the platform by integrating AI-powered features, including Large Language Models (LLMs) and Generative AI, to deliver advanced data analytics capabilities.",
      "Designed and developed user-friendly interfaces for new features, ensuring seamless interaction with AI-driven insights.",
      "Provided mentorship and technical support to junior developers, fostering team growth and knowledge sharing.",
      "Collaborated with cross-functional teams to deliver high-quality features using Agile methodologies and tools like Git, Bitbucket, and Jira.",
    ],
    technologies:
      "React, Next.js, TypeScript, AWS Cognito, Ant Design, REST APIs, Python",
  },
  {
    title: "Software Development Specialist",
    company_name: "Boutique Rugs",
    company_url: "https://boutiquerugs.com/",
    imageUrl:
      "https://boutiquerugs.com/cdn/shop/t/343/assets/br_footer_logo_medium.png?v=59094383317375050561743243961",
    icon: web,
    iconBg: "#fbc3bc",
    date: "Feb 2022 - Sep 2023",
    points: [
      "Developed product management screens handling thousands of items using React/Next.js",
      "Implemented state management with Redux Toolkit",
      "Integrated GraphQL (Apollo) and REST APIs (PHP backend)",
      "Designed UI with CSS/SCSS and Shopify Polaris library",
      "Managed projects using Git/GitHub and ClickUp",
    ],
    technologies: "React, Next.js, Redux, GraphQL, PHP, Shopify Polaris",
  },
  {
    title: "Frontend Developer (Contract)",
    company_name: "T-Con",
    company_url: "http://www.t-con.co.uk/",
    imageUrl: "https://www.t-con.co.uk/images/t-con-white.png",
    icon: web,
    iconBg: "#383E56",
    date: "Dec 2020 - Feb 2022",
    points: [
      "Migrated codebase to TypeScript for improved reliability",
      "Implemented state management using Context API",
      "Converted class components to functional components with hooks",
      "Designed UI with Styled Components and Atlaskit",
      "Worked with Jira/SCRUM methodologies",
    ],
    technologies: "React, TypeScript, Context API, Styled Components, Jira",
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-Employed",
    company_url: "https://github.com/yavuzdeveloper",
    imageUrl: "https://github.com/yavuzdeveloper.png",
    icon: web,
    iconBg: "#383E56",
    date: "Jul 2018 - Dec 2020",
    points: [
      "Developed full-stack websites with PHP/Laravel and MySQL",
      "Created responsive UIs with HTML/CSS/JavaScript",
      "Integrated third-party APIs and payment systems",
      "Managed databases using phpMyAdmin",
      "Provided ongoing maintenance and client support",
    ],
    technologies: "PHP, Laravel, MySQL, JavaScript, REST APIs",
  },
];

const testimonials = [
  {
    testimonial:
      "I collaborated with Leo's team at Point Sigma to build a scalable SaaS platform that improved client workflows.They will provide professional references when needed.",
    name: "Leo Pape",
    designation: "CEO",
    company: "Point Sigma",
    image:
      "https://framerusercontent.com/images/CJMJL8ZyCytgdy9yBzaxicRKre4.png",
  },
  {
    testimonial:
      "I worked with A.Hakan's team at Boutique Rugs to develop a performant web app with modern UX. They will provide professional references when needed.",
    name: "Ahmet Hakan G.",
    designation: "DTPM",
    company: "Coca-Cola",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH3JNbHs8dpGg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692910263034?e=1754524800&v=beta&t=q4ETv7Fv-tF3ftlMeBdjkiP9xDrVxSfm9jeRsjYZVms",
  },
  {
    testimonial:
      "I developed a custom Jira plugin with Fatih's team at T-Con that automated key project tracking processes. They will provide professional references when needed.",
    name: "Fatih T.",
    designation: "VP",
    company: "Deutsche Bank",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQE_OLWl0OFS8A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669483062837?e=1754524800&v=beta&t=VXd7wQNhDG2uKzFqE_x3maS-t6rzb13hfBAtZ9bRoMU",
  },
];

const projects = [
  {
    name: "Modern Art Collection",
    description:
      "A modern Next.js 15 gallery showcasing digital artworks with zoomable high-resolution viewing, advanced search, and pagination—powered by Tailwind CSS and shadcn/ui.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: modernArtCollection,
    sourceCodeLink: "https://github.com/yavuzdeveloper/artwork-app",
    liveLink: "https://artwork-app-wine.vercel.app/",
  },
  {
    name: "Pricing Cards",
    description:
      "A responsive pricing page featuring three-tier plans, built with Context API for state management. Includes dark/light mode toggle and flawless mobile-to-desktop adaptation.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pricingPage,
    sourceCodeLink: "https://github.com/yavuzdeveloper/pricing-page",
    liveLink: "https://pricing-page-indol.vercel.app/",
  },
  {
    name: "Rock Paper Scissors",
    description:
      "A fully responsive Rock Paper Scissors Lizard Spock game built with pure CSS, where you challenge custom cartoon characters in unlimited rounds of the classic hand-game showdown.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: paperRockScissors,
    sourceCodeLink:
      "https://github.com/yavuzdeveloper/frontend-interview-exercise-big-bang",
    liveLink: "https://rock-paper-scissors-teal-omega.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
