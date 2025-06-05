
import React from "react";

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
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Mon Portfolio. Tous droits réservés.
          </p>
          
          <nav>
            <ul className="flex flex-wrap gap-6">
              <li><a href="#home" className="text-white/70 hover:text-purple text-sm transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-white/70 hover:text-purple text-sm transition-colors">À propos</a></li>
              <li><a href="#skills" className="text-white/70 hover:text-purple text-sm transition-colors">Compétences</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-purple text-sm transition-colors">Projets</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-purple text-sm transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
