"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  quote,
  className,
  filter = true,
  duration = 0.5,
  splitQuote = true,
}: {
  quote: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  splitQuote?: boolean;
}) => {
  const [scope, animate] = useAnimate();

  // Split the quote at the first occurrence of "-" if splitQuote is true
  const [beforeDash, afterDash] = splitQuote
    ? quote.split(" - ", 2)
    : [quote, ""];

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, animate, filter, duration]);

  const renderQuote = () => {
    if (!splitQuote) {
      return (
        <motion.div ref={scope}>
          {quote.split(" ").map((word, idx) => (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      );
    }

    return (
      <motion.div ref={scope}>
        {/* Text before "-" */}
        {beforeDash.split(" ").map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black opacity-0"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}

        {/* Text after "-" (including "-") */}
        <motion.span
          className="text-violet-400 opacity-0 italic font-extralight block text-right"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          - {afterDash}
        </motion.span>
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-md sm:text-2xl leading-snug tracking-wide">
          {renderQuote()}
        </div>
      </div>
    </div>
  );
};
