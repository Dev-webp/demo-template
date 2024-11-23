"use client";

import React, { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";

// Dynamic Imports
const ScrollPer = dynamic(() => import('@/app/components/ScrollPer/index'));
const Parallex = dynamic(() => import('@/app/components/Parallex/parallex'));
const Scroll = dynamic(() => import('@/app/components/Scroll/index'));
const ScrollPerRev = dynamic(() => import('@/app/components/ScrollPerRev/Index'));
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
        <div className="h-[230rem] tablet:h-[105rem] lg:h-[36rem]"></div>
        <Scroll />
        <ScrollPerRev />
        <div className="h-[108rem] tablet:h-[38rem] lg:h-6"></div>
        <CTA />
        {/* <Price /> */}
        <Blog />
        <SectionHeading title="What Our Customers Say" />
        <Parallex />
        
        <FAQ />
      </Suspense>
      <Footer />
    </>
  );
}

// Components
const LoadingIndicator = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
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



