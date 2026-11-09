import Image from "next/image";
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
        {/* símbolo de vidro invadindo a hero e a seção seguinte, colado na borda direita (só desktop) */}
        <div aria-hidden className="pointer-events-none relative z-20 hidden h-0 lg:block">
          <div className="absolute top-0 right-0 w-[clamp(13rem,17vw,19rem)] -translate-y-1/2">
            <div className="float [--float:-14px]" style={{ animationDuration: "7s" }}>
              <Image
                src="/simbolo.webp"
                alt=""
                width={640}
                height={749}
                sizes="19rem"
                className="h-auto w-full rotate-[14deg] drop-shadow-[0_30px_50px_rgb(232_20_28/0.35)]"
              />
            </div>
          </div>
        </div>
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
