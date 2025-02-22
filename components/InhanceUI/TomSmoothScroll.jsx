import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import Image from "next/image";
import MotionElement from "./MotionElement";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
    {/* // <div className="bg-[#e0e0dc]"> */}
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        {/* <Nav /> */}
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <SiSpacex className="text-3xl mix-blend-difference" />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      {/* <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" /> */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      // className="sticky top-0 h-screen w-full"
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        // backgroundImage:
        //   "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        // backgroundImage:
        //   "url(/photos/alex-knight.jpg)",
        backgroundImage:
          "url(/photos/neon-store.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 md:pt-[200px]">
      <ParallaxImg
        // src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="/photos/rainy-day.jpg"
        src="/photos/moujib.jpg"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        // src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="/photos/cash-macanaya-ndtVFSIu68I-unsplash.jpg"
        
        src="/photos/rainy-day.jpg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3 h-1/3"
      />
      <ParallaxImg
        // src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        src="/photos/fukayamamo.jpg"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        // src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        src="/photos/michael-demarco-original.jpg"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="max-md:hidden md:block ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id=""
      // className="mx-auto max-w-5xl px-4 py-28 text-white"
      className="mx-auto max-w-8xl px-4 py-[100px] text-white"
    >
      {/* <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        // className="mb-20 text-4xl font-black uppercase text-zinc-50"
        className="mb-20 px-10 md:px-20 text-4xl text-zinc-50
        max-md:text-4xl md:max-lg:text-4xl 
        lg:text-7xl"
      >
        Whether in South Florida or elsewhere, I am crafting
        digital experiences and innovative web/software development solutions for
        brands, companies and your next big idea.
      </motion.h1> */}

      <MotionElement
        as="h1"
        className="mb-20 px-10 md:px-20 text-4xl text-zinc-50 max-md:text-4xl md:max-lg:text-4xl lg:text-7xl"
      >
        Whether in South Florida or elsewhere, I am crafting digital experiences and innovative web/software development solutions for brands, companies, and your next big idea.
      </MotionElement>

      {/* <MotionElement
        as="p"
        className="mb-4 text-lg text-gray-300"
      >
        This is a sample paragraph that uses the same animation properties.
      </MotionElement> */}

      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-9 flex items-center border-t justify-between border-zinc-800 px-3 pb-9 pt-20"
      >
        <div className="w-full pt-30 py-10 px-10 lg:px-20
          grid lg:grid-cols-2 self-center max-md:gap-10"
        >
          <div className="grid max-lg:order-last frontend-text items-center justify-between text-xl">
            <BubbleText/>
          </div> 

          <div className="grid max-lg:order-first justify-center max-lg:pb-10">
            <Image
              className="max-md:hidden md:block rounded-2xl"
              src={"/photos/logo/profile-pic.jpg"}
              width={250}
              height={250}
            />
            <Image
              className="max-md:block md:hidden rounded-2xl"
              src={"/photos/logo/profile-pic.jpg"}
              width={180}
              height={180}
            />
          </div> 
        </div>
      </motion.div>
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300" style={{fontSize: "2rem"}}>
      {/* {"Bubbbbbbbble text".split("").map((child, idx) => (
        <span className={"hoverText"} key={idx}>
          {child}
        </span>
      ))} */}
      {
      `Hello, My name is Chayne and I'm a Python/Web Developer from South Florida. My passion is Web Development and help transform designs from extraordinary minds into real life! I'm dedicated to crafting captivating online experiences that captivate users and elevate brands.
              Join me on a journey where innovation meets impact.`.split("").map((child, idx) => (
        <span className={"hoverText"} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};