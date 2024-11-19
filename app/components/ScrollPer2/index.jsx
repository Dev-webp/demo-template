'use client';
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';
import './page.css'; // Import the CSS file (only for .main-container)
import About from "@/app/components/About";
import Features from "../Features";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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


const Section1 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP ScrollTrigger animation
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        scale: 1.2,
        rotationX: 90,
        x: -200,
        y: 100,
      },
      {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        x: 0,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%", // Start animation when 80% of the section is visible
          end: "bottom 20%", // End animation when 20% of the section is visible
          scrub: true, // Link animation progress to scroll position
          markers: false, // Remove scroll markers
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="section1 flex justify-center items-center p-10"
    >
      <Features />
    </div>
  );
};



const Section2 = ({ scrollYProgress }) => {
  // Improved animations
  const scale = useTransform(scrollYProgress, [0.5, 1], [0.9, 1]); // Subtle zoom-in effect
  const translateY = useTransform(scrollYProgress, [0.5, 1], [100, 0]); // Slide-up effect
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]); // Fade-in effect

  return (
    <motion.div
      style={{
        scale,
        y: translateY,
        opacity,
        transformOrigin: "center", // Transform centered
      }}
      className="flex justify-center items-center py-20 px-10 bg-gradient-to-b from-gray-200 to-gray-100" // Tailwind classes for layout and background
    >
      <div className="max-w-6xl text-center">
        <About />
      </div>
    </motion.div>
  );
};


