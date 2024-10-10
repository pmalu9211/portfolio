"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { BiPhone, BiUser } from "react-icons/bi";
import { RiSuitcase3Line, RiToolsFill } from "react-icons/ri";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Work",
      link: "https://www.prathamalu.xyz/#work",
      icon: (
        <RiSuitcase3Line className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "About",
      link: "https://www.prathamalu.xyz/#aboutMe",
      icon: <BiUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skillset",
      link: "https://www.prathamalu.xyz/#skills",
      icon: (
        <RiToolsFill className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

    {
      name: "Contact",
      link: "https://www.prathamalu.xyz/#contact",
      icon: <BiPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
