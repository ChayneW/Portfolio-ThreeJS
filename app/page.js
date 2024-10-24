import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}
