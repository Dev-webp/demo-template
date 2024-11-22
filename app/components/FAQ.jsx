import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQComponent = () => {
  const [searchQuery ] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button in the top right corner. Fill in your details including email, password, and personal information. Once submitted, you'll receive a confirmation email to activate your account."
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment gateway."
    },
    {
      id: 3,
      question: "How can I reset my password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you instructions to create a new password. For security reasons, the reset link expires after 24 hours."
    },
    {
      id: 4,
      question: "What is your refund policy?",
      answer: "Our refund policy allows returns within 30 days of purchase. Items must be unused and in their original packaging. Once we receive and inspect the return, we'll process your refund within 5-7 business days."
    },
    {
      id: 5,
      question: "How can I contact customer support?",
      answer: "Our customer support team is available 24/7. You can reach us through email at support@example.com, live chat on our website, or call us at 1-800-123-4567. We typically respond to inquiries within 24 hours."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-10 mt-10 mb-10 bg-cover bg-center" style={{ backgroundImage: "url('/dot.webp')" }}>
      <div className="max-w-3xl mx-auto mb-10 bg-opacity-80 bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-[2.50rem] font-bold text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 mb-8 text-center uppercase">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-105"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full px-6 py-4 flex justify-between items-center text-left transition-colors duration-300 ${
                  activeIndex === index ? "bg-orange-100 text-gray-800" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {activeIndex === index ? (
                  <FiChevronUp className="text-orange-500 text-xl flex-shrink-0 ml-4" />
                ) : (
                  <FiChevronDown className="text-gray-400 text-xl flex-shrink-0 ml-4" />
                )}
              </button>
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
                role="region"
                aria-labelledby={`faq-question-${faq.id}`}
              >
                <div className="px-6 py-4 bg-white text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
