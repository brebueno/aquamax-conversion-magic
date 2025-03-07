
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import SavingsCalculator from "../components/SavingsCalculator";
import PricingSection from "../components/PricingSection";
import GuaranteeSection from "../components/GuaranteeSection";
import FAQSection from "../components/FAQSection";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

const Index = () => {
  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(".fade-in-section");
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden"
    >
      <Navbar />
      <HeroSection />
      <VideoSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <SavingsCalculator />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <CTABanner />
      <Footer />
    </motion.div>
  );
};

export default Index;
