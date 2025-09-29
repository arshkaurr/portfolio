import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { NailArt } from "./components/NailArt";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <About />
        
        <Experience />
        
        <Projects />
        
        <Skills />
        
        <NailArt />
        
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-4">
            <div className="w-4 h-4 bg-pink-500"></div>
            <div className="w-4 h-4 bg-cyan-400"></div>
            <div className="w-4 h-4 bg-lime-400"></div>
            <div className="w-4 h-4 bg-purple-500"></div>
          </div>
          <p className="text-lg font-black">
            © 2025 ARSHDEEP KAUR. built with ❤️ and coffee.
          </p>
        </div>
      </footer>
    </div>
  );
}
