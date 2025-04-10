
import React, { useEffect, useRef, useState } from "react";
import { Code, Palette, Zap, Database } from "lucide-react";

const skills = [
  { name: "HTML & CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "React", percentage: 80 },
  { name: "Node.js", percentage: 75 },
  { name: "UI/UX Design", percentage: 70 },
  { name: "TypeScript", percentage: 65 },
];

const services = [
  {
    icon: <Code className="w-10 h-10 text-purple" />,
    title: "Web Development",
    description: "Creating responsive, interactive websites with modern technologies"
  },
  {
    icon: <Palette className="w-10 h-10 text-purple" />,
    title: "Web Design",
    description: "Designing beautiful, user-friendly interfaces that engage users"
  },
  {
    icon: <Zap className="w-10 h-10 text-purple" />,
    title: "Performance Optimization",
    description: "Improving website speed and performance for better user experience"
  },
  {
    icon: <Database className="w-10 h-10 text-purple" />,
    title: "Backend Development",
    description: "Building robust server-side applications and APIs"
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark/95 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills & Services</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            I offer a range of services to help you achieve your digital goals. Here's what I can do for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div ref={skillsRef}>
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-purple">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: isVisible ? `${skill.percentage}%` : "0%" 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Education & Experience</h3>
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">Senior Web Developer</h4>
                  <span className="text-purple text-sm">2020 - Present</span>
                </div>
                <p className="text-white/70">TechCorp Inc.</p>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">Frontend Developer</h4>
                  <span className="text-purple text-sm">2018 - 2020</span>
                </div>
                <p className="text-white/70">DigitalSolutions Ltd.</p>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">BSc Computer Science</h4>
                  <span className="text-purple text-sm">2014 - 2018</span>
                </div>
                <p className="text-white/70">University of Technology</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Services I Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
