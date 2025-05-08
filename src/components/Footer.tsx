
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/50 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-sora font-bold mb-4 flex items-center">
              <span className="text-primary">Portfolio</span>
              <span className="text-secondary">.</span>
            </h3>
            <p className="text-muted-foreground mb-4 max-w-sm">
              A professional portfolio showcasing my projects and skills in web development,
              UI/UX design, and problem solving.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/nathaniharshit" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/harshit-nathani-79a2b6334/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-secondary transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-secondary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-secondary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-secondary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <span>nathaniharshit01@gmail.com</span>
              </li>
              <li className="text-muted-foreground">
                <span>Vadodara, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {year} Harshit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
