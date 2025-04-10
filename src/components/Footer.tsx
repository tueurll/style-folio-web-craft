
import React from "react";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white font-heading">
              Portfolio<span className="text-purple">.</span>
            </a>
            <p className="text-white/70 mt-3 max-w-md">
              Creating beautiful digital experiences that make an impact.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple transition-colors">
              <Github className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple transition-colors">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple transition-colors">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple transition-colors">
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} My Portfolio. All rights reserved.
          </p>
          
          <nav>
            <ul className="flex flex-wrap gap-6">
              <li><a href="#home" className="text-white/70 hover:text-purple text-sm transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-purple text-sm transition-colors">About</a></li>
              <li><a href="#skills" className="text-white/70 hover:text-purple text-sm transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-purple text-sm transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-purple text-sm transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
