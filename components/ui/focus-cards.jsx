"use client";;
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
      <Link 
        href={card.projLink}
        target="_blank"
      >
      <Image
        // src={card.src}
        src={card.images}
        // src={'projects'}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
        priority 
      />
      {/* <video 
        // ref={videoRef}
        className="object-cover absolute inset-0"
        autoPlay 
        muted
        preload='auto' 
        playsInline
        loop
        src={card.video}
        // onError={handleVideoError}
      >
        <source src={card.video} type="video/mp4" />
        Your Browser doesn&apos;t support Video Tag.
      </video> */}


      {/* Adjusted div for overlay behavior on small screens */}
      {/* <div
        className={cn(
          "absolute inset-0 flex items-end py-8 px-4 transition-opacity duration-300",
          "bg-black/60 md:bg-black/50",  // Lighter overlay on mobile, darker on larger screens
          hovered === index ? "opacity-100" : "md:opacity-0 max-sm:opacity-60"  // Hover reveals text on larger screens, keeps text on mobile
        )}
      > */}

      <div
        className={cn(
          "absolute inset-0 flex items-end py-8 px-4 transition-opacity duration-300",
          "bg-[rgba(0,0,0,0.3)] md:bg-[rgba(0,0,0,0.5)]",  // Background transparency instead of opacity
          hovered === index ? "opacity-100" : "md:opacity-0" // Hover reveals overlay on larger screens
        )}
      >
          
      {/* <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}> */}

        <div
          // className="text-base sm:text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          className={cn("text-contain",
            "text-base sm:text-xl md:text-2xl font-medium",
            "text-white",                  // White text for all screens
            "max-md:text-white"            // Ensures full white on smaller screens
          )}
        >
          <div>
            {card.title}
          </div>

          <br></br>

          <div className="">
            <div>
              <h3>Tech:</h3>
              <p className="text-sm">{card.tech}</p>
            </div>
            <br></br>
            <div>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>

        </div>
      </div>
    </Link>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    (<div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} />
      ))}
    </div>)
  );
}
