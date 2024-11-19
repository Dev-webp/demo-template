import Image from 'next/image';
import Background from '../../../../public/b2.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='relative z-10 py-20 px-0 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
                <p className='w-[49vw] text-[2vw] uppercase mix-blend-difference ml-[42rem]'>Building dreams and achieving success requires patience, precision, and the right guidance.</p>
                <p className='text-[5vw] uppercase mix-blend-difference ml-8'>Empowering Your Journey</p>
            </div>

            {/* Fixed background image with scrolling effect */}
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{y}} className='relative w-full h-full'>
                    <Image src={Background} fill alt="image" style={{objectFit: "cover"}} />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </motion.div>
            </div>

            {/* Centered creative content */}
            <div className='absolute z-20 text-center'>
                {/* Adding an animated text */}
                {/* <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='text-white text-3xl uppercase mb-4'
                >
                    Your Vision, Our Mission
                </motion.div> */}

                {/* A creative CTA or content block */}
                <div className="relative bg-white bg-opacity-80 p-6 rounded-lg max-w-xl mx-auto mt-10">
                    <p className="text-xl font-bold text-black italic mb-4 uppercase">Join us in your journey to success. We provide expert consultancy to guide you every step of the way.</p>
                    <a href="#contact" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg uppercase text-sm font-bold transition-all duration-300 hover:bg-orange-700">
                        Get Started
                    </a>
                </div>

                {/* Optional Icon section */}
                <div className='flex justify-center mt-6 space-x-4'>
                    <motion.div 
                        whileHover={{ scale: 1.2 }} 
                        className='text-white text-4xl cursor-pointer'
                    >
                        <i className="fas fa-handshake"></i> {/* Example icon */}
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.2 }} 
                        className='text-white text-4xl cursor-pointer'
                    >
                        <i className="fas fa-globe"></i> {/* Example icon */}
                    </motion.div>
                </div>
            </div>

        </div>
    )
}
