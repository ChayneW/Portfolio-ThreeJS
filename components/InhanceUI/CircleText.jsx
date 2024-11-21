"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CircleText = ({ size = 200, textSize = 14, textContent = "Chayne.Dev ✦ Chayne.Dev ✦" }) => {
  return (
    <motion.div
      className="circular-text-container"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Centered logo that does not rotate */}
      <div
        className="center-logo"
        style={{
          position: "absolute",
          zIndex: 1, // Ensure it stays above the rotating text
        }}
      >
        <Image
          src="/logo-white.png"
          alt="Logo"
          width={size * 0.55} // Adjust logo size relative to component size
          height={size * 0.55}
        />
      </div>

      {/* Circular rotating text */}
      <motion.svg
        viewBox="0 0 100 100"
        overflow="visible"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: "0",
        }}
        animate={{ rotate: 360 }} // Rotate the text
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <path
          id="circlePath"
          d="M 0 50 A 50 50 0 1 1 100 50 A 50 50 0 1 1 0 50"
          fill="transparent"
        />
        <text style={{ fontFamily: "Silkscreen, sans-serif", fontSize: `${textSize}px` }}>
          <textPath
            href="#circlePath"
            startOffset="0"
            dominantBaseline="hanging"
            style={{
              fontSize: `${textSize}px`, // Adjust text size
              letterSpacing: "0.35em", // Adjust spacing as needed
              fill: "#fff",
            }}
          >
            {textContent}
          </textPath>
        </text>
      </motion.svg>
    </motion.div>
  );
};

export default CircleText;
