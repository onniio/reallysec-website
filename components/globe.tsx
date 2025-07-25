"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// https://github.com/shuding/cobe
export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800 * 2, // 放大：从 600 * 2 增加到 800 * 2
      height: 800 * 2, // 放大：从 600 * 2 增加到 800 * 2
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude - 保持原有城市不变
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [35.6762, 139.6503], size: 0.11 },
        { location: [51.5074, -0.1278], size: 0.09 },
        { location: [-23.5505, -46.6333], size: 0.08 },
        { location: [52.3676, 4.9041], size: 0.06 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [-34.6118, -58.3960], size: 0.07 },
        { location: [31.2304, 121.4737], size: 0.09 },
        { location: [47.3769, 8.5417], size: 0.05 },
        { location: [22.3193, 114.1694], size: 0.03 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        width: 800, // 放大：从 600 增加到 800
        height: 800, // 放大：从 600 增加到 800
        maxWidth: "100%", 
        aspectRatio: 1 
      }}
      className={className}
    />
  );
};