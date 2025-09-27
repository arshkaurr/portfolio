export function Projects() {
  const projects = [
    {
      title: "BigRedRides",
      description: "Carpooling app for Cornell students to simplify off-campus transportation through peer ride-sharing",
      tech: ["Python", "SQLAlchemy", "Flask", "Google Cloud", "Docker"],
      highlights: [
        "Built backend with Python (SQLAlchemy and Flask) to enable secure and location-aware ride matching",
        "Deployed Dockerized backend on Google Cloud using Ubuntu for scalable performance"
      ],
      color: "bg-pink-500",
      date: "November 2024"
    },
    {
      title: "QuickFi Due Diligence Agent",
      description: "AI-powered automation tool for vendor verification and due diligence processes",
      tech: ["Supabase", "PostgreSQL", "AI/ML"],
      highlights: [
        "Engineered APIs using Supabase and PostgreSQL to automate vendor checks, reducing due diligence time by 60%"
      ],
      color: "bg-cyan-400",
      date: "March - May 2025"
    },
    {
      title: "Transaction Processing API",
      description: "Flask-based REST API for validating and processing international bank transactions",
      tech: ["Flask", "Python", "Pandas", "REST API"],
      highlights: [
        "Implemented schema checks, API-key authentication, and error handling for secure workflows",
        "Automated storage of validated records into structured CSVs with Pandas"
      ],
      color: "bg-lime-400",
      date: "August 2025"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-purple-50 relative">
      {/* Geometric decorations */}
      <div className="absolute top-20 left-0 w-8 h-60 bg-pink-500 transform rotate-12"></div>
      <div className="absolute bottom-20 right-0 w-8 h-60 bg-cyan-400 transform -rotate-12"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-black mb-16 text-center tracking-tighter transform -rotate-1">
          PROJECTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`${project.color} text-black border-4 border-black transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:rotate-0 transition-transform duration-300`}>
              <div className="p-6">
                <div className="bg-black text-white px-3 py-1 font-black text-sm mb-4 inline-block">
                  {project.date}
                </div>
                
                <h3 className="text-2xl font-black mb-4">{project.title}</h3>
                
                <p className="text-lg mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-black mb-2">TECH STACK:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-black text-white px-2 py-1 font-bold text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="bg-black text-white w-5 h-5 flex items-center justify-center font-black mr-3 mt-1 flex-shrink-0 text-xs">
                        •
                      </span>
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}