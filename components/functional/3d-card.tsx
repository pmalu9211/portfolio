"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Link from "next/link";

export function ThreeDCard({
  name,
  image,
  description,
  stack,
  link,
}: {
  name: string;
  image: string;
  description: string;
  stack: {
    id: number;
    name: string;
    image: string;
  }[];
  link: string;
}) {
  return (
    <CardContainer className="sm:w-[60%] sm:h-[60%] md:w-[50%] md:h-[50%] -top-24">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-[calc(100%)] rounded-3xl p-6 border  ">
        <CardItem
          translateZ="10"
          className="text-3xl font-bold text-neutral-600 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="20"
          className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="30" className="w-full mt-4">
          <Image
            unoptimized
            src={image}
            height="1000"
            width="1000"
            className=" h-60 sm:h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={1}
            className="sm:px-4 sm:py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <div className="flex flex-row items-center justify-center w-[calc(100%)]">
              <AnimatedTooltip items={stack} />
            </div>
          </CardItem>
          <CardItem translateZ={20} as="button" className="">
            <Link
              className="sm:px-4 sm:py-3 py-2 px-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold sm:text-lg text-sm"
              href={link}
            >
              Learn More
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
