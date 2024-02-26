import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


const words = `I am an incredible developer. Your reading this? That means that it's working. I should hire this guy. I really have no idea what to put on this website.`

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
          <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Login",
      link: "/login",
      icon: (
          <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  const wordstype = [
    {
      text: "Lets",
    },
    {
      text: "make",
    },
    {
      text: "some",
    },
    {
      text: "apps",
      className: "text-blue-500 dark:text-blue-500"
    },
      ];

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Epicliem
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Full-Stack Developer in High School
          </p>
        </WavyBackground>
        <TextGenerateEffect words={words} className={"w-1/2"}/>
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
            Let me help you
          </p>
          <TypewriterEffectSmooth words={wordstype}/>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <button
                className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Contact Me
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              More Info
            </button>
          </div>
        </div>
      </main>
  );
}
