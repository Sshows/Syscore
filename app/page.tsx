import { About } from "@/components/sections/About";
import { Contacts } from "@/components/sections/Contacts";
import { CompanyProfile } from "@/components/sections/CompanyProfile";
import { Directions } from "@/components/sections/Directions";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Operations } from "@/components/sections/Operations";
import { Research } from "@/components/sections/Research";
import { Timeline } from "@/components/sections/Timeline";
import { WhySyscore } from "@/components/sections/WhySyscore";
import { FloatingContact } from "@/components/ui/FloatingContact";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyProfile />
      <WhySyscore />
      <Positioning />
      <Operations />
      <Directions />
      <Research />
      <About />
      <Education />
      <Timeline />
      <Contacts />
      <FloatingContact />
    </>
  );
}
