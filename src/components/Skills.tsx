
import React, { useEffect, useRef, useState } from "react";
import { Code, Palette, FileCode, BarChart3, Coffee } from "lucide-react";

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
    icon: <Coffee className="w-10 h-10 text-purple" />,
    title: "Java Development",
    description: "Building robust Java applications and services"
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-purple" />,
    title: "Data Analysis with R",
    description: "Analyzing and visualizing complex data sets using R"
  }
];

const Skills = () => {
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
