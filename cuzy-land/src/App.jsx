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
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import GalleryUpload from "./components/GalleryUpload";
import CartSidebar from "./components/CartSiderbar";







const App = () => {
  return (
    <Router>
      <Header />
      <CartSidebar /> {/* ✅ CartSidebar is now visible on every page */}
  
      <main className="pt-20"> {/* Optional: adds spacing below fixed Header */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/customize" element={<CustomizeYourCandle />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/upload" element={<GalleryUpload />} />
         
          {/* Add more routes as needed */}
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
