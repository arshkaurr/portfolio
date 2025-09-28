import { Suspense, lazy } from "react";

import blobGraphic from "@/assets/blob.png";
import swirlGraphic from "@/assets/swirl.png";
import swirlCopyGraphic from "@/assets/swirl copy.png";
import starGraphic from "@/assets/star.png";
import starCopyGraphic from "@/assets/star copy.png";
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
      {/* Decorative hero imagery */}
      <img
        src={starCopyGraphic}
        alt=""
        aria-hidden="true"
        className="absolute w-40 md:w-36 pointer-events-none select-none drop-shadow-lg rotate-3 z-10"
        style={{ top: "8%", left: "0.1%" }}
      />
      <img
        src={starGraphic}
        alt=""
        aria-hidden="true"
        className="absolute w-40 md:w-36 pointer-events-none select-none drop-shadow-lg -rotate-6 z-10"
        style={{ bottom: "0.5%", right: "6%" }}
      />
      <img
        src={swirlCopyGraphic}
        alt=""
        aria-hidden="true"
        className="absolute w-40 md:w-40 opacity-80 pointer-events-none select-none rotate-90 z-10"
        style={{ top: "10%", right: "6%" }}
      />
      <img
        src={swirlGraphic}
        alt=""
        aria-hidden="true"
        className="absolute w-40 md:w-40 opacity-80 pointer-events-none select-none -rotate-6 z-10"
        style={{ bottom: "15%", left: "2%" }}
      />
      
      <div className="text-center z-10 max-w-4xl mx-auto px-4 relative">
        <div
          className="absolute pointer-events-none z-0"
          style={{ top: "48%", left: "50%", transform: "translate(-50%, -48%)" }}
          aria-hidden="true"
        >
          <div
            className="relative flex items-center justify-center"
            style={{ transform: "translateX(14%) translateY(-6%)" }}
          >
            <img
              src={blobGraphic}
              alt=""
              style={{ opacity: 0.65, transform: "scale(2.8) rotate(-30deg)", width: "min(42rem, 95vw)" }}
            />
          </div>
        </div>
        <div className="relative z-10">
          <h1 className="text-8xl md:text-6.5xl font-black text-white drop-shadow-lg mb-5 tracking-tighter">
            ARSHDEEP
          </h1>
          <h2 className="text-6xl md:text-6xl font-black text-white drop-shadow-md mb-6 tracking-tighter">
            KAUR
          </h2>
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
