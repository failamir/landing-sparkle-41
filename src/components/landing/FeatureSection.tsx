import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Calendar, FileText, UserPlus, Receipt } from "lucide-react";

interface FeatureItem {
  icon: React.ElementType;
  label: string;
}

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

const featureIcons: Record<string, React.ElementType> = {
  "People directory": Users,
  "Time off": Calendar,
  "Contracts & documents": FileText,
  "Onboarding & offboarding": UserPlus,
  "Expenses": Receipt,
  "1-1 Meetings": Users,
  "Goals": Users,
  "Forms": FileText,
  "Skills": Users,
  "Analytics": Users,
};

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
  // Split features into two columns
  const midpoint = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, midpoint);
  const rightFeatures = features.slice(midpoint);

  return (
    <section className={`py-24 ${bgLight ? 'bg-section-light' : 'bg-background'}`}>
      <div className="max-w-[900px] mx-auto px-6">
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary font-medium text-xs uppercase tracking-wider mb-3 block">
            {tag}
          </span>
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-4 leading-tight max-w-md">
            {title}
          </h2>
          <p className="text-base text-muted-foreground mb-6 max-w-md leading-relaxed">
            {description}
          </p>
          
          <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full text-sm h-10 px-5 mb-8">
            Learn more
          </Button>
          
          {/* Feature List - 2 Columns */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 max-w-md">
            <div className="flex flex-col gap-4">
              {leftFeatures.map((feature) => {
                const Icon = featureIcons[feature] || Users;
                return (
                  <div key={feature} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                    <span className="text-foreground text-sm font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              {rightFeatures.map((feature) => {
                const Icon = featureIcons[feature] || Users;
                return (
                  <div key={feature} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                    <span className="text-foreground text-sm font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Image - Full Width Below */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="rounded-3xl overflow-hidden bg-gradient-to-b from-violet-100/50 to-violet-50/30 p-4 pt-8">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/20">
              <img 
                src={image} 
                alt={imageAlt}
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
