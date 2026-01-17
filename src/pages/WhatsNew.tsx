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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-[840px] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              What's new in Aboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay up to date with the latest features, improvements, and updates.
            </p>
          </motion.div>

          {/* Updates Timeline */}
          <div className="space-y-16">
            {updates.map((update, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="relative"
              >
                {/* Date */}
                <div className="text-sm text-muted-foreground mb-3">
                  {update.date}
                </div>
                
                {/* Tag */}
                <Badge 
                  variant="secondary" 
                  className={`${update.tagColor} mb-3 font-medium text-xs`}
                >
                  {update.tag}
                </Badge>
                
                {/* Title */}
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {update.title}
                </h2>
                
                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-4 border border-border">
                  <img 
                    src={update.image}
                    alt={update.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {update.description}
                </p>
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
