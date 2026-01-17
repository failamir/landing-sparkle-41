import { motion } from "framer-motion";

const BuiltForPeopleSection = () => {
  const pillars = [
    "Easy to use from day one.",
    "Designed to bring teams together.",
    "Made to grow with your company.",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 leading-tight">
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
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {pillars.map((pillar, index) => (
              <motion.p 
                key={pillar}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-lg text-muted-foreground"
              >
                {pillar}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltForPeopleSection;
