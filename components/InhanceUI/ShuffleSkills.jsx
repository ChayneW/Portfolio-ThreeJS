"use client"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";


const ShuffleHero = () => {
  return (
    <section className="w-full px-8 max-md:py-32 md:py-60 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Better every day, is the goal
        </span>
        <h3 className="text-black text-4xl md:text-6xl font-semibold">
          Every creator has their own tool set
        </h3>
        {/* <p className="text-base md:text-lg text-slate-700 my-4 md:my-6"> */}
        <p className="text-black text-base md:text-lg my-4 md:my-6">
          Here&apos;s a few of my favorite tools.
        </p>
        {/* <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"> */}
        {/* <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all active:scale-95">
          Find a class
        </button> */}
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// const generateSquareData = () => {
//   return imgArray.map((img, index) => ({
//     id: index + 1,         // Generate unique id
//     src: img,              // Use the imported image paths as the src
//   }));
// };

const squareData = [
  {
    id: 1,
    // src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    src: "/skill-folder/openai.svg",
    // src: chat,
  },
  {
    id: 2,
    // src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    src: "/skill-folder/cypress.svg",
  },
  {
    id: 3,
    // src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    src: "/skill-folder/selenium.svg",
  },
  {
    id: 4,
    // src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    src: "/skill-folder/supabase-icon.svg",
  },
  {
    id: 5,
    // src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    src: "/skill-folder/postman-icon.svg",
  },
  {
    id: 6,
    // src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    src: "/skill-folder/js.svg",
  },
  {
    id: 7,
    // src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    src: "/skill-folder/html.svg",
  },
  {
    id: 8,
    // src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    src: "/skill-folder/nextjs.svg",
  },
  {
    id: 9,
    // src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    src: "/skill-folder/python-img.png",
  },
  {
    id: 10,
    // src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    src: "/skill-folder/terminal-bash.svg",
  },
  {
    id: 11,
    // src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    src: "/skill-folder/azure.svg",
  },
  {
    id: 12,
    // src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
    src: "/skill-folder/github.svg",
  },
  {
    id: 13,
    // src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    src: "/skill-folder/c-sharp.svg",
  },
  {
    id: 14,
    // src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    src: "/skill-folder/dotnet.svg",
  },
  {
    id: 15,
    // src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
    src: "/skill-folder/mongodb.svg",
  },
  {
    id: 16,
    // src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
    src: "/skill-folder/firebase.png",
  },
];
// console.log(squareData)

const generateSquares = () => {
  // const squareData = generateSquareData()
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full relative rounded-lg"
      // style={{
      //   backgroundImage: `url(${sq.src})`,
      //   backgroundSize: "contain",
      // }}
    >
      <Image
        className="py-2"
        src={sq.src}
        // height={100}
        // width={100}
        alt="icon"
        fill
        style={{objectFit: "contain"}}
      />
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;