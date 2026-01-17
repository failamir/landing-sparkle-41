import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--hero-gradient)]">
      <div className="container mx-auto px-6">
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            Bring joy to
            <br />
            your workplace.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Take care of the everyday moments that shape how your team works, connects — and grows.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="hero" size="lg" className="min-w-[160px]">
              Book a demo
            </Button>
            <Button variant="heroOutline" size="lg" className="min-w-[160px]">
              Try for free
            </Button>
          </div>

          {/* Update Badge */}
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span>Jan 13 · New text editor for employee notes</span>
          </motion.a>
        </motion.div>

        {/* Product Screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Main Dashboard Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              <img 
                src="https://framerusercontent.com/images/QWmiVs64Fn6e8PA5SV1OcBG95rk.png" 
                alt="Aboard HR Dashboard" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 md:-right-8 top-1/4 w-48 md:w-64 rounded-xl shadow-card overflow-hidden border border-border/50 bg-card"
            >
              <img 
                src="https://framerusercontent.com/images/OAfFV1qg6kFwEfYQu3EMYzDu8EE.png" 
                alt="Time off widget" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
