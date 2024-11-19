"use client"
import Hero from '@/app/components/Hero';
import Price from '@/app/components/Price';
import Footer from '@/app/components/Footer';
import ScrollPer from '@/app/components/ScrollPer/index';
import ScrollPer2 from '@/app/components/ScrollPer2/index';
import ScrollPer3 from '@/app/components/ScrollPer3/index';
import ScrollPer4 from '@/app/components/ScrollPer4/index';
import Parallex from '@/app/components/Parallex/parallex';
import Scroll from '@/app/components/Scroll/index';
import { useEffect } from 'react';
// import ScrollPer5 from '@/app/components/ScrollPer5/index'
// import Two from '@/app/components/2/Index';
// import About from '@/app/components/About';
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
import FAQ from '@/app/components/FAQ';

export default function Home() {
  // Scroll to the top of the page on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
   <>
   <Hero/>
    <ScrollPer/>
    <div className='h-[5rem]'></div>
    <ScrollPer4/>
    <div className='h-[39rem]'></div>
    <ScrollPer2/>
    <div className='h-[30rem]'></div>
    <ScrollPer3/>
   {/* <div className='h-[50rem]'></div>
   <ScrollPer5/> */}
   {/* <About/> */}
   {/* <div className='mt-28'>
   <Two/>
   </div> */}
   <div className='h-[50rem]'></div>
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
   <FAQ/>
   <Footer/>
   </>
  );
}
