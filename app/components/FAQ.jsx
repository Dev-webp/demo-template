import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Importing icons for drop-down

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What documents are required for a UK study visa?",
      answer:
        "You will typically need proof of acceptance into a course, proof of sufficient funds, and valid identification. Additional documents may be required based on your personal situation.",
    },
    {
      question: "How long does it take to process a visa application?",
      answer:
        "Processing times can vary depending on the type of visa you're applying for and your country of origin. Typically, it takes around 3-4 weeks for a UK study visa application to be processed.",
    },
    {
      question: "Can I work while studying in the UK?",
      answer:
        "Yes, most student visa holders can work part-time during their studies. The number of hours you can work will depend on the type of visa you have.",
    },
    {
      question: "What should I do if my visa is denied?",
      answer:
        "If your visa is denied, you may have the option to appeal the decision. Our team can help guide you through the appeal process and provide support for reapplication.",
    },
    {
      question: "How do I prepare for a visa interview?",
      answer:
        "Preparing for a visa interview involves gathering the required documents, practicing answers to common questions, and being ready to explain your intent and plans while in the country.",
    },
  ];

  return (
    <div className="faq-container p-8 bg-white rounded-lg shadow-xl w-full max-w-3xl mx-auto mt-12">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="faq-list space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item border-b border-gray-300 pb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="faq-question flex items-center justify-between cursor-pointer text-xl font-medium text-gray-700 hover:text-gray-900"
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <FiChevronUp size={24} className="text-orange-600" />
                  ) : (
                    <FiChevronDown size={24} className="text-orange-600" />
                  )}
                </motion.div>
              </div>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="faq-answer mt-4 text-gray-600 text-lg"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
