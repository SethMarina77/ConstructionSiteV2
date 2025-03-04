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

const SECTION_HEIGHT = 200;

const Parallax = () => {
  const containerRef = useRef(null);
  const textBoxRef = useRef(null);


  const scrollToTextBox = () => {
    const containerHeight = containerRef.current.offsetHeight;
    const scrollPosition = containerRef.current.offsetTop + containerHeight * 1;

    // Smooth scroll to that position
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={containerRef}
      id="whyChooseUs"
      className="w-full relative bg-gradient-to-b from-black to-zinc-950" 
      style={{
        height: `${SECTION_HEIGHT}vh`,
      }}
    >
      <ScrollDownButton onClick={scrollToTextBox} />
      <CenterImage containerRef={containerRef} />
      <AdditionalImages containerRef={containerRef} />
      <FillerText containerRef={containerRef} ref={textBoxRef} />
      <ParticleOverlay /> 
    </div>
  );
};

// Down Arrow Button
const ScrollDownButton = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="absolute top-16 left-1/2 transform -translate-x-1/2 z-40 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/30 cursor-pointer"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.button>
  );
};


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
    [0, 0.15, 0.55, 0.65],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.65, 0.75],
    [1.8, 1, 0.7, 0.4, 0.2]
  );

  const rotate = useTransform(scrollYProgress, [0, 0.3], [-5, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 0.7], [0, -30, 300]);

  const perspective = "1000px";
  const rotateX = useTransform(scrollYProgress, [0.4, 0.7], [0, -5]);

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
          backgroundImage: `url("${personBuilding}")`, // Main image
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
      
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

  const opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.65, 0.75],
    [0, 1, 1, 0]
  );

 
  const yImage1 = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.65, 0.75],
    [300, 0, 0, -300]
  );
  const yImage2 = useTransform(
    scrollYProgress,
    [0.33, 0.43, 0.65, 0.75],
    [300, 0, 0, -300]
  );
  const yImage3 = useTransform(
    scrollYProgress,
    [0.36, 0.46, 0.65, 0.75],
    [300, 0, 0, -300]
  );
  const yImage4 = useTransform(
    scrollYProgress,
    [0.39, 0.49, 0.65, 0.75],
    [300, 0, 0, -300]
  );

  // rotation animations
  const rotate1 = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.65, 0.75],
    [10, 0, 0, -5]
  );
  const rotate2 = useTransform(
    scrollYProgress,
    [0.33, 0.43, 0.65, 0.75],
    [-10, 0, 0, 5]
  );
  const rotate3 = useTransform(
    scrollYProgress,
    [0.36, 0.46, 0.65, 0.75],
    [15, 0, 0, -10]
  );
  const rotate4 = useTransform(
    scrollYProgress,
    [0.39, 0.49, 0.65, 0.75],
    [-15, 0, 0, 10]
  );

  //scale animations
  const scale1 = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.65, 0.75],
    [0.5, 1, 1, 0.8]
  );
  const scale2 = useTransform(
    scrollYProgress,
    [0.33, 0.43, 0.65, 0.75],
    [0.5, 1, 1, 0.8]
  );
  const scale3 = useTransform(
    scrollYProgress,
    [0.36, 0.46, 0.65, 0.75],
    [0.5, 1, 1, 0.8]
  );
  const scale4 = useTransform(
    scrollYProgress,
    [0.39, 0.49, 0.65, 0.75],
    [0.5, 1, 1, 0.8]
  );

  return (
    <div className="sticky top-0 w-full h-screen flex items-center justify-center">
      <motion.div
        className="absolute w-64 h-64 top-24 md:right-24"
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
            backgroundImage: `url("${warmBrown}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.7)",
          }}
        >
          <motion.div
            className="absolute inset-0 border-2 border-white border-opacity-0"
            animate={{ borderOpacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute w-64 h-64 top-24 md:left-24"
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
          <motion.div
            className="absolute inset-0 border-2 border-white border-opacity-0"
            animate={{ borderOpacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute w-64 h-64 bottom-32 left-1/4"
        style={{
          opacity,
          y: yImage3,
          rotate: rotate3,
          scale: scale3,
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
          <motion.div
            className="absolute inset-0 border-2 border-white border-opacity-0"
            animate={{ borderOpacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute w-64 h-64 bottom-32 right-1/4"
        style={{
          opacity,
          y: yImage4,
          rotate: rotate4,
          scale: scale4,
          zIndex: 20,
        }}
      >
        <div
          className="w-full h-full rounded-lg shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url("${interior}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.7)",
          }}
        >
          <motion.div
            className="absolute inset-0 border-2 border-white border-opacity-0"
            animate={{ borderOpacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

const FillerText = React.forwardRef(({ containerRef }, ref) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.6, 0.75, 1.0], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0.6, 0.75], [100, 0]);
  const scale = useTransform(scrollYProgress, [0.6, 0.75], [0.8, 1]);

 
  const titleY = useTransform(scrollYProgress, [0.6, 0.7], [50, 0]);
  const descY = useTransform(scrollYProgress, [0.65, 0.75], [50, 0]);
  const ctaY = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);

  
  const titleOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const descOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  return (
    <motion.div
      ref={ref}
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
          Why Choose Us?
        </motion.h2>

        <motion.div
          className="text-base text-gray-200 space-y-4"
          style={{ y: descY, opacity: descOpacity }}
        >
          <p>
            Building your dream home or next big project is a huge
            investment—trust the experts who bring quality, reliability, and
            craftsmanship to every build. Our team is committed to delivering
            top-tier construction with precision and care, ensuring your vision
            becomes a reality.
          </p>

          <div className="flex items-start">
            <span className="mr-3">✅</span>
            <div>
              <span className="font-semibold">Unmatched Quality</span> – We use
              the best materials and expert craftsmanship to create lasting
              structures.
            </div>
          </div>

          <div className="flex items-start">
            <span className="mr-3">✅</span>
            <div>
              <span className="font-semibold">
                Reliability You Can Count On
              </span>{" "}
              – On-time, on-budget, and built to last.
            </div>
          </div>

          <div className="flex items-start">
            <span className="mr-3">✅</span>
            <div>
              <span className="font-semibold">Tailored to Your Needs</span> –
              Every project is customized to fit your style, needs, and goals.
            </div>
          </div>

          <div className="flex items-start">
            <span className="mr-3">✅</span>
            <div>
              <span className="font-semibold">Commitment to Excellence</span> –
              We take pride in our work, guaranteeing satisfaction every step of
              the way.
            </div>
          </div>
        </motion.div>

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
});

export default Parallax;
