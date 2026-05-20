import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { Contact } from "@/components/Contact";

export default function HomePage() {

  return (
    <main>
      <Hero />
      <About />
      <Works />
      <Contact />
    </main>
  );
}
