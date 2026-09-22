import { About } from "@/components/sections/About";
import { Contacts } from "@/components/sections/Contacts";
import { Directions } from "@/components/sections/Directions";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <Directions />
      <About />
      <Education />
      <Contacts />
    </>
  );
}
