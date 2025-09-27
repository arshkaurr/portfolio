import { Button } from "./ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "ak2676@cornell.edu",
      href: "mailto:ak2676@cornell.edu",
      color: "bg-pink-500"
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "(347) 679-5636",
      href: "tel:+13476795636",
      color: "bg-cyan-400"
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      value: "arshdeepkaur13",
      href: "https://linkedin.com/in/arshdeepkaur13",
      color: "bg-lime-400"
    },
    {
      icon: Github,
      label: "GITHUB",
      value: "arshkaurr",
      href: "https://github.com/arshkaurr",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative">
      {/* Geometric decorations */}
      <div className="absolute top-10 left-0 w-24 h-24 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-32 h-32 bg-cyan-400 transform rotate-45"></div>
      <div className="absolute top-1/2 right-10 w-8 h-40 bg-lime-400"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-black mb-8 text-center tracking-tighter transform rotate-1">
          LET'S CONNECT
        </h2>
        
        <div className="bg-black text-white p-8 mb-12 text-center transform -rotate-1 max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed">
            Interested in <span className="bg-pink-500 text-black px-2 py-1 font-black">COLLABORATING</span> on 
            a project or want to discuss <span className="bg-cyan-400 text-black px-2 py-1 font-black">TECH</span> and 
            <span className="bg-lime-400 text-black px-2 py-1 font-black ml-2">NAIL ART</span>? 
            Let's chat!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${contact.color} text-black p-6 border-4 border-black transform ${
                  index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                } hover:rotate-0 transition-all duration-300 hover:scale-105 block`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-black text-white p-3">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black">{contact.label}</h3>
                    <p className="text-lg">{contact.value}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        
        <div className="text-center">
          <div className="bg-purple-500 text-white p-8 border-4 border-black transform rotate-1 inline-block">
            <h3 className="text-2xl font-black mb-4">CURRENTLY SEEKING</h3>
            <div className="space-y-2 text-lg">
              <p>• Summer 2026 Software Engineering Internships</p>
              <p>• Open Source Collaboration Opportunities</p>
              <p>• Creative Tech Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
