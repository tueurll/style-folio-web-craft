
import React, { useState } from "react";
import { Crown, Dumbbell, ShoppingBag, Globe, Sparkles } from "lucide-react";

const About = () => {
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
    <section id="about" className="py-20 bg-dark relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="section-title">À propos de moi</h2>
            
            {/* Bouton easter egg */}
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
              
              {clickCount > 0 && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <p className="text-purple text-xs animate-fade-in whitespace-nowrap">
                    ✨ {clickCount} fois !
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="max-w-4xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-purple mb-2">Rayan NYABI</h3>
              <p className="text-white/70 text-lg">18 ans</p>
            </div>
            
            <p className="text-white/70 mb-6">
              Je suis un développeur web passionné avec un sens aigu du design et un engagement à créer des sites web beaux et fonctionnels. Avec 1 an d'expérience, je me spécialise dans la création d'interfaces réactives et conviviales qui génèrent des résultats.
            </p>
            <p className="text-white/70 mb-8">
              Mon parcours dans le développement web a commencé par une curiosité sur le fonctionnement des sites web, et s'est transformé en une carrière que j'aime vraiment. J'aborde chaque projet avec enthousiasme et dévouement, m'efforçant de dépasser les attentes et de fournir des solutions qui font la différence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
              <div className="glass-card p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center mb-3">
                  <Crown className="w-6 h-6 text-purple" />
                </div>
                <h3 className="text-lg font-bold mb-1">Échecs</h3>
                <p className="text-sm text-white/70 text-center">Joueur passionné</p>
              </div>
              <div className="glass-card p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center mb-3">
                  <Dumbbell className="w-6 h-6 text-purple" />
                </div>
                <h3 className="text-lg font-bold mb-1">Fitness</h3>
                <p className="text-sm text-white/70 text-center">Passionné de musculation</p>
              </div>
              <div className="glass-card p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center mb-3">
                  <div className="w-6 h-6 text-purple">🏀</div>
                </div>
                <h3 className="text-lg font-bold mb-1">Basket</h3>
                <p className="text-sm text-white/70 text-center">Sport d'équipe</p>
              </div>
              <div className="glass-card p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center mb-3">
                  <ShoppingBag className="w-6 h-6 text-purple" />
                </div>
                <h3 className="text-lg font-bold mb-1">Revente</h3>
                <p className="text-sm text-white/70 text-center">Vêtements & chaussures</p>
              </div>
              <div className="glass-card p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center mb-3">
                  <Globe className="w-6 h-6 text-purple" />
                </div>
                <h3 className="text-lg font-bold mb-1">Langues</h3>
                <p className="text-sm text-white/70 text-center">Polyglotte</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Compétences linguistiques</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-card p-3 text-center">
                  <h4 className="font-bold text-purple">Arabe</h4>
                  <p className="text-sm text-white/70">Courant</p>
                </div>
                <div className="glass-card p-3 text-center">
                  <h4 className="font-bold text-purple">Français</h4>
                  <p className="text-sm text-white/70">Courant</p>
                </div>
                <div className="glass-card p-3 text-center">
                  <h4 className="font-bold text-purple">Anglais</h4>
                  <p className="text-sm text-white/70">B2-C1</p>
                </div>
                <div className="glass-card p-3 text-center">
                  <h4 className="font-bold text-purple">Espagnol</h4>
                  <p className="text-sm text-white/70">Bases</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8 max-w-md mx-auto">
              <div className="glass-card p-4 text-center">
                <h3 className="text-purple text-3xl font-bold mb-1">1+</h3>
                <p className="text-sm text-white/70">Années d'expérience</p>
              </div>
              <div className="glass-card p-4 text-center">
                <h3 className="text-purple text-3xl font-bold mb-1">9+</h3>
                <p className="text-sm text-white/70">Projets réalisés</p>
              </div>
            </div>

            <a href="#contact" className="btn">Me contacter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
