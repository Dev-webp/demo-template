"use client";

import React from "react";
import { motion } from "framer-motion";
import { hitFeatures } from "../data";
import { containerVariants, titleVariants, desVariants, tagVariants } from "../animation"; // Assuming these variants are imported from your animations file

const Portfolio = () => {
  return (
    <div className="pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          {/* Header Section */}
          <motion.div
            variants={containerVariants(0.2)} // Adding delay for the entire container
            initial="offscreen"
            animate="onscreen"
            className="flex flex-col gap-8 items-center max-w-3xl mx-auto text-center"
          >
            <motion.span
              variants={tagVariants} // Fade-in effect for the tag
              className="text-lg text-orange-600"
            >
              SOLUTIONS
            </motion.span>
            <motion.h2
              variants={titleVariants} // Fade-in effect for the title
              className="text-3xl font-semibold text-gray-900 md:text-4xl xl:text-4xl uppercase"
            >
              Why We Are <br /> the Best Consultant Agency
            </motion.h2>
          </motion.div>

          {/* Features Section */}
          <div className="flex flex-col gap-8 items-center">
            <div className="max-w-3xl">
              {hitFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={containerVariants(i * 0.2)} // Adding delay for each feature container
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  style={{
                    transform: i === 1 ? "translateX(20px)" : "none", // Apply transform only to the 2nd feature
                  }}
                  className="max-w-3xl flex justify-between bg-gray-100 p-6 rounded-2xl shadow-lg gap-8 mt-6 mx-auto"
                >
                  {/* Feature Details */}
                  <div className="flex flex-col gap-4 flex-1">
                    <motion.span
                      variants={tagVariants} // Fade-in effect for the feature number
                      className="font-bold text-xl text-gray-700"
                    >
                      0{i + 1}
                    </motion.span>
                    <motion.span
                      variants={titleVariants} // Fade-in effect for the feature title
                      className="font-semibold text-2xl text-gray-900 uppercase"
                    >
                      {feature.title}
                    </motion.span>
                    <motion.p
                      variants={desVariants} // Fade-in effect for the feature description
                      className="text-gray-700"
                    >
                      {feature.des}
                    </motion.p>
                  </div>

                  {/* Feature Icon */}
                  <div className="flex-shrink-0 self-center">
                    {feature.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
