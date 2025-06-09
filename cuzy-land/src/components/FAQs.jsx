import React, { useState } from "react";

const faqs = [
  {
    question: "What materials are used in your candles?",
    answer: "Our candles are made with 100% natural soy wax, lead-free cotton wicks, and premium fragrance oils.",
  },
  {
    question: "Can I customize the scent and label?",
    answer: "Yes! You can choose from a variety of scents and customize the label with your own text or design.",
  },
  {
    question: "How long does it take to receive my order?",
    answer: "Orders are typically processed within 3-5 business days and shipped via standard shipping, which takes an additional 3-7 days.",
  },
  {
    question: "Do you offer bulk orders for events?",
    answer: "Absolutely! We offer bulk orders for weddings, corporate events, and other special occasions. Contact us for more details.",
  },
  {
    question: "Are your candles eco-friendly?",
    answer: "Yes, our candles are eco-friendly and made with sustainable materials to ensure minimal environmental impact.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-ivory py-20 px-6 md:px-20 text-brown-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 font-serif">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blush hover:shadow-lg transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-brown-dark"
              >
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform ${
                    activeIndex === index ? "rotate-180 text-blush-dark" : "text-brown-light"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-brown-dark text-md">{faq.answer}</p> 
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;