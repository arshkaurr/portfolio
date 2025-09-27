export function Skills() {
  const skillCategories = [
    {
      title: "LANGUAGES",
      skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "OCaml"],
      color: "bg-pink-500"
    },
    {
      title: "FRAMEWORKS & TOOLS",
      skills: ["React", "Node.js", "Express", "Flask", "PostgreSQL", "Firebase", "Supabase", "Docker"],
      color: "bg-cyan-400"
    },
    {
      title: "OTHER TOOLS",
      skills: ["Git", "Google Cloud", "Tailwind CSS", "RESTful APIs", "Agile/Scrum", "Adobe Photoshop"],
      color: "bg-lime-400"
    }
  ];

  return (
    <section className="py-20 bg-purple-50 relative">
      {/* Geometric decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-purple-500 transform rotate-45"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-pink-500"></div>
      <div className="absolute top-1/2 left-0 w-6 h-32 bg-cyan-400"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-black mb-16 text-center tracking-tighter transform -rotate-1">
          SKILLS & TECH
        </h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`${category.color} text-black p-8 border-4 border-black transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
              <h3 className="text-3xl font-black mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="bg-black text-white px-4 py-3 font-bold text-center transform hover:scale-105 transition-transform duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-card border-4 border-black p-8 transform rotate-1">
          <h3 className="text-3xl font-black mb-6 text-center">EDUCATION</h3>
          <div className="text-center">
            <div className="bg-black text-white p-6 mb-4 inline-block">
              <h4 className="text-2xl font-black">Cornell University</h4>
              <p className="text-lg">College of Engineering</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-pink-500 text-black p-4">
                <h5 className="font-black text-lg mb-2">DEGREE</h5>
                <p>Bachelor of Science in Computer Science</p>
                <p>Minor in AI</p>
                <p className="font-bold">Expected May 2028</p>
              </div>
              <div className="bg-cyan-400 text-black p-4">
                <h5 className="font-black text-lg mb-2">ACADEMIC</h5>
                <p className="font-bold">GPA: 3.5 / 4.3</p>
                <p>Relevant coursework in backend development, data structures, and AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
