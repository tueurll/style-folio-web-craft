
import React from "react";
import { Dribbble, Dumbbell, ShoppingBag } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-purple/10 rounded-xl absolute -left-6 -top-6"></div>
              <div className="glass-card p-3 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1374" 
                  alt="À propos de moi" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -right-10 -bottom-10 glass-card p-4 z-20">
                <p className="text-purple font-bold text-lg md:text-xl">7+</p>
                <p className="text-sm text-white/70">Projets réalisés</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-3/5">
            <h2 className="section-title">À propos de moi</h2>
            <p className="text-white/70 mb-6">
              Je suis un développeur web passionné avec un sens aigu du design et un engagement à créer des sites web beaux et fonctionnels. Avec 1 an d'expérience dans l'industrie, je me spécialise dans la création d'interfaces réactives et conviviales qui génèrent des résultats.
            </p>
            <p className="text-white/70 mb-8">
              Mon parcours dans le développement web a commencé par une curiosité sur le fonctionnement des sites web, et s'est transformé en une carrière que j'aime vraiment. J'aborde chaque projet avec enthousiasme et dévouement, m'efforçant de dépasser les attentes et de fournir des solutions qui font la différence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center mb-3">
                  <Dribbble className="w-6 h-6 text-purple" />
                </div>
                <h3 className="text-lg font-bold mb-1">Basketball</h3>
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
                  <ShoppingBag className="w-6 h-6 text-purple" />
                </div>
                <h3 className="text-lg font-bold mb-1">Revente</h3>
                <p className="text-sm text-white/70 text-center">Vêtements & chaussures</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-4 text-center">
                <h3 className="text-purple text-3xl font-bold mb-1">1+</h3>
                <p className="text-sm text-white/70">Années d'expérience</p>
              </div>
              <div className="glass-card p-4 text-center">
                <h3 className="text-purple text-3xl font-bold mb-1">7+</h3>
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
