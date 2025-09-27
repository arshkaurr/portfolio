export function Experience() {
  const experiences = [
    {
      title: "Full-Stack Development Intern",
      company: "KamelRide",
      period: "July 2025 - September 2025",
      highlights: [
        "Built Firebase magic-link authentication and onboarding flow, streamlining sign-in and boosting retention",
        "Developed college-based filtering with dynamic badge display, enhancing student discovery and engagement",
        "Designed and optimized RESTful APIs for rides, bookings, payments, and authentication",
        "Secured platform with authentication, authorization, and data validation while working in Agile sprints"
      ],
      color: "bg-pink-500"
    },
    {
      title: "Backend Developer",
      company: "Generative AI At Cornell",
      period: "February 2025 - Present",
      highlights: [
        "Optimizing backend database workflows for AI-driven applications using Supabase, PostgreSQL, and TypeScript"
      ],
      color: "bg-cyan-400"
    },
    {
      title: "Allyship Co-Director",
      company: "Women in Computing at Cornell",
      period: "July 2025 - Present",
      highlights: [
        "Leading initiatives to integrate allyship as a core value across WICC's 40 person executive board",
        "Organized WICC's first general meeting in partnership with First Generation Student Union to recruit freshmen"
      ],
      color: "bg-lime-400"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background relative">
      {/* Geometric decorations */}
      <div className="absolute top-0 right-10 w-20 h-20 bg-purple-500 transform rotate-45"></div>
      <div className="absolute bottom-0 left-10 w-16 h-16 bg-pink-500"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-black mb-16 text-center tracking-tighter transform rotate-1">
          WORK EXPERIENCE
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`${exp.color} text-black p-8 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} border-4 border-black`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-3xl font-black mb-2">{exp.title}</h3>
                  <h4 className="text-2xl font-bold">{exp.company}</h4>
                </div>
                <div className="bg-black text-white px-4 py-2 font-black text-lg mt-4 md:mt-0">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-lg leading-relaxed">
                    <span className="bg-black text-white w-6 h-6 flex items-center justify-center font-black mr-4 mt-1 flex-shrink-0">
                      •
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
