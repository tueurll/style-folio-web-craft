
import React, { useState } from "react";
import { ProjectDialog } from "./ProjectDialog";

const projects = [
  {
    id: 1,
    title: "Refonte Site Web d'Entreprise",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1415",
    description: "Refonte complète du site web d'une entreprise pour des élèves de 3ème",
    fullDescription: "Projet de refonte complète d'un site web d'entreprise réalisé dans le cadre d'un cours pour des élèves de 3ème. Le projet incluait la création d'une nouvelle identité visuelle, l'amélioration de l'expérience utilisateur, et l'optimisation pour les appareils mobiles. Utilisation de technologies web modernes pour créer une interface responsive et intuitive.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    duration: "3 mois",
    period: "Septembre - Décembre 2023"
  },
  {
    id: 2,
    title: "Administration Base de Données Bowling",
    category: "database",
    image: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?auto=format&fit=crop&q=80&w=1496",
    description: "Création et administration d'une base de données pour une entreprise de bowling",
    fullDescription: "Conception et mise en place d'un système de gestion de base de données pour une entreprise de bowling. Le système permet de gérer les réservations, les scores des joueurs, les équipements, et les statistiques. Implémentation de requêtes optimisées et de procédures stockées pour améliorer les performances. Interface d'administration pour la gestion quotidienne des données.",
    tags: ["SQL", "PostgreSQL", "Administration BD", "Gestion de données"],
    duration: "2 mois",
    period: "Janvier - Mars 2024"
  },
  {
    id: 3,
    title: "Algorithme Analyse de Textes",
    category: "app",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1472",
    description: "Algorithme en Java permettant d'identifier le sujet principal d'un article aléatoire",
    fullDescription: "Développement d'un algorithme de traitement du langage naturel en Java capable d'analyser des articles et d'en extraire le sujet principal. L'algorithme utilise des techniques de tokenisation, d'analyse fréquentielle et de classification pour déterminer les thèmes dominants. Implémentation d'un système de scoring pour évaluer la pertinence des sujets identifiés.",
    tags: ["Java", "Algorithme", "NLP", "Analyse de texte"],
    duration: "6 semaines",
    period: "Avril - Mai 2024"
  },
  {
    id: 4,
    title: "Configuration Poste de Développement",
    category: "system",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1470",
    description: "Installation complète d'un poste de développement sous Debian 12",
    fullDescription: "Configuration complète d'un environnement de développement professionnel sur Debian 12. Installation et configuration d'outils de développement (IDE, compilateurs, serveurs), mise en place de l'environnement Git, configuration des variables d'environnement, et installation des dépendances nécessaires. Documentation complète du processus pour faciliter la reproduction.",
    tags: ["Debian", "Linux", "Configuration", "Développement"],
    duration: "1 semaine",
    period: "Juin 2024"
  },
  {
    id: 5,
    title: "Installation VM & Services Web",
    category: "system",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1470",
    description: "Installation d'une machine virtuelle avec Apache, PostgreSQL et création d'un guide d'installation en anglais",
    fullDescription: "Mise en place d'une infrastructure virtualisée comprenant Apache comme serveur web et PostgreSQL comme système de gestion de base de données. Configuration de la sécurité, optimisation des performances, et mise en place de sauvegardes automatiques. Rédaction d'un guide d'installation détaillé en anglais pour faciliter la reproduction de l'environnement.",
    tags: ["VM", "Apache", "PostgreSQL", "Documentation"],
    duration: "2 semaines",
    period: "Juillet 2024"
  },
  {
    id: 6,
    title: "Projet de Montage Vidéo",
    category: "media",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1470",
    description: "Création et édition de contenu vidéo avec des outils professionnels de montage",
    fullDescription: "Réalisation de projets de montage vidéo utilisant des logiciels professionnels. Travail sur l'étalonnage colorimétrique, l'ajout d'effets visuels, la synchronisation audio, et l'optimisation pour différentes plateformes. Création de contenu adapté aux réseaux sociaux avec respect des formats et contraintes techniques spécifiques.",
    tags: ["Montage", "Vidéo", "Post-production", "Créativité"],
    duration: "1 mois",
    period: "Août 2024"
  },
  {
    id: 7,
    title: "Application d'Organisation d'Événements",
    category: "app",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1469",
    description: "Développement d'une application complète pour la gestion et l'organisation d'événements",
    fullDescription: "Création d'une application web complète pour la gestion d'événements. Fonctionnalités incluant la planification, la gestion des invitations, le suivi des RSVP, la gestion des budgets, et la coordination des équipes. Interface utilisateur intuitive avec tableau de bord personnalisable et notifications en temps réel. Intégration avec des API externes pour les paiements et les communications.",
    tags: ["React", "Gestion", "Événements", "Interface utilisateur"],
    duration: "4 mois",
    period: "Septembre - Décembre 2024"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

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
            <div 
              key={project.id} 
              className="glass-card overflow-hidden group cursor-pointer transition-all hover:scale-105"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs px-3 py-1 bg-purple/10 text-purple rounded-full">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-3 py-1 bg-purple/10 text-purple rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <ProjectDialog 
          project={selectedProject}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>
    </section>
  );
};

export default Projects;
