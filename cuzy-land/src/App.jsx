import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer'; // ✅ Import Footer
import Hero from "./components/Hero";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import CustomizeYourCandle from "./components/Customize";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThankYou from "./components/ThankYou";
const App = () => {
  return (
    <Router>
      <Header />

      <main className="pt-20"> {/* Optional: adds spacing below fixed Header */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/customize" element={<CustomizeYourCandle />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* Uncomment these routes when the components are ready */}
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
      </main>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable />

      {/* Footer is now visible on every page */}
      {/* ✅ Footer component added here */}
      <Footer /> {/* ✅ Footer visible on every page */}
    </Router>
  );
};

export default App;
