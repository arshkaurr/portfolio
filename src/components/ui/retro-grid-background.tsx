import { useEffect, useRef, useState } from "react";

import { cn } from "./utils";

import "./retro-grid-background.css";

type RetroGridBackgroundProps = {
  className?: string;
};

/**
 * Adapted from the Retro Grid background on reactbits.dev.
 * Adds a vintage beam, animated grid, and cursor-following glow.
 */
export function RetroGridBackground({ className }: RetroGridBackgroundProps) {
  const frame = useRef<number>();
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const updateSpotlight = (event: MouseEvent) => {
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }

      frame.current = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        setSpotlight({ x, y });
      });
    };

    window.addEventListener("pointermove", updateSpotlight);

    return () => {
      window.removeEventListener("pointermove", updateSpotlight);
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <div className={cn("retro-grid", className)}>
      <div className="retro-grid__beam" />
      <div className="retro-grid__gradient" />

      <div className="retro-grid__plane">
        <div className="retro-grid__grid" />
        <div
          className="retro-grid__spotlight"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(42,157,143,0.35), transparent 45%)`,
          }}
        />
      </div>

      <div
        className="retro-grid__glow"
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(226,115,61,0.25), transparent 45%)`,
        }}
      />
    </div>
  );
}
