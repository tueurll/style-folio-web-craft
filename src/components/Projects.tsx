
import React, { useState } from "react";
import { Github, ExternalLink, FileText, Database, Server, Code, Cpu } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Refonte Site Web d'Entreprise",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1415",
    description: "Refonte complète du site web d'une entreprise pour des élèves de 3ème",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    id: 2,
    title: "Administration Base de Données Bowling",
    category: "database",
    image: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?auto=format&fit=crop&q=80&w=1496",
    description: "Création et administration d'une base de données pour une entreprise de bowling",
    tags: ["SQL", "PostgreSQL", "Administration BD", "Gestion de données"]
  },
  {
    id: 3,
    title: "Algorithme Analyse de Textes",
    category: "app",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1472",
    description: "Algorithme en Java permettant d'identifier le sujet principal d'un article aléatoire",
    tags: ["Java", "Algorithme", "NLP", "Analyse de texte"]
  },
  {
    id: 4,
    title: "Configuration Poste de Développement",
    category: "system",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1470",
    description: "Installation complète d'un poste de développement sous Debian 12",
    tags: ["Debian", "Linux", "Configuration", "Développement"]
  },
  {
    id: 5,
    title: "Installation VM & Services Web",
    category: "system",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1470",
    description: "Installation d'une machine virtuelle avec Apache, PostgreSQL et création d'un guide d'installation en anglais",
    tags: ["VM", "Apache", "PostgreSQL", "Documentation"]
  },
  {
    id: 6,
    title: "Projet de Montage Vidéo",
    category: "media",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1470",
    description: "Création et édition de contenu vidéo avec des outils professionnels de montage",
    tags: ["Montage", "Vidéo", "Post-production", "Créativité"]
  },
  {
    id: 7,
    title: "Application d'Organisation d'Événements",
    category: "app",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1469",
    description: "Développement d'une application complète pour la gestion et l'organisation d'événements",
    tags: ["React", "Gestion", "Événements", "Interface utilisateur"]
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
          <h2 className="section-title">Mes Projets</h2>
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
              className={`px-5 py-2 rounded-full transition-colors ${filter === 'database' ? 'bg-purple text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
              onClick={() => setFilter('database')}
            >
              Base de données
            </button>
            <button 
              className={`px-5 py-2 rounded-full transition-colors ${filter === 'system' ? 'bg-purple text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
              onClick={() => setFilter('system')}
            >
              Système
            </button>
            <button 
              className={`px-5 py-2 rounded-full transition-colors ${filter === 'media' ? 'bg-purple text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
              onClick={() => setFilter('media')}
            >
              Média
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
      </div>
    </section>
  );
};

export default Projects;
