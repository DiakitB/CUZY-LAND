import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer'; // ✅ Import Footer
import Hero from "./components/Hero";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
// import Products from "./components/Products";
// import Cart from "./components/Cart";
// import Checkout from "./components/Checkout";

const App = () => {
  return (
    <Router>
      <Header />

      <main className="pt-20"> {/* Optional: adds spacing below fixed Header */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          {/* Uncomment these routes when the components are ready */}
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
      </main>

      <Footer /> {/* ✅ Footer visible on every page */}
    </Router>
  );
};

export default App;
