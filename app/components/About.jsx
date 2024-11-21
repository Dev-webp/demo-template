"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

// Variants for the content
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Sequential animations for children
    },
  },
};

// Variants for individual content items
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Variants for the image (delayed until content is fully visible)
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.1 }, // Delays after content fades in
  },
};

const ContentSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 }); // triggerOnce set to false

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-10"
      
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row gap-16 py-10 rounded-2xl bg-gradient-to-bl from-orange-50 to-orange-50" 
      style={{
        backgroundImage: 'url(/liquid-cheese-2.png)',  // Replace with your background image
      }}>
        {/* Image Section */}
        <motion.div variants={imageVariants} className="flex md:flex-1" >
          <Image
            src="/vjc-1.png"
            alt="Visa consultation services"
            width={1300}
            height={900}
            className="w-full md:h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={contentVariants}
          className="md:w-1/2 space-y-12 text-gray-700 dark:text-gray-300"
        >
          <motion.h1
            variants={itemVariants}
            className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 dark:text-white uppercase font-semibold text-2xl sm:text-3xl md:text-[2.50rem]"
          >
            Empowering   <br />Your Immigration Journey with Expertise
          </motion.h1>

          <motion.p variants={itemVariants}>
            Whether you&apos;re exploring work opportunities, study programs, or family reunification abroad, we provide the expert guidance needed to navigate complex immigration processes and ensure your success.
          </motion.p>

          <motion.ul variants={contentVariants} className="space-y-4 text-left">
            {[
              "Personalized Visa Consultation",
              "Expert Immigration Guidance for Work & Study Programs",
              "Family & Dependent Visa Assistance",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center gap-x-4"
              >
                <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-orange-600 dark:bg-emerald-600 text-white">
                  ✓
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants} className="flex">
            <Link
              href="#"
              className="px-5 h-11 flex items-center bg-orange-600 dark:bg-orange-500 rounded-lg text-white"
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContentSection;
