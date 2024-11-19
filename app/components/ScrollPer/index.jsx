'use client';
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';
import './page.css'; // Import the CSS file
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -0]);
  const transformOrigin = "center"; // Ensures scaling happens from the center

  return (
    <motion.div style={{
      scale,
      rotate,
      transformOrigin, // Apply transform origin to center the scaling
    }} >
      
      <Features/>
    </motion.div>
  );
}

const Section2 = ({ scrollYProgress }) => {
  // Adding a skew effect, translate, and opacity for a more dynamic animation
  const scale = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.5, 1], [10, 0]); // Skew-like rotation
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0.5, 1], [50, 0]);

  return (
    <motion.div
      style={{
        scale,
        rotate,
        opacity,
        y: translateY, // Translate along Y-axis
        transformOrigin: "center", // Scale and rotate around the center
      }}
      className="section2-container" // Optional for additional styling
    >
      <About />
    </motion.div>
  );
};



      {/* <p>Scroll Perspective</p>
      <div className="section1-content">
        <p>Section</p>
        <div className="image-container">
          <Image
            src={Pic1}
            alt="img"
            placeholder="blur"
            fill
          />
        </div>
        <p>Transition</p>
      </div> */}

      {/* <Image
        src={Pic2}
        alt="img"
        placeholder="blur"
        fill
      /> */}