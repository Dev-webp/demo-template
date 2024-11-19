'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import './page.css'; // Import custom styles
import Features from "../Features"; // Assuming Features is your desired component
import { FaGraduationCap, FaBriefcase, FaHome, FaUserFriends, FaGlobe, FaFileAlt } from "react-icons/fa";

export default function Home() {
  const container = useRef();

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animations for Section 1
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section1", // Start animation when section is in view
        start: "top 80%", // Trigger when top of section is 80% from the top of viewport
        end: "bottom 50%", // End when bottom of section is 50% from top
        toggleActions: "play reverse play reverse", // Play on enter and reverse on exit
        scrub: false, // Smooth animation
      },
    })
      .fromTo(
        ".section1-content",
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 }
      )
      .fromTo(
        ".section1-bg",
        { scale: 1.5, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 1 },
        "<" // Sync with previous animation
      );

    // New GSAP animations for Section 2 (Features component)
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section2", // Targeting Section 2 directly
        start: "top 80%", // Trigger when top of section is 80% from top of viewport
        end: "bottom 30%", // End when bottom of section is 30% from top
        toggleActions: "play reverse play reverse", // Play on enter and reverse on exit
        scrub: false, // Smooth animation
      },
    })
      .fromTo(
        ".section2-content", // Targeting the section content
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        ".section2-feature", // Targeting each feature item
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.3, duration: 1, ease: "power3.out" },
        "<" // Sync with the previous animation
      );
  }, []);

  return (
    <main ref={container} className="main-container">
      {/* Section 1 */}
      <section className="section1 flex items-center justify-center py-20 relative">
        <div className="absolute inset-0 section1-bg bg-transparent "></div>
        <div className="section1-content max-w-4xl text-center p-10 bg-white shadow-lg rounded-lg">
          <Features />
        </div>
      </section>

      {/* Section 2 */}
      

      <section className="section2 flex flex-col items-center py-20 bg-gray-100">
  <div className="section2-content max-w-6xl text-center mb-10">
    <h2 className="text-4xl font-bold text-gray-800 uppercase">Our Expert Services</h2>
    <p className="text-lg text-gray-600 mt-4">
      Comprehensive solutions to make your visa and immigration process seamless and hassle-free.
    </p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Study Visa Assistance",
        description: "Guidance to help you secure a student visa and achieve your academic goals abroad.",
        icon: <FaGraduationCap />,
      },
      {
        title: "Work Visa Consultancy",
        description: "Expert advice for obtaining work permits to unlock your international career opportunities.",
        icon: <FaBriefcase />,
      },
      {
        title: "Permanent Residency",
        description: "Support in securing permanent residency for a stable future in your chosen country.",
        icon: <FaHome />,
      },
      {
        title: "Family Visa Services",
        description: "Reunite with your loved ones by obtaining family visas with our dedicated support.",
        icon: <FaUserFriends />,
      },
      {
        title: "Tourist Visa Guidance",
        description: "Simplify the process of obtaining tourist visas to explore the world effortlessly.",
        icon: <FaGlobe />,
      },
      {
        title: "Immigration Appeals",
        description: "Professional help for handling visa rejections and filing successful appeals.",
        icon: <FaFileAlt />,
      },
    ].map((service, index) => (
      <div
        key={index}
        className="section2-feature bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
      >
        <div className="w-16 h-16 flex items-center justify-center bg-orange-100 text-orange-500 rounded-xl mb-4 text-3xl">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="text-gray-600 mt-2">{service.description}</p>
      </div>
    ))}
  </div>
</section>



    </main>
  );
}
