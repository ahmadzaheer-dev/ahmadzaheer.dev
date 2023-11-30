import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechBag from "@/components/sections/TechBag";
import Contact from "@/components/sections/Contact";
// import Blog from "@/components/sections/Blog";
import ScrollToTop from "@/components/Nav/ScrollToTop";

export default function Home() {
  return (
    <div className="-mt-24">
      <Hero />
      <Experience />
      <Projects />
      <TechBag />
      {/* <Blog /> */}
      <Contact />
      <ScrollToTop />
    </div>
  );
}
