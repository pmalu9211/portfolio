"use client";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="min-h-[calc(80vh)]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut",
        }}
        viewport={{ margin: "-100px", once: true }}
        className="text-4xl md:text-6xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 text-center to-blue-500 mt-4"
      >
        Skillset
      </motion.div>

      {/* bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-violet-400
        dark:via-blue-200 dark:to-violet-400 */}

      <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold w-screen sm:p-10 pr-2 pl-1 mt-6  relative z-20 text-white-200   text-center md:w-9/12 mx-auto py-6">
        Highly comfortable with{" "}
        <span className="shine-effect text-4xl text-blue-300">React</span> ,{" "}
        <span className="shine-effect text-4xl text-blue-600">Next.js</span>,{" "}
        <span className="shine-effect text-4xl text-blue-800">Express</span>,{" "}
        <span className="shine-effect text-4xl text-white">Prisma</span>, and{" "}
        <span className="shine-effect text-4xl text-orange-400">Hono</span>{" "}
        <br />
        <br /> I am very good at{" "}
        <span className="shine-effect text-4xl text-blue-300">C++</span>,{" "}
        <span className="shine-effect text-4xl text-yellow-400">
          JavaScript
        </span>
        , and in{" "}
        <span className="shine-effect text-4xl text-[#3178c6]">TypeScript</span>
        <br /> <br />I can deploy websites using{" "}
        <span className="shine-effect text-4xl text-[#F6821F]">CloudFlare</span>
        , and <span className="shine-effect text-4xl text-[#FF9900]"> AWS</span>
        , and containarize apps using{" "}
        <span className="shine-effect text-4xl text-[#1D63ED]">Docker</span>
      </h1>
      {/* <CloudIcon /> */}
    </div>
  );
};

export default Skills;
