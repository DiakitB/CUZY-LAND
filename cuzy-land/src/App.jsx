import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
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
import CartSidebar from "./components/CartPage"; // ✅ Your full cart page

const App = () => {
  return (
    <Router>
      <Header />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/customize" element={<CustomizeYourCandle />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/upload" element={<GalleryUpload />} />
          <Route path="/cart" element={<CartSidebar />} /> {/* ✅ Only rendered on /cart */}
        </Routes>
      </main>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
      <Footer />
    </Router>
  );
};

export default App;
