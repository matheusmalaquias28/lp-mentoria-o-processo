import { Motion } from "@/components/motion/Motion";
import { Hero } from "@/components/sections/Hero";
import { WhatIs } from "@/components/sections/WhatIs";
import { WhyQuit } from "@/components/sections/WhyQuit";
import { Method } from "@/components/sections/Method";
import { Mentor } from "@/components/sections/Mentor";
import { ForWho } from "@/components/sections/ForWho";
import { Deliverables } from "@/components/sections/Deliverables";
import { Trail } from "@/components/sections/Trail";
import { Executors } from "@/components/sections/Executors";
import { Offer } from "@/components/sections/Offer";
import { Faq, Final, Fit, Footer } from "@/components/sections/Closing";
import { StickyCta } from "@/components/sections/StickyCta";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhatIs />
        <WhyQuit />
        <Method />
        <Mentor />
        <ForWho />
        <Deliverables />
        <Trail />
        <Executors />
        <Offer />
        <Fit />
        <Faq />
        <Final />
      </main>
      <Footer />
      <StickyCta />
      <Motion />
    </>
  );
}
