
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-dark/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white font-heading">
          Portfolio<span className="text-purple">.</span>
        </a>
        
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <nav className={cn(
          "fixed lg:static top-16 left-0 w-full lg:w-auto bg-dark/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none py-5 lg:py-0 px-4 lg:px-0 transition-all duration-300 lg:flex lg:items-center",
          isMenuOpen ? "block" : "hidden lg:block",
          isScrolled ? "shadow-md lg:shadow-none" : ""
        )}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <li><a href="#home" className="text-white/80 hover:text-purple transition-colors duration-300" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="text-white/80 hover:text-purple transition-colors duration-300" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" className="text-white/80 hover:text-purple transition-colors duration-300" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" className="text-white/80 hover:text-purple transition-colors duration-300" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="text-white/80 hover:text-purple transition-colors duration-300" onClick={toggleMenu}>Contact</a></li>
          </ul>
          <a href="#contact" className="mt-6 lg:mt-0 lg:ml-8 btn">Get In Touch</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
