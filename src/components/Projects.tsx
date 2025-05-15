
import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Plateforme E-Commerce",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1415",
    description: "Une plateforme e-commerce entièrement responsive avec intégration de paiement",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Site Portfolio",
    category: "web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1472",
    description: "Site portfolio moderne avec animations et design responsive",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Application de Gestion de Tâches",
    category: "app",
    image: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?auto=format&fit=crop&q=80&w=1496",
    description: "Une application de gestion de tâches riche en fonctionnalités avec authentification",
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Site de Restaurant",
    category: "design",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1470",
    description: "Site élégant pour un restaurant avec système de réservation en ligne",
    tags: ["Figma", "Adobe XD"],
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "Application Météo",
    category: "app",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1470",
    description: "Application météo en temps réel avec prévisions basées sur la localisation",
    tags: ["JavaScript", "APIs", "CSS"],
    github: "#",
    demo: "#"
  },
  {
    id: 6,
    title: "Identité Visuelle d'Entreprise",
    category: "design",
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&q=80&w=1471",
    description: "Pack complet d'identité visuelle pour une startup technologique",
    tags: ["Photoshop", "Illustrator"],
    github: null,
    demo: "#"
  },
  {
    id: 7,
    title: "Suivi de Fitness",
    category: "app",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1470",
    description: "Suivez vos progrès fitness avec cette application personnalisable",
    tags: ["React Native", "Firebase", "Health API"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-dark relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple/5 to-dark/95 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">Mes Projets Récents</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Découvrez certains de mes travaux récents. Chaque projet représente un défi et une solution unique.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              className={`px-5 py-2 rounded-full transition-colors ${filter === 'all' ? 'bg-purple text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
              onClick={() => setFilter('all')}
            >
              Tous
            </button>
            <button 
              className={`px-5 py-2 rounded-full transition-colors ${filter === 'web' ? 'bg-purple text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
              onClick={() => setFilter('web')}
            >
              Web
            </button>
            <button 
              className={`px-5 py-2 rounded-full transition-colors ${filter === 'app' ? 'bg-purple text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
              onClick={() => setFilter('app')}
            >
              App
            </button>
            <button 
              className={`px-5 py-2 rounded-full transition-colors ${filter === 'design' ? 'bg-purple text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
              onClick={() => setFilter('design')}
            >
              Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card overflow-hidden group">
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-3">
                      {project.github && (
                        <a href={project.github} className="w-10 h-10 rounded-full bg-dark/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-purple transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                      <a href={project.demo} className="w-10 h-10 rounded-full bg-dark/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-purple transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-3 py-1 bg-purple/10 text-purple rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn bg-transparent border border-purple hover:bg-purple/10">
            Voir tous les projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
