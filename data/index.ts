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
    desc: "Buyify is an eCommerce platform that makes online shopping visually pleasing. Powered by Stripe and Clerk, it ensures secure payments and seamless authentication. With smooth animations and an intuitive design, Buyify delivers a fast, reliable, and engaging shopping experience—making every purchase effortless and enjoyable.",
    subdesc:
      "Powered by Next.js 15, Tailwind CSS, TypeScript, Framer Motion, and Stripe, Buyify offers secure authentication, smooth animations, and a fast, reliable shopping experience with seamless purchases.",
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
        name: "TailwindCSS",
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
    title: "CacaoTalk - Real-Time Chat app",
    desc: "CacaoTalk is a real-time chat app inspired by KakaoTalk, designed for fast and secure communication. With seamless login authentication, instant messaging, and effortless photo sharing, it keeps you connected anytime, anywhere.",
    subdesc:
      "Stay connected with CacaoTalk’s seamless messaging, secure authentication, and easy media sharing. Enjoy real-time chats with a smooth and intuitive experience built for effortless communication.",
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
        name: "TailwindCSS",
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
    title: "WriteMe - Markdown Generator for projects",
    desc: "WriteMe is a smart tool that automates README.md creation for GitHub repositories and projects. Just enter your repo link, and it generates a structured Markdown framework instantly for you to modify and push. With secure login and a one-use-per-day limit, WriteMe makes documentation effortless.",
    subdesc:
      "Simplify your project documentation with WriteMe. Log in, add your GitHub repo link, and get a clean, professional README template—fast and hassle-free.",
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
        name: "TailwindCSS",
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
    title: "Spendable - Helps to rethink your next purchase",
    desc: "Spendable is a simple yet powerful budgeting tool that helps you make smarter spending decisions. Enter your hourly wage and the price of a product, and Spendable instantly calculates how many hours you need to work to afford it.",
    subdesc:
      "Know the true cost of your purchases in work hours. With Spendable, just input your hourly wage and the item’s price to see how much time it takes to earn it—helping you spend wisely.",
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
        name: "TailwindCSS",
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
    desc: "I'm constantly expanding my coding and programming skills, always exploring new technologies and improving my craft. With exciting projects always in the pipeline, there's always something innovative on the way.",
    subdesc:
      "Driven by continuous learning, I explore new coding technologies and push my skills further. With fresh projects always in development, there’s always something exciting on the horizon.",
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
        name: "TailwindCSS",
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
    animation: "waving",
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
