"use client";

import React, { useEffect, Suspense } from "react";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import { FaWhatsapp } from 'react-icons/fa';

// Dynamic Imports
const ScrollPer = React.lazy(() => import('@/app/components/ScrollPer/index'));
const Parallex = React.lazy(() => import('@/app/components/Parallex/parallex'));
const Scroll = React.lazy(() => import('@/app/components/Scroll/index'));
const Two = React.lazy(() => import('@/app/components/2/Index'));
const CTA = React.lazy(() => import('@/app/components/CTA'));
const FAQ = React.lazy(() => import('@/app/components/FAQ'));
const Price = React.lazy(() => import('@/app/components/Price'));
const Blog = React.lazy(() => import('@/app/components/Blog'));

// Utility function for scroll-to-top
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      {/* Critical Content */}
      <Hero />

      {/* Non-Critical Content Loaded Lazily */}
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollPer />
        <div className="h-[91rem] md:h-60 lg:h-72"></div>
        <Scroll />
        <Two />
        <div className="h-[90rem] md:h-0 lg:h-32"></div>
        <CTA />
        <Price />
        <div>
          <h1 className="text-[2.75rem] font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight text-center mt-10">What Our <br/> Customers Say</h1>
        <Parallex /> </div>
        <Blog />
        <FAQ />
      </Suspense>
      
      <Footer />

      {/* WhatsApp Icon (floating globally) */}
      <a
        href="https://wa.me/+919160449000" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <FaWhatsapp size={30} color="white" />
      </a>

      <style jsx>{`
        .whatsapp-icon {
          position: fixed;
          bottom: 23px;
          left: 20px;
          background-color: #25D366; /* WhatsApp green */
          padding: 10px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
          z-index: 9999; /* Ensure it's on top of all elements */
        }

        .whatsapp-icon:hover {
          transform: scale(1.1);
        }

        .whatsapp-icon a {
          color: white;
        }
      `}</style>
    </>
  );
}
