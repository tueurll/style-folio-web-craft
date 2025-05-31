
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const BasketballGame = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const triggerAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setClickCount(prev => prev + 1);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-dark/95 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">Easter Egg</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Il y a quelque chose de caché ici... 🤔
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Bouton caché */}
            <div className="relative inline-block">
              <div
                className={`w-4 h-4 bg-transparent border border-white/10 rounded cursor-pointer transition-all duration-300 hover:border-purple/50 hover:scale-110 ${
                  isAnimating ? 'animate-pulse' : ''
                }`}
                onClick={triggerAnimation}
                title="🤫"
              />
              
              {/* Animation de particules */}
              {isAnimating && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className={`absolute w-4 h-4 text-purple animate-ping`}
                      style={{
                        left: `${Math.random() * 100}px`,
                        top: `${Math.random() * 100}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '1s'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 text-white/60">
              <p>Cherchez bien... 👀</p>
              {clickCount > 0 && (
                <p className="text-purple text-sm mt-2 animate-fade-in">
                  ✨ Découvert {clickCount} fois !
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketballGame;
