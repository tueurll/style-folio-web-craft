
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark/95 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">Me Contacter</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Vous avez un projet en tête ou vous voulez simplement dire bonjour ? N'hésitez pas à me contacter. Je serais ravi d'échanger avec vous !
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Informations de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                    <Phone className="text-purple w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Téléphone</h4>
                    <p className="text-white/70">06 17 42 69 87</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                    <Mail className="text-purple w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-white/70">rayan08.nyabi@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                    <MapPin className="text-purple w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Localisation</h4>
                    <p className="text-white/70">Grenoble, France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
