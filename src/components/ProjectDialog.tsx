import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Clock } from "lucide-react";
import { ProjectAnimation } from "./project-animations/ProjectAnimation";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  tags: string[];
  duration: string;
  period: string;
}

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectDialog = ({ project, open, onOpenChange }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-dark/95 border-purple/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white mb-4">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Animation 3D */}
          <div className="relative h-64 md:h-full min-h-[300px] bg-dark/50 rounded-lg overflow-hidden border border-purple/20">
            <ProjectAnimation projectId={project.id} />
          </div>

          {/* Détails du projet */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="w-5 h-5 text-purple" />
                <span className="font-semibold">Durée:</span>
                <span>{project.duration}</span>
              </div>
              
              <div className="flex items-center gap-2 text-white/70">
                <Calendar className="w-5 h-5 text-purple" />
                <span className="font-semibold">Période:</span>
                <span>{project.period}</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Description</h3>
              <p className="text-white/70 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-purple/20 text-purple rounded-full text-sm border border-purple/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-48 rounded-lg overflow-hidden mt-6">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
