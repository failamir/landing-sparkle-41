import { motion } from "framer-motion";
import { MousePointerClick, Users, Sparkles } from "lucide-react";

const BuiltForPeopleSection = () => {
  const pillars = [
    {
      icon: MousePointerClick,
      text: "Easy to use from day one.",
    },
    {
      icon: Users,
      text: "Designed to bring teams together.",
    },
    {
      icon: Sparkles,
      text: "Made to grow with your company.",
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
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 leading-tight">
            Built for people,{" "}
            <span className="inline-block">
              <img 
                src="https://framerusercontent.com/images/uueZ7ykrYjwPdZTJmk6qMmNeOBQ.png" 
                alt="Smiling faces" 
                className="inline h-12 md:h-14 mx-2 rounded-lg"
              />
            </span>
            {" "}not just the process around them.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={pillar.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <pillar.icon className="w-10 h-10 text-foreground mb-4" strokeWidth={1.5} />
                <p className="text-muted-foreground">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltForPeopleSection;
