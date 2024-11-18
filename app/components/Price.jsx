"use client"
import Link from "next/link";
import { motion } from "framer-motion";

const ServiceSection = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-10"
        >
          <div className="flex gap-10 flex-col items-center">
            <div className="text-center max-w-2xl">
              <h2 className="text-[2.75rem] font-semibold uppercase text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
                Our Immigration Services
              </h2>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mx-auto"
          >
            {[
              {
                id: 1,
                title: "Visa Consultation",
                description: "Personalized visa consultation to guide you through your immigration process with ease.",
                recommended: false,
              },
              {
                id: 2,
                title: "Full Immigration Package",
                description:
                  "A comprehensive package that covers all aspects of your immigration process, from documentation to final approval.",
                recommended: true,
              },
              {
                id: 3,
                title: "Resume Marketing",
                description:
                  "Expert help with preparing and reviewing all necessary documentation for your visa application.",
                recommended: false,
              },
            ].map((service) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`relative rounded-lg border bg-white dark:bg-gray-950 p-6 sm:p-10 space-y-6 hover:shadow-md hover:border-gray-200 dark:hover:border-gray-800 dark:hover:shadow-transparent hover:-translate-y-2 transition duration-300 ${
                  service.recommended
                    ? "bg-gray-100 dark:bg-gray-900 shadow-gray-200/40"
                    : "shadow-transparent"
                }`}
              >
                {service.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-b-lg bg-gray-200 dark:bg-gray-950 text-gray-700 dark:text-gray-300">
                    Recommended
                  </div>
                )}
                <div className="text-center space-y-3">
                  <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
                <div className="flex relative py-3 before:absolute before:top-1/2 before:inset-0 before:h-px before:bg-gray-200 dark:before:bg-gray-900" />
                <div className="flex justify-center">
                  <Link
                    href="#"
                    className={`outline-none w-max mx-auto flex items-center h-11 px-5 rounded-md ${
                      service.recommended
                        ? "bg-orange-500 dark:bg-blue-950 text-white"
                        : "bg-gray-200 dark:bg-gray-900 text-orange-500 dark:text-gray-300"
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
