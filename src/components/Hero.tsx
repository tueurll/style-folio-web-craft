
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const texts = ["Developer.", "Designer.", "Freelancer."];
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
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:justify-between">
        <div className="w-full md:w-1/2 mb-12 md:mb-0 animate-fade-in">
          <h2 className="text-lg md:text-xl font-medium text-purple mb-4">Welcome to my Portfolio</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm a <br />
            <span className="text-purple">{typedText}</span>
            <span className="typing-cursor"></span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-lg mb-8">
            I create stunning digital experiences that make an impact. Let's build something amazing together.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn bg-transparent border border-purple hover:bg-purple/10">Contact Me</a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="glass-card w-64 h-64 md:w-80 md:h-80 flex items-center justify-center overflow-hidden animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-purple/5"></div>
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card p-4 animate-slide-in">
              <p className="text-sm font-medium">5+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
