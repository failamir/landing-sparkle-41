import { motion } from "framer-motion";
import { Sailboat } from "lucide-react";

const Footer = () => {
  const leftLinks = [
    { label: "Price", href: "#" },
    { label: "What's new", href: "#" },
    { label: "Help center", href: "#" },
  ];

  const rightLinks = [
    { label: "Privacy policy", href: "#" },
    { label: "Terms and conditions", href: "#" },
    { label: "Data protection", href: "#" },
  ];

  return (
    <footer className="py-12 bg-background">
      <div className="container mx-auto px-6 max-w-md">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <Sailboat className="w-8 h-8 text-muted-foreground/50 mb-4" />

          {/* Tagline */}
          <p className="text-xl font-medium text-foreground mb-8">
            Smooth sailing.
          </p>

          {/* Links - Two Columns */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-2 mb-8">
            <div className="flex flex-col gap-2">
              {leftLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {rightLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground/60">
            <a 
              href="#" 
              className="hover:text-foreground transition-colors"
            >
              Made by Teamtailor
            </a>
            <span>© Teamtailor 2025</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
