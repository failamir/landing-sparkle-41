import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureSectionProps {
  tag: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
  bgLight?: boolean;
}

const FeatureSection = ({
  tag,
  title,
  description,
  features,
  image,
  imageAlt,
  reversed = false,
  bgLight = false,
}: FeatureSectionProps) => {
  return (
    <section className={`py-24 ${bgLight ? 'bg-section-light' : 'bg-background'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-xl"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              {tag}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {description}
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature) => (
                <span 
                  key={feature}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>

            <Button variant="ghost" className="group">
              Learn more 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: reversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={image} 
                alt={imageAlt}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
