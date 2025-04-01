export const gridItems = [
  {
    id: 1,
    title: "About Me",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "MY TECH STACK",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Building a Multiplayer Battleship Game.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Contact Me Anywhere at Anytime!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const myProjects = [
  {
    title: "Buyify - Next.js 15 eCommerce App",
    desc: "Buyify is a next-generation eCommerce platform designed for a seamless and secure shopping experience. Built with Next.js 15, Tailwind CSS, and TypeScript, it offers a sleek, responsive interface. Framer Motion ensures smooth animations, while Clerk authentication and Stripe payments provide security and reliability. Zustand manages state efficiently, and Radix UI enhances accessibility for an intuitive user experience.",
    subdesc:
      "Buyify is optimized with Lucide React, React Icons, and Tailwind Merge for a visually polished design. Axios handles API requests, while PostCSS and tw-animate-css refine styling. With fast performance and seamless interactions, Buyify makes online shopping effortless and engaging.",
    href: "https://buyify.vercel.app",
    texture: "/projectVideos/buyify.mp4",
    logo: "/assets/buyify.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/next.svg",
      },
      {
        id: 2,
        name: "Stripe",
        path: "/stripe.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/ts.svg",
      },
      {
        id: 4,
        name: "Clerk",
        path: "/clerk.svg",
      },
    ],
  },
  {
    title: "CacaoTalk - Real-Time Chat app",
    desc: "CacaoTalk is a real-time chat app inspired by KakaoTalk, built for fast, secure, and seamless communication. Powered by React, Socket.io, and Zustand, it delivers instant messaging with real-time updates. Axios ensures smooth data fetching, while Cloudinary enables effortless media sharing. Secure authentication is handled via bcryptjs, JWT, and cookie-parser for a safe and reliable experience.",
    subdesc:
      "CacaoTalk enhances the user experience with React Router, Lucide React icons, and DaisyUI for a sleek interface. Optimized with Vite, Tailwind CSS, and PostCSS, it ensures fast performance and a responsive design for effortless communication.",
    href: "https://chat-app-kq6u.onrender.com",
    texture: "/projectVideos/cacaotalk.mp4",
    logo: "/assets/ctLogo.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/re.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        path: "/tail.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/js.svg",
      },
      {
        id: 4,
        name: "Express",
        path: "/express.svg",
      },
    ],
  },
  {
    title: "WriteMe - Markdown Generator for projects",
    desc: "WriteMe automates README.md creation for GitHub projects with AI-powered efficiency. Built with Next.js 15, OpenAI, and Clerk authentication, it offers secure access and seamless generation. Framer Motion ensures smooth animations, while React Simple Typewriter enhances real-time text effects. Tailwind CSS, Radix UI, and Lucide React create a polished interface for effortless documentation.",
    subdesc:
      "WriteMe integrates Tailwind Merge and tw-animate-css for refined styling and animations. Optimized with Class Variance Authority and Clsx, it maintains consistent design. ESLint and TypeScript enhance code quality, ensuring a smooth, dynamic experience for developers.",
    href: "https://writeme-2r5e.onrender.com/",
    texture: "/projectVideos/writeme.mp4",
    logo: "/assets/wmLogo.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(180deg,#facc15,#eab308), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/next.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        path: "/tail.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/ts.svg",
      },
      {
        id: 4,
        name: "Clerk",
        path: "/clerk.svg",
      },
    ],
  },
  {
    title: "Spendable - Helper to rethink purchases",
    desc: "Spendable is an intuitive budgeting tool designed to help you make smarter financial decisions. Built with Next.js 15, React, and TypeScript, it delivers a smooth and responsive experience. Framer Motion adds fluid animations, while Shadcn and Lucide React ensure an accessible and visually polished interface making Spendable both useful and efficient.",
    subdesc:
      "Spendable transforms prices into work hours for better financial insight. React Icons and tw-animate-css bring dynamic visual appeal, while Class Variance Authority keeps the UI flexible and maintainable. With a fast, intuitive design, Spendable empowers users to budget effectively and make informed spending choices.",
    href: "https://spendable-roan.vercel.app/",
    texture: "/projectVideos/spendable.mp4",
    logo: "/assets/sLogo.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/next.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        path: "/tail.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/ts.svg",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/fm.svg",
      },
    ],
  },
  {
    title: "Coming Soon...",
    desc: "I dedicate time to expanding my knowledge and refining my skills, always striving to stay ahead in the ever-evolving tech landscape. Whether mastering new frameworks, deepening my understanding of front-end and back-end development, or exploring emerging trends, I believe growth comes from continuous learning.",
    subdesc:
      "Through hands-on projects, online courses, and industry research, I push my abilities further, ensuring I deliver high-quality work. This commitment to improvement not only enhances my expertise but also allows me to bring fresh, innovative solutions to the projects I create and the teams I work with.",
    href: "https://github.com/lonis752",
    texture: "/projectVideos/404.mp4",
    logo: "/assets/soon.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/re.svg",
      },
      {
        id: 2,
        name: "GraphQL",
        path: "/graphql.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/ts.svg",
      },
      {
        id: 4,
        name: "Three.js",
        path: "/three.svg",
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: " Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Miohnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Micnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Mson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    name: "Independent Study & Skill Development ",
    pos: "Fullstack Developer",
    duration: "2024 - Present",
    title:
      "Focused on expanding my knowledge in web development, including Express, Next.js, TypeScript, SQL/NoSQL, and more fundamentals. Built personal projects to refine skills, solve problems, and stay current with industry trends.",
    icon: "/e1.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Freelance Developer",
    pos: "Fullstack Developer",
    duration: "2021 - Present",
    title:
      "Built and managed SEO-driven blogs and artist portfolios, optimizing content and handling full-stack development for performance, aesthetics, and UX.",
    icon: "/lonis.png",
    animation: "wave",
  },
  {
    id: 3,
    name: "Blueprint Media House",
    pos: "Lead Frontend Developer",
    duration: "2019 - 2021",
    title:
      "As a founding member, I built high-performance websites for global businesses, optimizing UI/UX, modern frontend tech, and conversion-focused design to drive growth.",
    icon: "/bpmh.png",
    animation: "salute",
  },
];
