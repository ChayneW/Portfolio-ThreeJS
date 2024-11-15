'use client'
import React, {useState, useEffect, use} from "react";
import { motion, AnimatePresence } from "framer-motion";

export const RevealLinks = () => {
  return (
    // <section className="grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black">
    <section className="grid place-content-center gap-2 bg-[#e0e0dc] px-8 py-24 text-black">
      <FlipLink href="https://github.com/ChayneW">Github</FlipLink>
      <FlipLink href="https://twitter.com/CswAutomation">Twitter</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/chayne-s-white/">Linkedin</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;
const INTERVAL = 3;
const CYCLE_INTERVAL = 5000;

export const FlipLink = ({ children, href }) => {

  return (
    // <a
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            // <span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
            style={{
              textShadow: "0px 0px 2px #fff, 1px 1px 2px #fff", // White outline effect
            }}
          >
            {l}
            </motion.span>
        // </span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
        // <span
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
            style={{
              textShadow: "0px 0px 2px #fff, 5px 5px 6px #fff", // White outline effect
            }}
          >
            {l}
          </motion.span>
          // </span>
        ))}
      </div>
    </motion.a>
    // </a>
  );
};


export const FlipLinkAuto = ({ textArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, CYCLE_INTERVAL);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [textArray.length]);

  const currentText = textArray[currentIndex];

  return (
    <div className="relative block overflow-hidden
      whitespace-nowrap text-white text-3xl font-black uppercase 
      sm:text-4xl md:text-5xl lg:text-7xl"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentText} // Framer Motion needs a unique key to recognize element changes
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative"
          style={{
            lineHeight: 0.75,
          }}
        >
          <div>
            {currentText.split("").map((l, i) => (
              <motion.span
                key={i}
                variants={{
                  initial: { y: "100%" },
                  animate: { y: "0%" },
                  exit: { y: "-100%" },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
              >
                {l === " " ? "\u00A0" : l} {/* Preserve space as non-breaking space */}
              </motion.span>
            ))}
          </div>
          <div className="absolute inset-0">
            {currentText.split("").map((l, i) => (
              <motion.span
                key={i}
                variants={{
                  initial: { y: "-100%" },
                  animate: { y: "0%" },
                  exit: { y: "100%" },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
              >
                {l === " " ? "\u00A0" : l}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};



// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const DURATION = 0.25;
// const INTERVAL = 3000; // Adjust cycle interval as needed


export const PageDroppingText = ({ fontSize, children }) => {
  const DURATION = 0.25;
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      // className={`relative block overflow-hidden whitespace-nowrap
      // ${fontSize[0]} sm:${fontSize[1]} md:${fontSize[2]}`}
      className={`relative block overflow-hidden whitespace-nowrap
      ${fontSize[0]} sm:${fontSize[1]} md:${fontSize[2]}`}
      style={{
        lineHeight: 1,
      }}
    >
      {/* Top layer for hover-up effect */}
      <div className="absolute inset-0">
        <motion.div
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {children}
        </motion.div>
      </div>

      {/* Bottom layer for hover-down effect */}
      <div>
        <motion.div
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};
