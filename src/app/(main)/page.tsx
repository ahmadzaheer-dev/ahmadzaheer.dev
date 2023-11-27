import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechBag from "@/components/sections/TechBag";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="-mt-24">
      <Hero />
      <Experience />
      <Projects />
      <TechBag />
      <Contact />
    </div>
  );
}
