import React from "react";
import { GridBackground } from "./ui/grid";
import CarouselImage from "./CarouselImage";

const Hero = () => {
  return (
    <div>
      <GridBackground>
        <div className=" items-center flex flex-col gap-8  px-5  ">
          <h1 className=" text-secondary font-bold text-4xl md:text-5xl lg:text-7xl xl:text-8xl ">
            Rovnováha a Relax v Našom{" "}
            <span className="text-primary">Wellness</span> Centre{" "}
            <span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground text-xl lg:text-2xl z-10">
            Užite si dokonalý relax a obnovu v našom luxusnom wellness pobyte.
            Čaká vás komfortné ubytovanie, revitalizujúce masáže, sauny, vírivky
            a zdravá gastronómia. Doprajte si zaslúžený oddych a načerpajte novú
            energiu v harmonickom prostredí.
          </p>
        </div>
      </GridBackground>
    </div>
  );
};

export default Hero;
