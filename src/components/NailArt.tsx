import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NailArt() {
  const nailArtImages = [
    {
      src: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwY29sb3JmdWwlMjBtYW5pY3VyZXxlbnwxfHx8fDE3NTg1NTIxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Colorful nail art design",
      title: "Geometric Patterns"
    },
    {
      src: "https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMG5haWwlMjBkZXNpZ258ZW58MXx8fHwxNzU4NTUyMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Abstract geometric nail design",
      title: "Abstract Art"
    },
    {
      src: "https://images.unsplash.com/photo-1552311348-edee41a6b482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBuZW9uJTIwbmFpbCUyMHBvbGlzaHxlbnwxfHx8fDE3NTg1NTIxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Bright neon nail polish",
      title: "Neon Vibes"
    }
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
                />
                <div className="p-4">
                  <h3 className="text-xl font-black text-center">{image.title}</h3>
                </div>
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
                "Geometric patterns",
                "Abstract designs", 
                "Color gradients",
                "Minimalist styles",
                "Bold graphics",
                "Custom requests"
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
