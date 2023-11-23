import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="-mt-24">
      <Hero />
      <Experience />
      <Projects />
    </div>
  );
}
