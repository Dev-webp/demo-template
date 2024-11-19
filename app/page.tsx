"use client";

import React, { useEffect, Suspense } from "react";
import Hero from "@/app/components/Hero";
import Price from "@/app/components/Price";
import Footer from "@/app/components/Footer";
import Two from "@/app/components/2/Index";
import Blog from "@/app/components/Blog";
import CTA from "@/app/components/CTA";
 
// Dynamic Imports
const ScrollPer = React.lazy(() => import('@/app/components/ScrollPer/index'));
const Parallex = React.lazy(() => import('@/app/components/Parallex/parallex'));
const Scroll = React.lazy(() => import('@/app/components/Scroll/index'));
const FAQ = React.lazy(() => import('@/app/components/FAQ'));

// Utility function for scroll-to-top
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollPer />
      </Suspense>
      <div className="h-36"></div>
      <Suspense fallback={<div>Loading...</div>}>
        <Scroll />
      </Suspense>
      <Two/>
      <CTA/>
      <Suspense fallback={<div>Loading...</div>}>
        <Price />
        <Parallex />
        <Blog/>
        <FAQ />
      </Suspense>
      <Footer />
    </>
  );
}
