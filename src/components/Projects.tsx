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
        link: {
        href: "https://github.com/arshkaurr/bigredrides",
        label: "See the code here"
      },
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
      link: {
        href: "https://drive.google.com/file/d/1Pu6QSW2ClZg3em3bRcolzeS73srP9z-p/view?usp=sharing",
        label: "Click here to see what QuickFi had to say!"
      },
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
    },
    {
      title: "TinyRV1 Processor",
      description: "Digital Logic & Computer Organization capstone project implementing a single cycle TinyRV1 Processor",
      tech: ["Verilog", "Quartus Prime", "FPGA", "RTL Design", "Assembly"],
      highlights: [
       "Designed and implemented a single-cycle TinyRV1 processor in Verilog using Quartus Prime, synthesized to an FPGA as part of an embedded system",
       "Wrote assembly programs (including an accumulate loop and door-monitor counter for a distance sensor) for hardware",
       "Designed a specialized accumulate accelerator datapath with an FSM-based control unit and evaluated tradeoffs"
      ],
      color: "bg-lime-400",
      date: "November 2025"
    },
    {
      title: "AI Market Intelligence & Sentiment",
      description: "Market intelligence pipeline analyzing AI-sector financial metrics and news sentiment for bubble signals",
      tech: ["Python", "Pandas", "Matplotlib", "VADER", "TextBlob", "RoBERTa", "Transformers", "BERTopic"],
      highlights: [
        "Built a pipeline combining market data with news sentiment to track AI-sector “bubble” dynamics",
        "Applied NLP models and topic modeling to quantify sentiment across AI news articles",
        "Visualized sentiment vs. market movement to surface event-driven signals and valuation trends"
      ],
      color: "bg-cyan-400",
      date: "November 2025 - Present"
    },
    {
      title: "Bridge Marketplace RFP Autofill App",
      description: "AI-powered borrower registration and RFP autofill tool for small business loan applications",
      tech: ["AI/ML", "Supabase", "PostgreSQL", "RAG"],
      highlights: [
        "Developed AI-assisted workflows to auto-populate RFP responses from borrower data",
        "Improved turnaround time for loan applications by streamlining document completion"
      ],
      color: "bg-pink-500",
      date: "2025"
    },
    {
      title: "NYS Food Processors RAG Chatbot",
      description: "Centralized database and calendar with a RAG chatbot to keep processor resources up to date",
      tech: ["RAG", "PostgreSQL", "Supabase", "AI/ML"],
      highlights: [
        "Built a central resource database and calendar for New York State food processors",
        "Created a chatbot and agent to update and retrieve structured resource data"
      ],
      color: "bg-lime-400",
      date: "2025 - Present"
    },
    {
      title: "localwave",
      description: "Find your local radio station whereever you go.",
      tech: ["Typescript", "CSS", "HTML", "React", "Lovable"],
      highlights: [
       "Integrated open-source Radio Browser API to pull location specific radio stations",
       "Used low-code tools to design frontend and integrate with written backend",
       "Iterating on in order to allow radio stations to promote their stations higher on findings"
      ],
      link: {
        href: "https://github.com/arshkaurr/local-broadcast-finder",
        label: "See the code here"
      },
      link_2: {
        href: "https://localwave.lovable.app/",
        label: "See the website here"
      },
      color: "bg-pink-500",
      date: "January 2026"
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

                {project.link && (
                  <div className="mt-6">
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-black text-sm gap-2"
                    >
                      <span className="border-b-2 border-current pb-0.5">{project.link.label}</span>
                    </a>
                  </div>
                )}
                {project.link_2 && (
                  <div className="mt-6">
                    <a
                      href={project.link_2.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-black text-sm gap-2"
                    >
                      <span className="border-b-2 border-current pb-0.5">{project.link_2.label}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
