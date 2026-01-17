import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import btnBg1 from "@/assets/btn-bg-1.avif";
import btnBg2 from "@/assets/btn-bg-2.avif";
import btnBg3 from "@/assets/btn-bg-3.avif";
import btnBg4 from "@/assets/btn-bg-4.avif";
import btnBg5 from "@/assets/btn-bg-5.avif";

const buttonBackgrounds = [btnBg1, btnBg2, btnBg3, btnBg4, btnBg5];

const Price = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % buttonBackgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      title: "All included",
      description: "Full access from day one — nothing held back.",
    },
    {
      title: "No fees",
      description: "Transparent pricing with zero hidden costs.",
    },
    {
      title: "Setup",
      description: "Go live fast and smooth with expert onboarding support.",
    },
    {
      title: "Support",
      description: "Real people, ready to help whenever you need.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-[840px] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              One plan. All-inclusive.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Aboard offers a really simple plan with everything included. 14-day trial — no credit card required.
            </p>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-secondary/30 rounded-3xl p-8 md:p-12"
          >
            {/* Price */}
            <div className="text-center mb-8">
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                80 kr
              </div>
              
              {/* Currency Selector */}
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border text-sm">
                <span className="text-lg">🇸🇪</span>
                <span>SEK</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-3 bg-sky-400 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-center"
            >
              <button className="relative min-w-[160px] h-12 px-8 rounded-full overflow-hidden text-white font-medium hover:scale-105 transition-transform">
                {buttonBackgrounds.map((bg, index) => (
                  <img
                    key={index}
                    src={bg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                    style={{ opacity: currentBgIndex === index ? 1 : 0 }}
                  />
                ))}
                <span className="relative z-10">Book a demo</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Price;
