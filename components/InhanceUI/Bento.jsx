"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import My3DCanvas from "./Spaceman";
import CircleText from "./CircleText";
// import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";


export const RevealBento = () => {
  return (
    // <div className="min-h-screen px-4 py-12 text-zinc-50">
    //   <Logo />
    //   <div
    //     initial="initial"
    //     animate="animate"
    //     transition={{
    //       staggerChildren: 0.05,
    //     }}
    //     className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
    //   >
    //     <HeaderBlock />
    //     <SocialsBlock />
    //     <AboutBlock />
    //   </div>
    //   <Footer />
    // </div>

    // <div className="min-h-screen px-4 py-12 text-zinc-50">
    //   <Logo />
    //   <div className="relative mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
    //     <HeaderBlock />
    //     <div className="flex justify-center px-auto w-[400px] h-[500px]">
    //       <My3DCanvas /> {/* Replacing SocialsBlock with 3D Canvas */}
    //     </div>
    //     <AboutBlock />
    //   </div>
    //   <Footer />
    // </div>

 <div className="min-h-screen px-4 py-12 text-zinc-50 grid lg:flex lg:flex-col items-center">
  {/* <Logo /> */}
  {/* <CircleText/>*/}

  {/* <div className="py-10 w-full grid justify-center">
    <div 
      style={{ width: "200px", height: "200px"}}>
      <CircleText />
    </div>
  </div> */}

  {/* <div className="mx-auto grid grid-cols-2 gap-4 w-full">
    <HeaderBlock />
    <div className="max-lg:hidden lg:block">
      <My3DCanvas /> 
    </div>
    <div className="max-lg:block lg:hidden">
      <div className="relative h-[300px] w-[350px]">

        <Image
          src="/photos/michael-demarco-original.jpg"
          fill
          style={{objectFit: "cover"}}
        />
      </div>
    </div>
    <AboutBlock />
  </div> */}

  <div className="mx-auto grid w-full">
    <div className="grid lg:grid-cols-2 gap-4 w-full px-5">
      <div className="">
        <HeaderBlock/>
      </div>

      <div>
        <div className="max-md:hidden md:block">
          <My3DCanvas /> 
        </div>

        <div className="max-md:block md:hidden py-10">
          <div className="relative h-[300px] w-[100%]">
            <Image
              className="rounded-lg"
              src="/photos/michael-demarco-original.jpg"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </div>
      </div>

    </div>

    <div className="md:pt-20 px-5">
      <AboutBlock/>
    </div>
  </div>

   
  <div className="py-20 w-full grid justify-center">
    <div className="py-10">
      <CircleText size={200} textSize={14} textContent="Chayne.Dev ✦ Chayne.Dev ✦" />
    </div>
  </div>

</div> 
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <div
    //   variants={{
    //     initial: {
    //       scale: 0.5,
    //       y: 50,
    //       opacity: 0,
    //     },
    //     animate: {
    //       scale: 1,
    //       y: 0,
    //       opacity: 1,
    //     },
    //   }}
    //   transition={{
    //     type: "spring",
    //     mass: 3,
    //     stiffness: 400,
    //     damping: 50,
    //   }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 lg:h-[90%]">
    {/* <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    /> */}

    <Image
      className="mb-4 size-14 rounded-full"
      src={"/photos/logo/profile-pic.jpg"}
      width={50}
      height={50}
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Chayne.{" "}
      <span className="text-zinc-400">
        I build cool websites like this one.
      </span>
    </h1>
    <a
      href="mailto:chaynesinghwhite@gmail.com?subject=Hello&body=Loving the style?"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      // whileHover={{
      //   rotate: "2.5deg",
      //   scale: 1.1,
      // }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* <SiYoutube /> */}
      </a>
    </Block>
    <Block
      while={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* <SiGithub /> */}
      </a>
    </Block>
    <Block
      // whileHover={{
      //   rotate: "-2.5deg",
      //   scale: 1.1,
      // }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        {/* <SiTiktok /> */}
      </a>
    </Block>
    <Block
      while={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* <SiTwitter /> */}
      </a>
    </Block>
  </>
);//Hover

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it.
      </span>
    </p>
  </Block>
);
const DescBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      {/* <p className="text-center text-zinc-400">
        <a href="#" className="text-red-300 hover:underline">
          @tomisloading
        </a>
      </p> */}
    </footer>
  );
};


