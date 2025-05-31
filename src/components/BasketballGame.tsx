
import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

const BasketballGame = () => {
  const [isHacking, setIsHacking] = useState(false);
  const [hackLines, setHackLines] = useState<string[]>([]);

  const hackTexts = [
    "Initializing hack sequence...",
    "Bypassing firewall...",
    "Accessing mainframe...",
    "Downloading data...",
    "Encryption cracked!",
    "System compromised!",
    "Welcome to the matrix 😎"
  ];

  const triggerHack = () => {
    if (isHacking) return;
    
    setIsHacking(true);
    setHackLines([]);
    
    hackTexts.forEach((text, index) => {
      setTimeout(() => {
        setHackLines(prev => [...prev, text]);
        
        if (index === hackTexts.length - 1) {
          setTimeout(() => {
            setIsHacking(false);
            setHackLines([]);
          }, 2000);
        }
      }, index * 500);
    });
  };

  return (
    <section className="py-20 bg-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-dark/95 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">Easter Egg</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Trouvez l'easter egg caché... 🕵️‍♂️
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Easter Egg Terminal Icon */}
            <div className="relative inline-block">
              <Terminal 
                className={`w-16 h-16 text-purple cursor-pointer transition-all duration-300 hover:scale-110 hover:text-green-400 ${
                  isHacking ? 'animate-pulse text-green-400' : ''
                }`}
                onClick={triggerHack}
              />
              
              {/* Hack Animation Overlay */}
              {isHacking && (
                <div className="absolute inset-0 -top-20 left-1/2 transform -translate-x-1/2 w-96 h-64 bg-black/90 border border-green-400 rounded-lg p-4 z-10">
                  <div className="text-green-400 font-mono text-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-white text-xs">Terminal</span>
                    </div>
                    <div className="border-t border-green-400 pt-2">
                      {hackLines.map((line, index) => (
                        <div key={index} className="mb-1 animate-fade-in">
                          <span className="text-green-600">$ </span>
                          {line}
                          {index === hackLines.length - 1 && (
                            <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 text-white/60">
              <p>Cliquez sur l'icône pour découvrir quelque chose... 👨‍💻</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketballGame;
