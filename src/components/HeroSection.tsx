
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 px-4 md:px-8 section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col order-2 md:order-1 animate-fade-in">
            <div className="mb-4">
              <span className="text-lg md:text-xl inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary mb-6">
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              I'm <span className="text-secondary">Harshit Nathani</span>, <br/>
              <span className="text-primary">Creative Developer</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 md:pr-10">
              I build exceptional digital experiences that are beautiful, 
              functional, and user-centered. Passionate about crafting clean code
              and stunning interfaces.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Button onClick={scrollToProjects} className="bg-secondary hover:bg-secondary/80 text-white px-8 py-6">
                View My Work
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-6">
                Contact Me
              </Button>
                <a href="https://drive.google.com/file/d/1tDPdY4OgBkdiRyra9LvcszFFX7JwFnrw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="px-8 py-6">
                View Resume
              </Button>
            </a>
</div>

            <div className="mt-12 flex items-center gap-6">
              <a href="https://github.com/nathaniharshit" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/harshit-nathani-79a2b6334/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.instagram.com/nathaniharshit" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-secondary/30 shadow-xl">
                <img 
                  src="https://i.pinimg.com/736x/f8/a4/10/f8a410a7d2ecc0c0b12b055b0aa16f1b.jpg" 
                  alt="Developer" 
                  className="w-full h-full object-cover" 
                />
          </div>
              <div className="absolute -bottom-1 -right-6 bg-background p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 px-2 py-1">
                  <span className="flex h-3 w-3 bg-green-500 rounded-full"></span>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
