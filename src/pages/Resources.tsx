import Navbar from "@/components/landing/Navbar";
import { motion } from "framer-motion";
import { Search, BookOpen, User, Zap, Rocket, Play, Video, Upload, ChevronRight } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Admin & Manager Portal",
      description: "A series of guides on completing your settings and working with Aboard's features",
      authors: 3,
      articles: 33,
    },
    {
      icon: User,
      title: "Employee Portal",
      description: "Discover the options available to all of your employees",
      authors: 1,
      articles: 2,
    },
    {
      icon: Zap,
      title: "Integrations",
      description: "Instructions on setting up the integrations that Aboard works with",
      authors: 3,
      articles: 5,
    },
    {
      icon: Rocket,
      title: "Getting started with Aboard",
      description: "Your Initial Guide to Getting Started with the Platform",
      authors: 1,
      articles: 4,
    },
    {
      icon: Play,
      title: "Video walkthroughs",
      description: "All of our video walkthroughs can be found in this one place!",
      authors: 1,
      articles: 4,
    },
    {
      icon: Video,
      title: "How to videos",
      description: "A collection of how-to videos in Aboard",
      authors: 1,
      articles: 20,
    },
    {
      icon: Upload,
      title: "Aboard Import & Onboarding",
      description: "A collection of material to help you, as a new customer to get started and importing your data.",
      authors: 1,
      articles: 9,
    },
  ];

  const mostViewedArticles = [
    { title: "Posts", link: "#" },
    { title: "Events", link: "#" },
    { title: "Offboarding", link: "#" },
    { title: "Onboarding - onboard a new employee", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-[900px] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Advice and answers from the Aboard Team
            </h1>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for articles..."
                className="w-full h-14 pl-12 pr-4 bg-secondary/50 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </motion.div>

          {/* Resource Cards Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {resourceCategories.map((category, index) => (
              <motion.a
                key={category.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                className="block p-6 bg-background border border-border rounded-2xl hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 mb-4 text-foreground">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="flex -space-x-1">
                    {[...Array(Math.min(category.authors, 3))].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-secondary border-2 border-background"
                      />
                    ))}
                  </div>
                  <span>{category.authors} author{category.authors > 1 ? "s" : ""}</span>
                  <span>•</span>
                  <span>{category.articles} articles</span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Most Viewed Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-secondary/30 rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Most viewed articles
            </h2>
            <div className="grid md:grid-cols-2 gap-2">
              {mostViewedArticles.map((article) => (
                <a
                  key={article.title}
                  href={article.link}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-background transition-colors group"
                >
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-sky-400" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-12 text-center">
        <div className="flex justify-center mb-4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4L4 14L16 12L28 14L16 4Z" fill="currentColor" className="text-foreground"/>
            <path d="M4 14L16 28L16 12L4 14Z" fill="currentColor" className="text-foreground" opacity="0.7"/>
            <path d="M28 14L16 28L16 12L28 14Z" fill="currentColor" className="text-foreground" opacity="0.5"/>
          </svg>
        </div>
        <p className="text-muted-foreground">Bring joy to your workplace.</p>
      </footer>
    </div>
  );
};

export default Resources;
