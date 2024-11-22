"use client";
import { FaRegHandshake, FaGlobeAmericas, FaGraduationCap, FaBriefcase, FaUsers, FaBalanceScale } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Hook to detect if the component is in view

const features = [
  {
    id: 1,
    title: "Expert Visa Consultation",
    description: "Our experienced consultants guide you through the visa application process, ensuring all requirements are met for a successful application.",
    icon: <FaRegHandshake className="w-8 h-8 " />
  },
  {
    id: 2, 
    title: "Immigration Services",
    description: "We offer comprehensive immigration services, including permanent residency, work permits, and family sponsorships to help you settle abroad.",
    icon: <FaGlobeAmericas className="w-8 h-8 " />
  },
  {
    id: 3,
    title: "Study Abroad Assistance",
    description: "We provide expert advice for students looking to study abroad, assisting with student visas, university applications, and scholarship opportunities.",
    icon: <FaGraduationCap className="w-8 h-8 " />
  },
  {
    id: 4,
    title: "Work Visa Services",
    description: "Our team helps skilled professionals secure work visas for countries with high-demand job markets, including the UK, Canada, and Australia.",
    icon: <FaBriefcase className="w-8 h-8" />
  },
  {
    id: 5,
    title: "Family Immigration Support",
    description: "We support families in reuniting with loved ones abroad through family-based immigration programs and ensure all documentation is correctly filed.",
    icon: <FaUsers className="w-8 h-8 " />
  },
  {
    id: 6,
    title: "Legal Assistance ",
    description: "Our legal experts provide tailored advice to help you navigate complex immigration laws and policies, ensuring a smooth immigration process.",
    icon: <FaBalanceScale className="w-8 h-8" />
  },
];

const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center space-y-4"
      initial={{ opacity: 0, y: 20, scale: 0.95 }} // Start with hidden, slightly below, and smaller
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animate to fully visible, at the original position, and original scale
      transition={{
        opacity: { duration: 0.2 },
        y: { type: 'spring', stiffness: 100, damping: 25 }, // More natural slide-up
        scale: { duration: 0.2 }, // Quick scale effect
      }}
    >
      <span className="p-2 rounded-md bg-blue-50 text-orange-500  flex w-max">
        {icon}
      </span>
      <h2 className="text-gray-800  text-xl font-semibold uppercase italic">
        {title}
      </h2>
      <p className="text-gray-700  mx-auto max-w-md">
        {description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when the component is first visible
    threshold: 0.1, // Trigger when 20% of the component is in view
  });

  return (
    <section className="py-10" style={{ backgroundImage: 'url(/subtle-prism.png)' }}>
    <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
      <div className="flex flex-col space-y-10">
        {/* Heading section with animations */}
        <motion.div
          className="flex flex-col justify-center text-center mx-auto md:max-w-3xl space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            type: 'spring',
            stiffness: 100,
            damping: 25
          }}
        >
          {/* Span Animation */}
          <motion.span
            className="mx-auto w-max pl-5 uppercase font-semibold relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-orange-700 text-orange-600 text-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            Features
          </motion.span>
  
          {/* Heading (h1) Animation */}
          <motion.h1
            className="text-3xl font-semibold text-orange-500 md:text-4xl xl:text-[2.75rem] leading-tight uppercase"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              type: 'spring',
              stiffness: 120,
              damping: 30,
            }}
          >
            Empower Your Business for Global Success
          </motion.h1>
  
          {/* Paragraph (p) Animation */}
          <motion.p
            className="text-gray-700 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              type: 'spring',
              stiffness: 120,
              damping: 30,
            }}
          >
            Unlock new opportunities and expand your reach internationally with our expert visa and immigration services. Our dedicated team is here to guide you through every step of the process, ensuring seamless and successful outcomes for your business ventures abroad.
          </motion.p>
        </motion.div>
  
        {/* Wrapping the entire grid section with motion.div to trigger animations when it's in view */}
        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 sm:gap-x-12"
          initial={{ opacity: 0 }}  // Start with the grid section hidden
          animate={inView ? { opacity: 1 } : { opacity: 0 }}  // Fade in when it's in view
          transition={{ duration: 0.2, staggerChildren: 0.2 }} // Staggered animation for child elements
        >
          {features.map((feature, index) => (
            <motion.div key={feature.id} custom={index}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
  
  );
};

export default Features;
