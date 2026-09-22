import { About } from "@/components/sections/About";
import { Contacts } from "@/components/sections/Contacts";
import { CompanyProfile } from "@/components/sections/CompanyProfile";
import { Directions } from "@/components/sections/Directions";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Terminal } from "@/components/sections/Terminal";
import { ThreatMap } from "@/components/sections/ThreatMap";
import { FloatingContact } from "@/components/ui/FloatingContact";

export default function Home() {
  return (
    <>
      <Hero />
      <ThreatMap />
      <Terminal />
      <Positioning />
      <Directions />
      <About />
      <CompanyProfile />
      <Education />
      <Contacts />
      <FloatingContact />
    </>
  );
}
