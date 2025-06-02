import React from "react";

const FeaturedProducts = () => {
  return (
    <section className="featured-products" id="featured">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product">
            <img src="images/candle1.jpg" alt="Candle 1" />
            <h3>Lavender Bliss</h3>
            <p>A calming lavender scent in a sleek glass jar.</p>
          </div>
          <div className="product">
            <img src="images/candle2.jpg" alt="Candle 2" />
            <h3>Vanilla Dream</h3>
            <p>Warm vanilla tones for a cozy atmosphere.</p>
          </div>
          <div className="product">
            <img src="images/candle3.jpg" alt="Candle 3" />
            <h3>Rose Elegance</h3>
            <p>Romantic rose fragrance in a beautiful design.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;