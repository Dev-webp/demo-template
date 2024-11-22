import { motion } from "framer-motion";

export default function AwardsShowcase() {
  const awards = [
    {
      title: "Best Immigration Consultant - 2023",
      description: "Recognized for exceptional visa and immigration services.",
      icon: "/award1.png", // Replace with actual image path
      link: "#", // Replace with actual URL if you want a link
    },
    {
      title: "Customer Trust Award <br/> - 2022",
      description: "Awarded for unmatched client satisfaction and trust.",
      icon: "/award2.png", // Replace with actual image path
      link: "#", // Replace with actual URL if you want a link
    },
    {
      title: "Excellence in Visa Processing - 2021",
      description: "Acknowledged for efficient and accurate visa handling.",
      icon: "/award3.png", // Replace with actual image path
      link: "#", // Replace with actual URL if you want a link
    },
  ];

  return (
    <div
      className="relative py-10 mt-10 mb-10 bg-cover bg-center h-fit lg:h-screen"
      style={{ backgroundImage: "url('/dot.webp')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/40 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-white">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 text-center uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-orange-500">Achievements</span>
        </motion.h2>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-lg shadow-xl p-6 text-center text-black transform hover:-translate-y-2 transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Award Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4">
                <img
                  src={award.icon}
                  alt={award.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Award Title */}
              <h3
                className="text-lg sm:text-xl font-bold text-orange-500 mb-2 uppercase"
                dangerouslySetInnerHTML={{ __html: award.title }}
              />
              {/* Award Description */}
              <p className="text-xs sm:text-sm text-gray-700 mb-4">{award.description}</p>

              {/* See More Button */}
              <a
                href={award.link}
                className="inline-block py-2 px-4 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                See More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
