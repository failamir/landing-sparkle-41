import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const WhatsNew = () => {
  const updates = [
    {
      date: "January 2026",
      title: "Customizable Team page filters",
      tag: "NEW FEATURE",
      tagColor: "bg-cyan-100 text-cyan-700",
      description: "We're excited to introduce filter support for the Team page! You can now easily filter to see who's on vacation today, view upcoming birthdays, or any other information relevant to you.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
    },
    {
      date: "January 2026",
      title: "Performance reviews released!",
      tag: "NEW FEATURE",
      tagColor: "bg-cyan-100 text-cyan-700",
      description: "We're beyond excited to release a big one - Performance Reviews! Here's a quick breakdown of what you can do with this new feature.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
    },
    {
      date: "December 2025",
      title: "Enhancements to Dashboards",
      tag: "IMPROVEMENT",
      tagColor: "bg-purple-100 text-purple-700",
      description: "We've released some exciting updates to the Dashboards. You can now customize your dashboard layout, add new widgets, and share dashboards with your team.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    },
    {
      date: "December 2025",
      title: "One-on-ones: Add items from check-in workflows & Slack",
      tag: "NEW FEATURE",
      tagColor: "bg-cyan-100 text-cyan-700",
      description: "Managers can now add items directly from check-in workflow answers to their next one-on-one meeting agenda, making it easier to follow up on important topics.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
    },
    {
      date: "November 2025",
      title: "Improved employee onboarding flow",
      tag: "IMPROVEMENT",
      tagColor: "bg-purple-100 text-purple-700",
      description: "We've streamlined the employee onboarding process with a new step-by-step wizard, automated task assignments, and progress tracking.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    },
    {
      date: "November 2025",
      title: "Get insights from historical data",
      tag: "NEW FEATURE",
      tagColor: "bg-cyan-100 text-cyan-700",
      description: "Our new analytics dashboard lets you compare data across different time periods, helping you identify trends and make data-driven decisions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    },
    {
      date: "October 2025",
      title: "Enhanced Privacy Controls for Employee Portals",
      tag: "SECURITY",
      tagColor: "bg-green-100 text-green-700",
      description: "We've added new privacy controls allowing employees to choose what information is visible to their colleagues while maintaining transparency where needed.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    },
    {
      date: "October 2025",
      title: "Archive feature for Files",
      tag: "NEW FEATURE",
      tagColor: "bg-cyan-100 text-cyan-700",
      description: "Keep your workspace organized with the new archive feature. Archive old files without deleting them, and easily restore when needed.",
      image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=800&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-[680px] mx-auto px-6">


          {/* Updates Timeline */}
          <div className="space-y-20 relative">


            {updates.map((update, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-12 relative"
              >
                {/* Date Side */}
                <div className="md:text-right md:sticky md:top-32 h-fit pt-2">
                  <span className="text-sm font-semibold text-muted-foreground/60 uppercase tracking-wider block mb-2">
                    {update.date}
                  </span>

                </div>

                {/* Content Side */}
                <div className="space-y-4 max-w-2xl">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                      {update.title}
                    </h2>

                    <div>
                      <Badge
                        variant="secondary"
                        className={`${update.tagColor} font-semibold text-[10px] uppercase tracking-widest px-2.5 py-1 border-0`}
                      >
                        {update.tag}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed pt-2">
                      {update.description}
                    </p>
                  </div>

                  <div className="rounded-xl overflow-hidden shadow-sm border border-border/50 bg-card group cursor-zoom-in transition-all hover:shadow-md hover:border-border mt-4">
                    <img
                      src={update.image}
                      alt={update.title}
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsNew;
