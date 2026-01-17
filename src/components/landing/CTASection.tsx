import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CTASection = () => {

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
    <section className="py-24 bg-background">
      <div className="max-w-[840px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-2">
            Ready to get started?
          </h2>
          <p className="text-3xl md:text-6xl font-bold text-muted-foreground/50">
            Launch in less than a week.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-foreground rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-background" strokeWidth={3} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <Button 
            size="lg" 
            className="min-w-[160px] bg-sky-100 text-sky-500 hover:bg-sky-200 border-0"
          >
            Book a demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
