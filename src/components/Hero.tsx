
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const texts = ["Développeur.", "Designer.", "Freelance."];
  const typingSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setTypedText(currentText.substring(0, typedText.length + 1));
        
        // If we've fully typed the word
        if (typedText.length + 1 === currentText.length) {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setTypedText(currentText.substring(0, typedText.length - 1));
        
        // If we've deleted the entire word
        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex, isDeleting, texts]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-dark -z-10"></div>
      
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(rgba(155, 135, 245, 0.3) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <div className="w-full animate-fade-in">
          <h2 className="text-lg md:text-xl font-medium text-purple mb-4">Bienvenue sur mon Portfolio</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Bonjour, je suis un <br />
            <span className="text-purple">{typedText}</span>
            <span className="typing-cursor"></span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-lg mx-auto mb-8">
            Je crée des expériences digitales impressionnantes qui font la différence. Travaillons ensemble pour créer quelque chose d'extraordinaire.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="btn">Voir mes travaux</a>
            <a href="#contact" className="btn bg-transparent border border-purple hover:bg-purple/10">Me contacter</a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white transition-colors"
      >
        <span className="text-sm mb-2">Défiler vers le bas</span>
        <ChevronDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
