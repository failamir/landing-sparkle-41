import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBookDemo, setShowBookDemo] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const navLinks = [
    { label: "Product", href: "/" },
    { label: "Price", href: "/price" },
  ];

  const resourceLinks = [
    { label: "What's new", href: "/whats-new" },
    { label: "Help center", href: "/help-center" },
  ];

  // Track scroll position for Book demo button
  useEffect(() => {
    const handleScroll = () => {
      setShowBookDemo(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary-foreground" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-foreground text-sm">Aboard</span>
            <span className="text-[10px] text-muted-foreground leading-tight">By Teamtailor</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              to={link.href} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Resources Dropdown */}
          <DropdownMenu open={isResourcesOpen} onOpenChange={setIsResourcesOpen}>
            <DropdownMenuTrigger 
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors outline-none"
              onMouseEnter={() => setIsResourcesOpen(true)}
            >
              Resources
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="bg-background border border-border"
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              {resourceLinks.map((link) => (
                <DropdownMenuItem key={link.label} asChild>
                  <Link to={link.href} className="cursor-pointer">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/signin">
            <Button variant="ghost" size="sm" className="text-sm">
              Sign in
            </Button>
          </Link>
          
          <AnimatePresence>
            {showBookDemo && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="sm" 
                  className="bg-[#7dd3fc] hover:bg-[#7dd3fc]/90 text-foreground font-semibold"
                >
                  Book demo
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Resources Section */}
              <div className="py-2">
                <span className="text-sm text-muted-foreground mb-2 block">Resources</span>
                <div className="pl-4 flex flex-col gap-2">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-foreground hover:text-primary transition-colors py-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Sign in
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
