"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

function createWordsArray(paragraph) {
  return paragraph.split(" ").map((word, index) => ({
    text: word,
    className: index === 2 ? "text-blue-500 dark:text-blue-500" : undefined, // Example to add styling conditionally
  }));
}

export function TypewriterEffectSmoothDemo() {
  // const words = [
  //   {
  //     text: "Build",
  //   },
  //   {
  //     text: "awesome",
  //   },
  //   {
  //     text: "apps",
  //   },
  //   {
  //     text: "with",
  //   },
  //   {
  //     text: "Aceternity.",
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  // ];

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
    // {
    //   text: "functional.",
    // },
  ];

  // const paragraph = `Translating design into dynamic, functional web experiences is where I thrive. 
  //   I'm passionate about transforming design systems into responsive, 
  //   web-based environments, leveraging the flexibility of multiple different technologies 
  //   to create sustainable websites with flexible and responsive components.`;

  // const words = createWordsArray(paragraph);
  // console.log(words)

  return (
    (<div className="flex flex-col items-center 
      justify-center max-md:h-[200px] md:h-[30rem]"
      >
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p> */}
      <TypewriterEffectSmooth words={words} />
      {/* <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>)
  );
}