import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground">Aboard</span>
            <span className="text-xs text-muted-foreground">By Teamtailor</span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#product" className="text-muted-foreground hover:text-foreground transition-colors">
            Product
          </a>
          <a href="#price" className="text-muted-foreground hover:text-foreground transition-colors">
            Price
          </a>
          <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </a>
        </div>

        {/* CTA */}
        <Button variant="ghost" size="sm">
          Sign in
        </Button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
