"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const ContentSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 }); // triggerOnce set to false

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.5, // Delays each child animation
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 1.3 }, // Delayed start
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row-reverse gap-16 py-10 rounded-2xl bg-gradient-to-bl from-orange-50 to-orange-50">
        {/* Image Section */}
        <motion.div
          variants={imageVariants} // Use the image-specific variants
          className="flex md:flex-1"
        >
          <Image
            src="/b2.webp"
            alt="Immigration support services"
            width={1300}
            height={900}
            className="w-full md:h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={contentVariants} // Use the content-specific variants
          className="md:w-1/2 space-y-12 text-gray-700 dark:text-gray-300"
        >
          <motion.h1
            variants={itemVariants} // Fade-in effect for each item
            className="text-gray-900 dark:text-white uppercase font-semibold text-2xl sm:text-3xl md:text-[2.50rem]"
          >
            Your Trusted Partner in Immigration and Relocation
          </motion.h1>
          <motion.p variants={itemVariants}>
            From skilled work visas to permanent residency, our team is dedicated to helping you secure a future abroad with ease and confidence. Let us guide you every step of the way through the complexities of the immigration process.
          </motion.p>
          <motion.ul variants={contentVariants} className="space-y-4">
            {[  
              "Comprehensive Work Visa Solutions",
              "Family Sponsorship and Reunification Services",
              "Assistance with Citizenship and Residency Applications",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center gap-x-4"
              >
                <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-orange-500 dark:bg-teal-600 text-white">
                  ✓
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={itemVariants} className="flex">
            <Link
              href="#"
              className="px-5 h-11 flex items-center bg-orange-500 dark:bg-blue-500 rounded-lg text-white"
            >
              Start Your Immigration Journey Today
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContentSection;
