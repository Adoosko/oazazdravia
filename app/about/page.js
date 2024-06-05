import { Divide } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className=" mx-auto text-center max-w-[1440px] items-center flex flex-col pt-24  w-full px-8 lg:px-3">
      <h3 class=" text-3xl lg:text-5xl text-white mb-7 font-bold ">
        O <span className="text-primary">nás </span>
      </h3>
      <p className="text-lg font-medium text-muted-foreground">
        Vitajte v našom wellness centre, kde sa sústredíme na vaše zdravie,
        pohodu a vnútornú rovnováhu. Naša firma vznikla s cieľom vytvoriť
        miesto, kde môžete uniknúť každodennému stresu a nájsť harmóniu tela a
        mysle. Naša Misia Naším poslaním je poskytovať najvyššiu úroveň wellness
        služieb, ktoré podporujú zdravie a vitalitu našich klientov. Veríme, že
        kombináciou tradičných a moderných techník môžeme dosiahnuť celkovú
        pohodu pre každého, kto nás navštívi.
      </p>
    </div>
  );
};

export default page;
