import ChangingText from "@/components/ChangingText";
import Footer from "@/components/Footer";
import GridImages from "@/components/GridImages";
import Hero from "@/components/Hero";
import MateorCard from "@/components/MateorCard";
import StickyScrollbar from "@/components/StickyScrollbar";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import React from "react";

function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="flex flex-row items-center justify-center gap-10 my-5">
          <MateorCard />
          <ChangingText />
        </div>
        <StickyScrollbar />
        <div className="">
        <GridImages />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Home;
