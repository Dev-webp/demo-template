'use client';
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';
import './page.css'; // Import the CSS file (only for .main-container)
import About from "@/app/components/About";
import Features from "../Features";

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="main-container">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {
  // New transformation styles
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -200]); // Horizontal slide
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]); // Zoom-in effect
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 15]); // 3D tilt effect
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]); // Slight fade-out

  return (
    <motion.div
      style={{
        x: translateX,
        scale,
        rotateY,
        opacity,
        transformOrigin: "center", // Ensures effects are smooth
        perspective: 1000, // Enhances 3D effect
      }}
      className="flex justify-center items-center py-20 px-10 bg-blue-50"
    >
      <div className="max-w-4xl text-center">
        <Features />
      </div>
    </motion.div>
  );
};


const Section2 = ({ scrollYProgress }) => {
  // New transformation styles for dynamic transitions
  const translateY = useTransform(scrollYProgress, [0, 1], [300, 0]); // Smooth slide-up motion
  const rotateX = useTransform(scrollYProgress, [0.3, 1], [-15, 0]); // Subtle tilt on X-axis
  const opacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]); // Fade-in effect
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]); // Background reveal

  return (
    <motion.div
      style={{
        y: translateY,
        rotateX,
        opacity,
        transformOrigin: "center",
        background: `rgba(255, 255, 255, ${backgroundOpacity})`,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Dynamic shadow for depth
        borderRadius: "15px",
      }}
      className="flex justify-center items-center py-20 px-10"
    >
      <motion.div
        whileHover={{
          scale: 1.1, // Pop-out effect by increasing size
          boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.4)", // Stronger shadow for depth
          transition: {
            duration: 0.3,
            ease: "easeOut", // Smooth and quick transition for pop-out effect
          },
        }}
        className="max-w-6xl text-center bg-gradient-to-bl from-blue-100 via-white to-gray-100 p-10 rounded-xl shadow-lg"
      >
        <div>
          <About />
        </div>
      </motion.div>
    </motion.div>
  );
};

