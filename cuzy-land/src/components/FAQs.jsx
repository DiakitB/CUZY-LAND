import React from "react";

const FAQs = () => {
  return (
    <section className="faqs" id="faqs">
      <div className="container">
        <h2>FAQs</h2>
        <div className="faq">
          <h3>How long does shipping take?</h3>
          <p>Shipping typically takes 5-7 business days.</p>
        </div>
        <div className="faq">
          <h3>Can I change my order?</h3>
          <p>Yes, you can modify your order within 24 hours of placing it.</p>
        </div>
        <div className="faq">
          <h3>Are the candles eco-friendly?</h3>
          <p>Absolutely! Our candles are made with sustainable materials.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;