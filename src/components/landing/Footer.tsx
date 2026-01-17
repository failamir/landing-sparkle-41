import { motion } from "framer-motion";
import { Sailboat } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const leftLinks = [
    { label: "Price", href: "/price" },
    { label: "What's new", href: "#" },
    { label: "Help center", href: "/resources" },
  ];

  const rightLinks = [
    { label: "Privacy policy", href: "#" },
    { label: "Terms and conditions", href: "#" },
    { label: "Data protection", href: "#" },
  ];

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-[900px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Desktop Layout */}
          <div className="hidden md:flex items-start justify-between mb-12">
            {/* Left Side - Logo & Tagline */}
            <div>
              <Sailboat className="w-6 h-6 text-muted-foreground/60 mb-4" />
              <p className="text-lg font-medium text-foreground">
                Smooth sailing.
              </p>
            </div>

            {/* Right Side - Links */}
            <div className="flex gap-24">
              <div className="flex flex-col gap-3">
                {leftLinks.map((link) => (
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </div>
              <div className="flex flex-col gap-3">
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
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden mb-12">
            <Sailboat className="w-6 h-6 text-muted-foreground/60 mb-4" />
            <p className="text-lg font-medium text-foreground mb-6">
              Smooth sailing.
            </p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              <div className="flex flex-col gap-3">
                {leftLinks.map((link) => (
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </div>
              <div className="flex flex-col gap-3">
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
          </div>

          {/* Bottom Copyright */}
          <div className="flex items-center justify-between pt-6 border-t border-border text-sm text-muted-foreground/60">
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
