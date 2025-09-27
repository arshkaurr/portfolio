import { Suspense, lazy } from "react";

import { Button } from "./ui/button";

const DitherBackground = lazy(() =>
  import("./ui/dither-background").then((module) => ({
    default: module.DitherBackground,
  }))
);

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <Suspense fallback={null}>
        <DitherBackground />
      </Suspense>
      {/* Brutal geometric background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 transform rotate-12 z-10"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-400 transform -rotate-45 z-10"></div>
      <div className="absolute top-40 right-20 w-16 h-40 bg-lime-400 z-10"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-purple-500 rounded-full z-10"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-8xl md:text-9xl font-black text-white drop-shadow-lg mb-6 tracking-tighter">
          ARSHDEEP
        </h1>
        <h2 className="text-6xl md:text-7xl font-black text-white drop-shadow-md mb-8 tracking-tighter">
          KAUR
        </h2>
        
        <div className="bg-black text-white p-6 mb-8 transform -rotate-1 inline-block">
          <p className="text-xl md:text-2xl font-bold uppercase tracking-wide">
            CS Student × Nail Artist × Tech Builder
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-pink-500 hover:bg-pink-600 text-white font-black text-lg px-8 py-4 transform rotate-1 border-4 border-black"
            onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
          >
            VIEW PROJECTS
          </Button>
          <Button 
            className="bg-cyan-400 hover:bg-cyan-500 text-white font-black text-lg px-8 py-4 transform -rotate-1 border-4 border-black"
            onClick={() => document.getElementById('nailart')?.scrollIntoView({behavior: 'smooth'})}
          >
            NAIL ART
          </Button>
        </div>
      </div>
    </section>
  );
}
