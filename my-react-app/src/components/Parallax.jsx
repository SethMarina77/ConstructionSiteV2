import React, { useRef } from "react";
import personBuilding from "../construction pictures/building.jpg";
import warmBrown from "../construction pictures/warmBrownInterior.jpg";
import tools1 from "../construction pictures/tools1.jpg";
import tools2 from "../construction pictures/tools2.jpg";
import interior from "../construction pictures/interior.jpg";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const SECTION_HEIGHT = 200; // Compact section for faster animation

const Parallax = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      id="whyChooseUs"
      className="w-full relative bg-gradient-to-b from-black to-zinc-950" // Subtle gradient background
      style={{
        height: `${SECTION_HEIGHT}vh`,
      }}
    >
      <CenterImage containerRef={containerRef} />
      <AdditionalImages containerRef={containerRef} />
      <FillerText containerRef={containerRef} />
      <ParticleOverlay /> {/* Added particle effect */}
    </div>
  );
};

// Decorative particle overlay for added energy
const ParticleOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-30">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

const CenterImage = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.65, 0.75],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.75],
    [1.8, 1, 0.7, 0.4]
  );
  const rotate = useTransform(scrollYProgress, [0, 0.3], [-5, 0]); 
  const y = useTransform(scrollYProgress, [0, 0.6, 0.8], [0, -30, 300]); 

 
  const perspective = "1000px";
  const rotateX = useTransform(scrollYProgress, [0.4, 0.6], [0, -5]);

  return (
    <motion.div
      className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center"
      style={{ opacity, perspective }}
    >
      <motion.div
        className="w-3/4 h-3/4 rounded-xl shadow-2xl overflow-hidden border-white border-4"
        style={{
          scale,
          y,
          rotateZ: rotate,
          rotateX,
          backgroundImage: `url("${warmBrown}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Glare effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0"
          animate={{
            opacity: [0, 0.2, 0],
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const AdditionalImages = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // More energetic entrance and exit
  const opacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.75, 0.85],
    [0, 1, 1, 0]
  );

  // Staggered entrances with different directions and timings
  const yImage1 = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.75, 0.85],
    [300, 0, 0, -300]
  );
  const yImage2 = useTransform(
    scrollYProgress,
    [0.35, 0.55, 0.75, 0.85],
    [300, 0, 0, -300]
  );
  const yImage3 = useTransform(
    scrollYProgress,
    [0.4, 0.6, 0.75, 0.85],
    [300, 0, 0, -300]
  );

  // Add some rotation for more energy
  const rotate1 = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.75, 0.85],
    [10, 0, 0, -5]
  );
  const rotate2 = useTransform(
    scrollYProgress,
    [0.35, 0.55, 0.75, 0.85],
    [-10, 0, 0, 5]
  );
  const rotate3 = useTransform(
    scrollYProgress,
    [0.4, 0.6, 0.75, 0.85],
    [15, 0, 0, -10]
  );

  // Scale animations for added punch
  const scale1 = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.75, 0.85],
    [0.5, 1, 1, 0.8]
  );
  const scale2 = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.75, 0.85],
    [0.5, 1, 1, 0.8]
  );
  const scale3 = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.75, 0.85],
    [0.5, 1, 1, 0.8]
  );

  return (
    <div className="sticky top-0 w-full h-screen flex items-center justify-center">
      {/* Right image */}
      <motion.div
        className="absolute w-72 h-72 top-1/4 md:right-10"
        style={{
          opacity,
          y: yImage1,
          rotate: rotate1,
          scale: scale1,
          zIndex: 20,
        }}
      >
        <div
          className="w-full h-full rounded-lg shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url("${tools1}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.7)",
          }}
        >
          {/* Inner glow effect */}
          <motion.div
            className="absolute inset-0 border-2 border-white border-opacity-0"
            animate={{ borderOpacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Left image */}
      <motion.div
        className="absolute w-72 h-72 top-1/3 md:left-10"
        style={{
          opacity,
          y: yImage2,
          rotate: rotate2,
          scale: scale2,
          zIndex: 20,
        }}
      >
        <div
          className="w-full h-full rounded-lg shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url("${tools2}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.7)",
          }}
        >
          {/* Inner glow effect */}
          <motion.div
            className="absolute inset-0 border-2 border-white border-opacity-0"
            animate={{ borderOpacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Bottom image */}
      <motion.div
        className="absolute w-72 h-72 top-2/3 left-1/3"
        style={{
          opacity,
          y: yImage3,
          rotate: rotate3,
          scale: scale3,
          zIndex: 20,
        }}
      >
        <div
          className="w-full h-full rounded-lg shadow-lg overflow-hidden "
          style={{
            backgroundImage: `url("${interior}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.7)",
          }}
        >
          {/* Inner glow effect */}
          <motion.div
            className="absolute inset-0 border-2 border-white border-opacity-0"
            animate={{ borderOpacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

// Enhanced filler text with more dynamic entrance
const FillerText = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Text appears with more dramatic timing
  const opacity = useTransform(scrollYProgress, [0.7, 0.85, 0.95], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0.7, 0.85], [100, 0]);
  const scale = useTransform(scrollYProgress, [0.7, 0.85], [0.8, 1]);

  // Text elements fly in staggered
  const titleY = useTransform(scrollYProgress, [0.7, 0.82], [50, 0]);
  const descY = useTransform(scrollYProgress, [0.75, 0.87], [50, 0]);
  const ctaY = useTransform(scrollYProgress, [0.8, 0.92], [50, 0]);

  // Title opacity animation
  const titleOpacity = useTransform(scrollYProgress, [0.7, 0.82], [0, 1]);
  const descOpacity = useTransform(scrollYProgress, [0.75, 0.87], [0, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0.8, 0.92], [0, 1]);

  return (
    <motion.div
      className="sticky top-0 w-full h-screen flex items-center justify-center z-30"
      style={{ opacity }}
    >
      <motion.div
        className="text-center p-8 max-w-3xl bg-zinc-900/60 rounded-xl backdrop-blur-md border border-zinc-700"
        style={{ y, scale }}
        initial={{ boxShadow: "0 0 0 rgba(255, 255, 255, 0)" }}
        animate={{
          boxShadow: [
            "0 0 0 rgba(255, 255, 255, 0)",
            "0 0 30px rgba(255, 255, 255, 0.3)",
            "0 0 0 rgba(255, 255, 255, 0)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <motion.h2
          className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          Why Us?
        </motion.h2>

        <motion.p
          className="text-xl text-gray-200 mb-6"
          style={{ y: descY, opacity: descOpacity }}
        >
          Building your dream home or next big project is a huge
          investment—trust the experts who bring quality, reliability, and
          craftsmanship to every build. Our team is committed to delivering
          top-tier construction with precision and care, ensuring your vision
          becomes a reality. ✅ Unmatched Quality – We use the best materials
          and expert craftsmanship to create lasting structures. ✅ Reliability
          You Can Count On – On-time, on-budget, and built to last. ✅ Tailored
          to Your Needs – Every project is customized to fit your style, needs,
          and goals. ✅ Commitment to Excellence – We take pride in our work,
          guaranteeing satisfaction every step of the way. Let’s build something
          amazing together. Contact us today to get started!
        </motion.p>

        <motion.div style={{ y: ctaY, opacity: ctaOpacity }}>
          <motion.button
            className="px-6 py-3 bg-white text-zinc-900 rounded-full font-semibold transition"
            whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Parallax;
