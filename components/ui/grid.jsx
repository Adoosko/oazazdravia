import React, { ReactNode } from "react";

export function GridBackground({ children }) {
  return (
    <div className="h-[40rem] w-full  bg-zinc-900   bg-grid-white/[0.2] relative flex items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center  bg-zinc-900  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
