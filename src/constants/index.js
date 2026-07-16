export const projectTags = {
  react: { id: 1, name: "React", path: "/assets/logos/react.svg" },
  tailwindcss: { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
  nextjs: { id: 3, name: "Next.js", path: "/assets/logos/nextjs.svg" },
  nodejs: { id: 4, name: "Node.js", path: "/assets/logos/nodejs.svg" },
  mongodb: { id: 5, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
  html5: { id: 6, name: "HTML5", path: "/assets/logos/html5.svg" },
  css3: { id: 7, name: "CSS3", path: "/assets/logos/css3.svg" },
  javascript: { id: 8, name: "JavaScript", path: "/assets/logos/javascript.svg" },
  vitejs: { id: 9, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
  git: { id: 10, name: "Git", path: "/assets/logos/git.svg" },
  github: { id: 11, name: "GitHub", path: "/assets/logos/github.svg" },
  auth0: { id: 12, name: "Auth0", path: "/assets/logos/auth0.svg" },
  cplusplus: { id: 13, name: "C++", path: "/assets/logos/cplusplus.svg" },
  sqlite: { id: 14, name: "SQLite", path: "/assets/logos/sqlite.svg" },
  stripe: { id: 15, name: "Stripe", path: "/assets/logos/stripe.svg" },
  firebase: { id: 16, name: "Firebase", path: "/assets/logos/firebase.svg" },
  threejs: { id: 17, name: "Three.js", path: "/assets/logos/threejs.svg" },
  visualstudiocode: { id: 18, name: "Visual Studio Code", path: "/assets/logos/visualstudiocode.svg" },
  microsoft: { id: 19, name: "Microsoft", path: "/assets/logos/microsoft.svg" },
  microsoftsqlserver: { id: 20, name: "Microsoft SQL Server", path: "/assets/logos/microsoftsqlserver.svg" },
  socketio: { id: 21, name: "Socket.IO", path: "/assets/logos/socket-io.svg" },
};

export const myProjects = [
  {
    id: 1,
    title: "Netspire",
    description: "An Instagram clone application developed in 2022 featuring social interactions and media sharing.",
    subDescription: [
      "Developed a full-stack social media platform with features analogous to Instagram.",
      "Implemented secure user authentication and media uploading workflows.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/netspire.png", // Kept generic placeholder
    tags: [projectTags.react, projectTags.tailwindcss, projectTags.nodejs, projectTags.mongodb, projectTags.github, projectTags.firebase],
  },
  {
    id: 2,
    title: "Kynn",
    description: "An e-commerce website selling books inspired by Amazon, featuring a crazy UI and full checkout logic.",
    subDescription: [
      "Built in 2024 with a highly engaging and modern user interface.",
      "Implemented comprehensive e-commerce logic including cart management, checkout, and payment flows.",
    ],
    href: "https://kynn.vercel.app/",
    logo: "https://kynn.vercel.app/favicon.ico",
    image: "/assets/projects/kynn.png",
    tags: [projectTags.nextjs, projectTags.tailwindcss, projectTags.nodejs, projectTags.mongodb, projectTags.git, projectTags.stripe],
  },
  {
    id: 3,
    title: "Anime Group India - Summer anime fiesta 2025",
    description: "Event landing page for AGI SAF 2025.",
    subDescription: [
      "Designed an engaging event landing page for a large-scale community event.",
      "Optimized for high traffic and integrated event registration details.",
    ],
    href: "https://summer-anime-fiesta.vercel.app/",
    logo: "https://summer-anime-fiesta.vercel.app/favicon.ico",
    image: "/assets/projects/agi-clan-wars.png",
    tags: [projectTags.html5, projectTags.css3, projectTags.javascript, projectTags.git],
  },
  {
    id: 4,
  title: "Hyosan Minecraft SMP Website",
  description:
    "An immersive Minecraft community platform featuring server statistics, economy tracking, team systems, and historical timelines for the Hyosan SMP universe.",

  subDescription: [
    "Developed an interactive dashboard displaying live server information, player statistics, economy metrics, and community announcements.",
    "Designed a modern community platform showcasing SMP history, custom gameplay features, and onboarding information for Java and Bedrock players.",
  ],

  href: "https://dev-neon-kappa.vercel.app/?home=1",
  logo: "https://dev-neon-kappa.vercel.app/favicon.ico",
  image: "/assets/projects/hyosan-smp.jpg",

  tags: [
    projectTags.html5, projectTags.css3, projectTags.javascript, projectTags.github
  ],
  },
  {
    id: 5,
    title: "AGI Treasure Hunt",
    description: "An interactive digital treasure hunt experience for community engagement.",
    subDescription: [
      "Built systems for real-time puzzle solving and progression tracking.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/agi-treasure-hunt.png",
    tags: [projectTags.nextjs, projectTags.tailwindcss, projectTags.nodejs, projectTags.mongodb, projectTags.socketio],
  },
  {
    id: 6,
    title: "AGI Cosplayer Portal",
    description: "A dedicated portal for cosplayers to register, showcase, and manage event participation.",
    subDescription: [
      "Streamlined the registration and verification process for event cosplayers.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/agi-cosplayer-portal.png",
    tags: [projectTags.nextjs, projectTags.tailwindcss, projectTags.nodejs, projectTags.mongodb, projectTags.socketio],
  },
  {
    id: 7,
    title: "Orchid International Website",
    description: "Official website for Orchid International driving sales and digital branding.",
    subDescription: [
      "Optimized website performance and conversion funnels.",
      "Integrated business strategy with modern digital solutions to boost marketing campaigns.",
    ],
    href: "http://orchidintl.in/",
    logo: "http://orchidintl.in/favicon.ico",
    image: "/assets/projects/orchidinternational.png",
    tags: [projectTags.nextjs, projectTags.tailwindcss, projectTags.nodejs, projectTags.mongodb],
  },
  {
    id: 8,
    title: "Shubham Singhal Psychologist",
    description: "A modern website for a medical professional ensuring responsive user experiences.",
    subDescription: [
      "Developed a tailored CMS integration for easy content management.",
    ],
    href: "https://shubham-singhal-clinic.vercel.app/",
    logo: "https://shubham-singhal-clinic.vercel.app/favicon.ico",
    image: "/assets/projects/psychologistSite.png",
    tags: [projectTags.react, projectTags.tailwindcss,],
  },
  {
    id: 9,
    title: "Watchnet",
    description: "A Netflix clone application developed in 2023, hosting movies on Google Drive.",
    subDescription: [
      "Created a video streaming interface inspired by Netflix.",
      "Integrated Google Drive as a robust, cost-effective storage solution for media files.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/watchnet.png",
    tags: [projectTags.nextjs, projectTags.tailwindcss, projectTags.nodejs, projectTags.mongodb, projectTags.firebase],
  }
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/918368644902?text=Hi! I'm interested in your work and would love to discuss a potential project or collaboration. Looking forward to hearing from you!",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/pratyaksh-baghel-021495335/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bypratyakshbaghel/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Student & Freelancer",
    job: "Graphic Era Hill University / Self-Employed",
    date: "Present",
    contents: [
      "Presently working self-employed taking clients for bespoke digital solutions and web development.",
      "Concurrently pursuing a Bachelor of Technology in Computer Science & Engineering."
    ],
  },
  {
    title: "Technical Lead",
    job: "AnimeGroupIndia (AGI)",
    date: "2025 - 2026",
    contents: [
      "Built and managed technological infrastructure for one of India's emerging anime communities.",
      "Led multidisciplinary teams across technology, operations, and marketing.",
      "Designed scalable community systems and engagement platforms.",
      "Established operational frameworks and digital ecosystems for large-scale events."
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    job: "Self-Employed",
    date: "2020 - 2024",
    contents: [
      "Healthcare: Developed modern websites and management systems for medical professionals and clinics.",
      "Travel Technology: Designed and engineered tailored solutions for travel agencies and booking workflows.",
      "Community & Event Platforms: Built engagement-driven systems for conventions, communities, and interactive experiences."
    ],
  },
];
