import AboutMe from "@/components/aboutme";
import { LampDemo } from "@/components/functional/LampDemo";
import Hero from "@/components/hero";
import { SignupFormDemo } from "@/components/signup";
import Skills from "@/components/skills";
import ThreeDCards from "@/components/threedcards";
import IconCloud from "@/components/ui/skills";

export default function Home() {
  console.log(`pratham is rendered twice}`);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto  text-white overflow-hidden">
      <Hero />

      <div className="w-full relative lg:-top-16 " id="work">
        <LampDemo />
        <div className="relative -top-44">
          <ThreeDCards />
        </div>
      </div>
      <div
        className=" flex justify-center relative z-50 ml-4 bg-black-100 h-full w-full mb-20"
        id="aboutMe"
      >
        <AboutMe />
      </div>

      <div
        className=" flex justify-center relative z-50 ml-4 bg-black-100 h-full w-full mt-10"
        id="skills"
      >
        <Skills />
      </div>
      <div className="relative z-30 w-full h-full top mb-32  md:mb-44">
        <IconCloud
          iconSlugs={[
            "typescript",
            "javascript",
            "java",
            "react",
            "html5",
            "css3",
            "nodedotjs",
            "express",
            "nextdotjs",
            "prisma",
            "amazonaws",
            "postgresql",
            "nginx",
            "vercel",
            "docker",
            "git",
            "github",
            "visualstudiocode",
            "mongodb",
            "postgresql",
            "mongoose",
            "amazonec2",
            "python",
            "numpy",
            "pandas",
            "mysql",
            "shell",
            "bootstrap",
            "c",
            "cplusplus",
            "linuxmint",
            "npm",
            "redux",
            "recoil",
            "tailwindcss",
            "nodemon",
            "cloudflare",
            "jwt",
            "jsonwebtokens",
            "nginx",
            "zod",
            "hono",
            "turborepo",
            "vite",
            "cloudflareworkers",
            "postman",
          ]}
        ></IconCloud>
      </div>

      <div className="min-w-screen min-h-full " id="contact">
        <SignupFormDemo />
      </div>
    </main>
  );
}
