
import React from "react";
import { Code, Palette, Coffee, BarChart3, Video, Calendar } from "lucide-react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-purple" />,
    title: "Développement Web",
    description: "Création de sites web responsifs et interactifs avec des technologies modernes"
  },
  {
    icon: <Palette className="w-10 h-10 text-purple" />,
    title: "Design Web",
    description: "Conception d'interfaces belles et conviviales qui engagent les utilisateurs"
  },
  {
    icon: <Coffee className="w-10 h-10 text-purple" />,
    title: "Développement Java",
    description: "Construction d'applications et de services Java robustes"
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-purple" />,
    title: "Analyse de données avec R",
    description: "Analyse et visualisation d'ensembles de données complexes avec R"
  },
  {
    icon: <Video className="w-10 h-10 text-purple" />,
    title: "Montage Vidéo",
    description: "Création et édition de contenu vidéo professionnel"
  },
  {
    icon: <Calendar className="w-10 h-10 text-purple" />,
    title: "App d'Organisation",
    description: "Développement d'applications pour la gestion d'événements"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark/95 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">Mes Compétences & Services</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Je propose une gamme de services pour vous aider à atteindre vos objectifs numériques. Voici ce que je peux faire pour vous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-8">Éducation & Expérience</h3>
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">Achat revente de vêtements & Sneakers</h4>
                  <span className="text-purple text-sm">2023 - Présent</span>
                </div>
                <p className="text-white/70">Entrepreneur</p>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">Prof particulier d'anglais</h4>
                  <span className="text-purple text-sm">2023 - Présent</span>
                </div>
                <p className="text-white/70">Indépendant</p>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">Opérateur usine</h4>
                  <span className="text-purple text-sm">Déc. 2022 - Mars 2023</span>
                </div>
                <p className="text-white/70">ARDES</p>
              </div>

              <div className="glass-card p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">Baby-sitter</h4>
                  <span className="text-purple text-sm">2018 - Présent</span>
                </div>
                <p className="text-white/70">Indépendant</p>
              </div>

              <div className="glass-card p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">Entretien de console PS4</h4>
                  <span className="text-purple text-sm">2023 - Présent</span>
                </div>
                <p className="text-white/70">Indépendant</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8">Projets Réalisés</h3>
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-center mb-3">
                  <Video className="w-6 h-6 text-purple mr-3" />
                  <h4 className="font-bold">Projet de Montage Vidéo</h4>
                </div>
                <p className="text-white/70">Création et édition de contenu vidéo avec des outils professionnels de montage</p>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="w-6 h-6 text-purple mr-3" />
                  <h4 className="font-bold">Application d'Organisation d'Événements</h4>
                </div>
                <p className="text-white/70">Développement d'une application complète pour la gestion et l'organisation d'événements</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Services Proposés</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-6 text-center transition-transform hover:scale-105 duration-300">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple/10">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-white/70 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
