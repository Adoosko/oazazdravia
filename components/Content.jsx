import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col gap-16 items-center text-center mb-11 lg:mb-20">
      <h3 className="text-3xl lg:text-5xl font-bold text-white">
        <span className="text-primary">Čo</span> ponúkame{" "}
        <span className="text-primary"> .</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-4 gap-7">
        <div class="max-w-sm p-6 e border rounded-lg shadow bg-zinc-800 border-primary">
          <a href="/galeria">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
              Ubytovanie a Stravovanie
            </h5>
          </a>
          <p class="mb-3 font-normal text-muted-foreground">
            Ponúkame pohodlné a štýlové ubytovanie v pokojnom prostredí
          </p>
          <a
            href="/galeria"
            class="inline-flex font-medium items-center text-primary hover:underline"
          >
            Pozrieť si galériu
          </a>
        </div>
        <div class="max-w-sm p-6 e border rounded-lg shadow bg-zinc-800 border-gray-700">
          <a href="/galeria">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
              Sauna a Kúpele
            </h5>
          </a>
          <p class="mb-3 font-normal text-muted-foreground">
            Zažite hlbokú relaxáciu a obnovu v našich saunách a kúpeľoch
          </p>
          <a
            href="/galeria"
            class="inline-flex font-medium items-center text-primary hover:underline"
          >
            Pozrieť si galériu
          </a>
        </div>
        <div class="max-w-sm p-6 e border rounded-lg shadow bg-zinc-800 border-gray-700">
          <a href="/galeria">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
              Meditačné a Relaxačné Techniky
            </h5>
          </a>
          <p class="mb-3 font-normal text-muted-foreground">
            Ponorte sa do sveta vnútorného pokoja a rovnováhy s našimi
            meditačnými a relaxačnými technikami
          </p>
          <a
            href="/galeria"
            class="inline-flex font-medium items-center text-primary hover:underline"
          >
            Pozrieť si galériu
          </a>
        </div>
        <div class="max-w-sm p-6 e border rounded-lg shadow bg-zinc-800 border-primary">
          <a href="/galeria">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
              Fitness a Pohybové Aktivity
            </h5>
          </a>
          <p class="mb-3 font-normal text-muted-foreground">
            Podporte svoje zdravie a vitalitu s našimi rozmanitými fitness a
            pohybovými aktivitami:
          </p>
          <a
            href="/galeria"
            class="inline-flex font-medium items-center text-primary hover:underline"
          >
            Pozrieť si galériu
          </a>
        </div>
      </div>
      <div class="py-5">
        <div class="py-8 text-center">
          <h3 class="font-manrope text-3xl lg:text-5xl text-white mb-7 font-bold ">
            <span className="text-primary"> Nejaké </span>otázky? Kontaktujte
            nás <span className="text-primary">. </span>
          </h3>
        </div>
        <div class="flex justify-center items-center gap-3">
          <a
            href="/about"
            class="border font-bold border-primary rounded-lg shadow-md py-3 px-6 flex items-center gap-2 transition-all duration-500 text-sm text-primary hover:bg-white hover:text-zinc-900"
          >
            Galeria
          </a>
          <a
            href="/kontakt"
            class="bg-primary font-bold rounded-lg shadow-md py-3 px-6 flex items-center gap-2 transition-all duration-500  text-sm text-white hover:bg-secondary hover:text-zinc-900"
          >
            Kontakt
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
