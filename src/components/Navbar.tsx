
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl md:text-2xl font-sora font-bold">
          <a href="#hero" className="flex items-center">
            <span className="text-primary">Portfolio</span>
            <span className="text-secondary">.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            onClick={() => scrollToSection('about')} 
            className="text-foreground/80 hover:text-secondary transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection('projects')} 
            className="text-foreground/80 hover:text-secondary transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a 
            onClick={() => scrollToSection('skills')} 
            className="text-foreground/80 hover:text-secondary transition-colors cursor-pointer"
          >
            Skills
          </a>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-secondary hover:bg-secondary/80"
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span 
                className={cn(
                  "h-0.5 bg-foreground transition-all", 
                  isMobileMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
                )}
              ></span>
              <span 
                className={cn(
                  "h-0.5 bg-foreground transition-all", 
                  isMobileMenuOpen ? "opacity-0" : "w-4"
                )}
              ></span>
              <span 
                className={cn(
                  "h-0.5 bg-foreground transition-all", 
                  isMobileMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5"
                )}
              ></span>
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-x-0 bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out shadow-lg md:hidden",
          isMobileMenuOpen ? "top-[72px] opacity-100" : "top-[-400px] opacity-0"
        )}
      >
        <div className="container mx-auto py-6 px-4 flex flex-col space-y-6">
          <a 
            onClick={() => scrollToSection('about')}
            className="text-lg py-2 px-4 hover:bg-muted rounded-md transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection('projects')}
            className="text-lg py-2 px-4 hover:bg-muted rounded-md transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a 
            onClick={() => scrollToSection('skills')}
            className="text-lg py-2 px-4 hover:bg-muted rounded-md transition-colors cursor-pointer"
          >
            Skills
          </a>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-secondary hover:bg-secondary/80 w-full"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
