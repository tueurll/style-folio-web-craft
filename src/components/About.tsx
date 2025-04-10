
import React from "react";

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
                  alt="About Me" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -right-10 -bottom-10 glass-card p-4 z-20">
                <p className="text-purple font-bold text-lg md:text-xl">100+</p>
                <p className="text-sm text-white/70">Projects Completed</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-3/5">
            <h2 className="section-title">About Me</h2>
            <p className="text-white/70 mb-4">
              I'm a passionate web developer with a keen eye for design and a commitment to creating beautiful, functional websites. With 1 year of experience in the industry, I specialize in building responsive, user-friendly interfaces that drive results.
            </p>
            <p className="text-white/70 mb-4">
              Standing at 1m90 with braids and an athletic build, I bring both technical skills and a strong presence to any project I work on.
            </p>
            <p className="text-white/70 mb-8">
              My journey in web development began with a curiosity about how websites work, and it has evolved into a career that I truly love. I approach each project with enthusiasm and dedication, striving to exceed expectations and deliver solutions that make an impact.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="glass-card p-4 text-center">
                <h3 className="text-purple text-3xl font-bold mb-1">1+</h3>
                <p className="text-sm text-white/70">Years Experience</p>
              </div>
              <div className="glass-card p-4 text-center">
                <h3 className="text-purple text-3xl font-bold mb-1">100+</h3>
                <p className="text-sm text-white/70">Projects Completed</p>
              </div>
              <div className="glass-card p-4 text-center">
                <h3 className="text-purple text-3xl font-bold mb-1">50+</h3>
                <p className="text-sm text-white/70">Happy Clients</p>
              </div>
              <div className="glass-card p-4 text-center">
                <h3 className="text-purple text-3xl font-bold mb-1">10+</h3>
                <p className="text-sm text-white/70">Awards Received</p>
              </div>
            </div>

            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
