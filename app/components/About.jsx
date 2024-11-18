"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const ContentSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row gap-16 py-10 rounded-2xl bg-gradient-to-bl from-orange-50 to-orange-50">
        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="flex md:flex-1"
        >
          <Image
            src="/b3.jpg"
            alt="Visa consultation services"
            width={1300}
            height={900}
            className="w-full md:h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={itemVariants}
          className="md:w-1/2 space-y-12 text-gray-700 dark:text-gray-300"
        >
          <h1 className="text-gray-900 dark:text-white uppercase font-semibold text-2xl sm:text-3xl md:text-[2.50rem]">
            Empowering Your Immigration Journey<br /> with Expertise
          </h1>
          <p>
            Whether you're exploring work opportunities, study programs, or family reunification abroad, we provide the expert guidance needed to navigate complex immigration processes and ensure your success.
          </p>
          <ul className="space-y-4">
            {["Personalized Visa Consultation", 
              "Expert Immigration Guidance for Work & Study Programs", 
              "Family & Dependent Visa Assistance"].map((item, index) => (
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
          </ul>
          <motion.div variants={itemVariants} className="flex">
            <Link href="#" className="px-5 h-11 flex items-center bg-orange-600 dark:bg-orange-500 rounded-lg text-white">
              Get a Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContentSection;
