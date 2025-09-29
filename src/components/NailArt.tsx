import nailsOne from "@/assets/nails1.JPG";
import pressons from "@/assets/pressons.png";
import nailsThree from "@/assets/nails3.jpg";

import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NailArt() {
  const nailArtImages = [
    { src: nailsOne, alt: "Nail art look 1" },
    { src: pressons, alt: "Nail art look 2", objectPosition: "center 60%" },
    { src: nailsThree, alt: "Nail art look 3" }
  ];

  return (
    <section id="nailart" className="py-20 bg-background relative">
      {/* Geometric decorations */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-32 h-16 bg-cyan-400 transform rotate-45"></div>
      <div className="absolute top-40 left-20 w-12 h-32 bg-lime-400"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-black mb-8 text-center tracking-tighter transform rotate-1">
          NAIL ART
        </h2>
        
        <div className="bg-black text-white p-6 mb-12 text-center transform -rotate-1 max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed">
            Where <span className="bg-pink-500 text-black px-2 py-1 font-black">CREATIVITY</span> meets 
            <span className="bg-cyan-400 text-black px-2 py-1 font-black ml-2">PRECISION</span>. 
            My nail art combines geometric patterns, bold colors, and technical skill 
            - just like my approach to coding!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {nailArtImages.map((image, index) => (
            <div key={index} className={`transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:rotate-0 transition-transform duration-300`}>
              <div className="border-4 border-black bg-card">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                  style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-pink-500 text-black p-8 border-4 border-black transform rotate-1">
            <h3 className="text-3xl font-black mb-6">MY PROCESS</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center">
                <span className="bg-black text-white w-8 h-8 flex items-center justify-center font-black mr-4">1</span>
                Sketch and plan the design
              </li>
              <li className="flex items-center">
                <span className="bg-black text-white w-8 h-8 flex items-center justify-center font-black mr-4">2</span>
                Base coat and prep
              </li>
              <li className="flex items-center">
                <span className="bg-black text-white w-8 h-8 flex items-center justify-center font-black mr-4">3</span>
                Layer colors strategically
              </li>
              <li className="flex items-center">
                <span className="bg-black text-white w-8 h-8 flex items-center justify-center font-black mr-4">4</span>
                Add details and effects
              </li>
              <li className="flex items-center">
                <span className="bg-black text-white w-8 h-8 flex items-center justify-center font-black mr-4">5</span>
                Seal with top coat
              </li>
            </ul>
          </div>
          
          <div className="bg-cyan-400 text-black p-8 border-4 border-black transform -rotate-1">
            <h3 className="text-3xl font-black mb-6">SPECIALTIES</h3>
            <div className="space-y-4">
              {[
                "GelX",
                "Builder Gel", 
                "Press ons",
                "Maximalist styles",
                "3D art",
                "Lots of colors!!"
              ].map((specialty, idx) => (
                <div key={idx} className="bg-black text-white px-4 py-2 font-bold inline-block mr-2 mb-2">
                  {specialty}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
