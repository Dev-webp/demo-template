import { FaRegAddressCard, FaHandshake, FaGlobeAmericas, FaUsers } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion from framer-motion

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-5 xl:p-2 hover:cursor-default rounded-lg bg-gray-100 dark:bg-gray-900 group transition duration-300 z-20 hover:z-30 shadow-md shadow-transparent hover:shadow-gray-100/40 dark:hover:shadow-transparent border border-transparent hover:border-gray-200 dark:hover:border-gray-800 hover:-translate-y-2 overflow-hidden relative">
      <div className="absolute w-40 h-10 rounded-full border-8 border-sky-600/20 dark:border-sky-500/30 blur-md -z-10 -top-1 right-5 rotate-45" />
      <div className="flex min-w-max items-start">
        <div className="p-1.5 rounded-full shadow-sm relative bg-gradient-to-br from-gray-100 to-neutral-300 dark:from-gray-900 dark:to-gray-700">
          <div className=" bg-gray-100 dark:bg-gray-900 rounded-full p-3 flex">
            <div className="text-orange-500 text-3xl">{icon}</div>
          </div>
        </div>
      </div>
      <div className="space-y-5 flex flex-col md:flex-1 relative">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-justify line-clamp-3">
          {description}
        </p>
        <Link href="#" className="text-sky-700 dark:text-sky-400 flex items-center gap-x-3 w-max">
          Get a free consultation
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const services = [
  {
    id: 1,
    title: "Visa Consultation",
    description: "Get expert guidance on visa application procedures and requirements tailored to your specific needs.",
    icon: <FaRegAddressCard />
  },
  {
    id: 2,
    title: "Immigration Services",
    description: "Comprehensive support for all your immigration-related matters, ensuring a smooth transition to your desired country.",
    icon: <FaHandshake />
  },
  {
    id: 3,
    title: "Global Opportunities",
    description: "Explore various immigration and visa opportunities across the globe, from work visas to study programs.",
    icon: <FaGlobeAmericas />
  },
  {
    id: 4,
    title: "Family & Dependent Visas",
    description: "We help you reunite with your loved ones through family and dependent visa programs for various countries.",
    icon: <FaUsers />
  },
];

const Features = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
        <div className="flex flex-col gap-5">
          <div className="space-y-4 max-w-4xl">
            {/* Fade-in for span */}
            <motion.span
              className="mx-auto w-max pl-5 uppercase font-semibold relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-orange-700 dark:before:bg-sky-600 text-orange-600 dark:text-blue-500 text-2xl"
              initial={{ opacity: 0 }} // Start with 0 opacity
              whileInView={{ opacity: 1 }} // Fade in to full opacity when in view
              transition={{ duration: 1 }} // Duration of the fade-in
            >
              Our Services
            </motion.span>
            {/* Fade-in for h1 */}
            <motion.h1
              className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }} // Add a delay for sequential fade-in
            >
              Helping You Achieve Your Immigration Dreams
            </motion.h1>
          </div>
          {/* Fade-in for paragraph */}
          <motion.p
            className="text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }} // Add a slight delay for sequential fade-in
          >
            We offer expert services to guide you through every step of your visa and immigration journey, ensuring you receive the best possible assistance and advice.
          </motion.p>
        </div>

        {/* Fade-in for Service Cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6 md:gap-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 } // Stagger the fade-in of service cards
            }
          }}
        >
          {services.map(service => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
