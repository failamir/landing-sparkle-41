import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    { label: "Price", href: "#" },
    { label: "What's new", href: "#" },
    { label: "Help center", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Terms and conditions", href: "#" },
    { label: "Data protection", href: "#" },
  ];

  return (
    <footer className="py-12 bg-section-light border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Tagline */}
          <p className="text-xl font-medium text-foreground italic">
            Smooth sailing.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Made by */}
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Made by Teamtailor
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
