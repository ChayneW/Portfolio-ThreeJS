// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";


// const CircleText = () => {
//   const text = "chayne.dev chayne.dev";
//   const radius = 100; // Adjust this radius as needed
//   const [letters, setLetters] = useState([]);

//   useEffect(() => {
//     // Map each character's position around the circle
//     setLetters(
//       text.split("").map((char, index) => ({
//         char,
//         rotation: index * (360 / text.length), // Spread characters evenly around circle
//       }))
//     );
//   }, [text]);

//   return (
//     <div className="circleContainer">
//       {/* Center image */}
//       <Image
//         src="https://res.cloudinary.com/db8opthjz/image/upload/v1703042739/chaynedev-high-logo-transparent_aescxi.png"
//         alt="Logo"
//         width={150}
//         height={150}
//         className='centerImage'
//       />

//       {/* Circular text */}
//       {letters.map((letter, index) => (
//         <motion.span
//           key={index}
//           className="circularText"
//           style={{
//             transform: `rotate(${letter.rotation}deg) translate(${radius}px) rotate(-${letter.rotation}deg)`,
//           }}
//         >
//           {letter.char}
//         </motion.span>
//       ))}
//     </div>
//   );
// };

// export default CircleText;

// "use client"
// // components/RotatingText.js
// import { motion } from 'framer-motion';

// const CircleText = () => {
//   return (
//     <motion.div
//       className="framer-1vl6nnp-container"
//       initial={{ rotate: 0 }}
//       animate={{ rotate: 360 }}
//       transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//       style={{ width: "100%", height: "100%", position: "relative" }}
//     >
//       <svg
//         className="transform-origin-center-center"
//         viewBox="0 0 100 100"
//         overflow="visible"
//         style={{
//           width: "100%",
//           height: "100%",
//           position: "absolute",
//           inset: 0,
//           transformOrigin: "center center",
//         }}
//       >
//         <path
//           id="curve-wnxkz4"
//           d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
//           strokeWidth="none"
//           fill="transparent"
//         />
//         <text style={{ fontFamily: "Silkscreen, sans-serif", fontSize: "12px" }}>
//           <textPath
//             href="#curve-wnxkz4"
//             startOffset="0"
//             dominantBaseline="Hanging"
//             style={{
//               fontFamily: "Silkscreen, sans-serif",
//               fontSize: "14.5px",
//               fontStyle: "normal",
//               fontWeight: 400,
//               letterSpacing: "0.3em",
//               lineHeight: "1em",
//               fill: "#fff",
//             }}
//           >
//           ✦ Chayne.Dev ✦  Chayne.Dev
//           </textPath>
//         </text>
//       </svg>
//     </motion.div>
//   );
// };

// export default CircleText;
"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const CircleText = () => {
  return (
    <motion.div
      className="circular-text-container"
      style={{
        width: "200px",
        height: "200px",
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
          width={110}
          height={110}
          // style={{ width: "50px", height: "50px" }} // Adjust size as needed
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
        <text style={{ fontFamily: "Silkscreen, sans-serif", fontSize: "12px" }}>
          <textPath
            href="#circlePath"
            startOffset="0"
            dominantBaseline="hanging"
            style={{
              fontSize: "14px", // Adjust size as needed
              letterSpacing: "0.35em", // Adjust spacing as needed
              fill: "#fff",
            }}
          >
            Chayne.Dev ✦ Chayne.Dev ✦
          </textPath>
        </text>
      </motion.svg>
    </motion.div>
  );
};

export default CircleText;

