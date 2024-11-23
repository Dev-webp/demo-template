"use client";

import React, { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import { FaWhatsapp } from 'react-icons/fa';

// Dynamic Imports
const ScrollPer = dynamic(() => import('@/app/components/ScrollPer/index'));
const Parallex = dynamic(() => import('@/app/components/Parallex/parallex'));
const Scroll = dynamic(() => import('@/app/components/Scroll/index'));
const Two = dynamic(() => import('@/app/components/2/Index'));
const CTA = dynamic(() => import('@/app/components/CTA'));
const FAQ = dynamic(() => import('@/app/components/FAQ'));
// const Price = dynamic(() => import('@/app/components/Price'));
const Blog = dynamic(() => import('@/app/components/Blog'));

// Utility function for scroll-to-top
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Home() {
  useEffect(() => {
    scrollToTop(); // Ensure the page starts at the top
  }, []);

  return (
    <>
      {/* Critical Content */}
      <Hero />

      {/* Lazy Load Non-Critical Content */}
      <Suspense fallback={<LoadingIndicator />}>
        <ScrollPer />
        <div className="h-[230rem] tablet:h-[30rem] lg:h-[36rem]"></div>
        <Scroll />
        <Two />
        <div className="h-[108rem] tablet:h-[28rem] lg:h-6"></div>
        <CTA />
        {/* <Price /> */}
        <Blog />
        <SectionHeading title="What Our Customers Say" />
        <Parallex />
        
        <FAQ />
      </Suspense>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Icon */}
      <FloatingWhatsApp />
    </>
  );
}

// Components
const LoadingIndicator = () => (
  <div className="loading-indicator">
    Loading...
    <style jsx>{`
      .loading-indicator {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-size: 1.5rem;
        color: #333;
      }
    `}</style>
  </div>
);


const SectionHeading: React.FC<{ title: string }> = ({ title }) => (
  <div className="section-heading">
    <h1
      className="text-[2.75rem] font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 
        md:text-4xl xl:text-5xl leading-tight text-center mt-10"
    >
      {title}
    </h1>
  </div>
);



const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/+919160449000"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-icon"
  >
    <FaWhatsapp size={30} color="white" />
    <style jsx>{`
      .whatsapp-icon {
        position: fixed;
        bottom: 23px;
        left: 20px;
        background-color: #25d366;
        padding: 10px;
        border-radius: 50%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
        z-index: 9999;
      }
      .whatsapp-icon:hover {
        transform: scale(1.1);
      }
    `}</style>
  </a>
);
