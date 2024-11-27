"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

function createWordsArray(paragraph) {
  return paragraph.split(" ").map((word, index) => ({
    text: word,
    className: index === 2 ? "text-blue-500 dark:text-blue-500" : undefined, // Example to add styling conditionally
  }));
}

export function TypewriterEffectSmoothDemo() {

  const words = [
    {
      text: "Translating",
    },
    {
      text: "design",
    },
    {
      text: "into",
    },
    {
      text: "dynamic",
    },
    {
      text: "experiences",
    },
    {
      text: "is",
    },
    {
      text: "where",
    },
    {
      text: "I",
    },
    {
      text: "thrive.",
    },
  ];

  return (
    (<div className="flex flex-col items-center w-full px-auto
      justify-center max-md:h-[200px] md:h-[30rem]"
      >
      <TypewriterEffectSmooth words={words} />
    </div>)
  );
}
