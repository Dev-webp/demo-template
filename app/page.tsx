"use client"
import Hero from '@/app/components/Hero';
import Price from '@/app/components/Price';
import Footer from '@/app/components/Footer';
import ScrollPer from '@/app/components/ScrollPer/index';
import Two from '@/app/components/2/Index';
import Parallex from '@/app/components/Parallex/parallex';
import Scroll from '@/app/components/Scroll/index';
import { useEffect } from 'react';
// import Grids from '@/app/components/Grids';
// import Features from '@/app/components/Features';
// import Comp from '@/app/components/Features-2';
// import Services from '@/app/components/Services';
// import About from '@/app/components/About';
// import CTA from '@/app/components/CTA';
// import Portfolio from '@/app/components/Portfolio';
// import Blog from '@/app/components/Blog';
// import Testimonials from '@/app/components/Testimonials';
// import Swap from '@/app/components/Swap';

export default function Home() {
  // Scroll to the top of the page on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
   <>
   <Hero/>
   <ScrollPer/>
   <div className='mt-28'>
   <Two/>
   </div>
   <Scroll/>
   {/* <Features/>
   <About/> */}
   {/* <Comp/> */}
   {/* <Services/>
   <Swap/> */}
   {/* <CTA/> */}
   <Price/>
   <Parallex/>
   {/* <Grids/> */}
   
   {/* <Portfolio/> */}
   {/* <Testimonials/> */}
   
   {/* <Blog/> */}
   <Footer/>
   </>
  );
}
