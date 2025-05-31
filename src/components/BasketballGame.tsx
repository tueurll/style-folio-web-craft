
import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

const BasketballGame = () => {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 80 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [gameMessage, setGameMessage] = useState('');
  const ballRef = useRef<HTMLDivElement>(null);

  const shootBall = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAttempts(prev => prev + 1);
    
    // Animation du tir
    const success = Math.random() > 0.4; // 60% de chance de réussir
    
    if (success) {
      // Trajectoire réussie vers le panier
      setBallPosition({ x: 75, y: 20 });
      setTimeout(() => {
        setScore(prev => prev + 1);
        setGameMessage('Panier ! 🏀');
        setTimeout(() => {
          setBallPosition({ x: 50, y: 80 });
          setIsAnimating(false);
          setGameMessage('');
        }, 1000);
      }, 800);
    } else {
      // Trajectoire ratée
      const missDirection = Math.random() > 0.5 ? 85 : 65;
      setBallPosition({ x: missDirection, y: 30 });
      setGameMessage('Raté ! 😅');
      setTimeout(() => {
        setBallPosition({ x: 50, y: 80 });
        setIsAnimating(false);
        setGameMessage('');
      }, 1500);
    }
  };

  const resetGame = () => {
    setScore(0);
    setAttempts(0);
    setBallPosition({ x: 50, y: 80 });
    setIsAnimating(false);
    setGameMessage('');
  };

  const accuracy = attempts > 0 ? Math.round((score / attempts) * 100) : 0;

  return (
    <section className="py-20 bg-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-dark/95 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">Mini Jeu Basketball</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Testez votre précision ! Cliquez sur le ballon pour tirer vers le panier.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8">
            {/* Zone de jeu */}
            <div className="relative w-full h-96 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg overflow-hidden mb-6">
              {/* Terrain de basket */}
              <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-orange-600 to-orange-500"></div>
              
              {/* Panier */}
              <div className="absolute top-16 right-16">
                <div className="relative">
                  {/* Panneau */}
                  <div className="w-16 h-12 bg-white rounded border-2 border-gray-300"></div>
                  {/* Cercle */}
                  <div className="absolute -bottom-2 left-2 w-12 h-3 border-4 border-orange-500 rounded-full border-b-transparent"></div>
                  {/* Filet */}
                  <div className="absolute -bottom-6 left-3 w-10 h-4">
                    <div className="grid grid-cols-5 gap-px">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="w-px h-4 bg-white/60"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Ballon */}
              <div
                ref={ballRef}
                className={`absolute w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full cursor-pointer transition-all duration-1000 ease-out ${
                  isAnimating ? 'transform' : 'hover:scale-110'
                }`}
                style={{
                  left: `${ballPosition.x}%`,
                  top: `${ballPosition.y}%`,
                  transform: isAnimating ? 'scale(0.8)' : 'scale(1)',
                  boxShadow: '2px 2px 4px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(0,0,0,0.2)',
                }}
                onClick={shootBall}
              >
                {/* Lignes du ballon */}
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-black/30 transform -translate-y-1/2"></div>
                  <div className="absolute left-1/2 top-0 w-px h-full bg-black/30 transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* Message de jeu */}
              {gameMessage && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/90 text-dark px-4 py-2 rounded-lg font-bold text-lg animate-bounce">
                    {gameMessage}
                  </div>
                </div>
              )}
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple">{score}</div>
                <div className="text-white/70">Paniers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple">{attempts}</div>
                <div className="text-white/70">Tentatives</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple">{accuracy}%</div>
                <div className="text-white/70">Précision</div>
              </div>
              <div className="text-center">
                <button
                  onClick={resetGame}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple hover:bg-purple-dark text-white rounded-lg transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
              </div>
            </div>

            {/* Instructions */}
            <div className="text-center text-white/60 text-sm">
              Cliquez sur le ballon orange pour tirer vers le panier !
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketballGame;
