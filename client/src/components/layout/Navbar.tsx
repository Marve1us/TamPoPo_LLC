import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-primary/20">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-bold tracking-wider text-primary flex items-center gap-2 cursor-pointer">
            <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_var(--color-primary)] animate-pulse" />
            TamPoPo
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer ${location === link.href ? "text-primary font-bold" : "text-gray-400"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/demo">
            <Button className="bg-primary text-black font-bold uppercase tracking-widest hover:bg-primary/80 hover:shadow-[0_0_20px_var(--color-primary)] transition-all">
              Schedule Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-primary/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="text-lg font-display text-gray-300 hover:text-primary cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/demo">
                <Button onClick={() => setIsOpen(false)} className="w-full bg-primary text-black font-bold uppercase">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}