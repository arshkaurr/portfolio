export function About() {
  return (
    <section id="about" className="py-20 bg-lime-50 relative">
      {/* Geometric decorations */}
      <div className="absolute top-10 left-0 w-6 h-40 bg-pink-500"></div>
      <div className="absolute bottom-10 right-0 w-6 h-40 bg-cyan-400"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-6xl font-black mb-8 tracking-tighter transform -rotate-1">
              ABOUT ME
            </h2>
            
            <div className="bg-black text-white p-6 mb-6 transform rotate-1">
              <p className="text-lg leading-relaxed">
                I'm a <span className="bg-pink-500 text-black px-2 py-1 font-black">SOPHOMORE</span> at Cornell University 
                studying Computer Science with a minor in AI. When I'm not building full-stack applications 
                or optimizing backend systems, you'll find me creating intricate nail art designs.
              </p>
            </div>
            
            <div className="bg-card border-4 border-black p-6 mb-6 transform -rotate-1">
              <p className="text-lg leading-relaxed">
                I love the intersection of <span className="bg-cyan-400 px-2 py-1 font-black">TECHNOLOGY</span> and 
                <span className="bg-lime-400 px-2 py-1 font-black ml-2">CREATIVITY</span>. 
                Whether it's debugging code or perfecting a geometric nail design, 
                I approach both with the same attention to detail and passion for innovation.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-pink-500 text-white p-6 transform rotate-2">
              <h3 className="text-2xl font-black mb-4">CURRENTLY</h3>
              <ul className="space-y-2 text-lg">
                <li>• Backend Developer at Generative AI At Cornell</li>
                <li>• Allyship Co-Director at Women in Computing</li>
                <li>• Building cool projects with React & Python</li>
              </ul>
            </div>
            
            <div className="bg-cyan-400 text-black p-6 transform -rotate-2">
              <h3 className="text-2xl font-black mb-4">INTERESTS</h3>
              <ul className="space-y-2 text-lg font-medium">
                <li>• Nail art & creative design</li>
                <li>• Working out & staying active</li>
                <li>• NYT crossword puzzles</li>
                <li>• Learning new programming languages</li>
              </ul>
            </div>
            
            <div className="bg-purple-500 text-white p-6 transform rotate-1">
              <h3 className="text-2xl font-black mb-4">LANGUAGES</h3>
              <ul className="space-y-2 text-lg">
                <li>• English (fluent)</li>
                <li>• Punjabi (intermediate)</li>
                <li>• Python, TypeScript, Java...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
