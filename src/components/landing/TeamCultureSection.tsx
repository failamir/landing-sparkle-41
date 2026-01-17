import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TeamCultureSection = () => {
  const features = [
    {
      title: "Posts",
      description: "Keep everyone in the loop with thoughtful, timely updates — big or small.",
      image: "https://framerusercontent.com/images/Sevdfbb2jBaZDGwecYcbQHaSxM.png",
    },
    {
      title: "Employee portal",
      description: "A personal space for every employee to access what they need, anytime.",
      image: "https://framerusercontent.com/images/PAWdNjBtUuf5nAuJBc5YaoacDU.png",
    },
    {
      title: "Events",
      description: "Plan internal moments that feel like something to look forward to.",
      image: null,
    },
    {
      title: "Photo library",
      description: "Bring your culture to life through the faces, moments, and memories you share.",
      image: "https://framerusercontent.com/images/9EYClwt3ZYBA0UseAXrRZ8RUk.png",
    },
  ];

  return (
    <section className="py-24 bg-section-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Team culture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Belong together.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stay connected, celebrate moments, and create a culture where people feel seen and included — no matter where they work.
          </p>
          <Button variant="ghost" className="group">
            Learn more 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              {feature.image && (
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCultureSection;
