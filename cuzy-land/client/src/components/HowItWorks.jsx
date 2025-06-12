import React from "react";

const steps = [
  {
    title: "Choose Your Candle",
    description: "Pick your fragrance, size, jar, and label color. The journey begins with your vibe.",
    icon: "🕯️",
  },
  {
    title: "Customize It",
    description: "Add your personal touch: a name, a message, or a mood. Preview it in 3D!",
    icon: "🎨",
  },
  {
    title: "We Craft & Ship",
    description: "We hand-pour your candle with love and ship it right to your door.",
    icon: "📦",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-ivory py-20 px-6 md:px-20 text-brown-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 font-serif">How It Works</h2>

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-6 flex-1 text-center border-t-4 border-blush hover:shadow-2xl transition-transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-md text-brown-light">{step.description}</p>

              {/* Decorative arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blush-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;