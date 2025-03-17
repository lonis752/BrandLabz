"use client";

import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { GoCodeSquare } from "react-icons/go";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "#about", icon: <IoMdPerson /> },
            { name: "Projects", link: "#projects", icon: <FaFolder /> },
            {
              name: "Testimonials",
              link: "#testimonials",
              icon: <MdOutlineRateReview />,
            },
            { name: "Services", link: "#services", icon: <GoCodeSquare /> },
            { name: "Contact", link: "#contact", icon: <MdEmail /> },
          ]}
        />
        <Hero />
        <Grid />
        <Projects />
        <Approach />
        <Experience />
        <Clients />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
