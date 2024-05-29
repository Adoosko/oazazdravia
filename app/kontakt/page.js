import { Divide } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className=" mx-auto text-center max-w-[1440px] items-center flex flex-col pt-24 h-full w-full px-8 lg:px-3">
      <h3 class=" text-3xl lg:text-5xl text-white mb-7 font-bold ">
        <span className="text-primary"> Nejaké </span>otázky? Kontaktujte nás{" "}
        <span className="text-primary">. </span>
      </h3>
      <div class=" grid sm:grid-cols-2 items-center gap-16 mt-20 mx-auto max-w-4xl bg-transparent text-white ">
        <div>
          <h1 class="text-3xl font-bold">Napište nám</h1>
          <p class="text-sm text-gray-400 mt-3">
            Radi vám pomôžeme s rezerváciami, poskytneme podrobnosti o našich
            wellness balíkoch, alebo odpovieme na akékoľvek vaše otázky.
          </p>
          <div class="mt-12">
            <h2 class="text-lg font-extrabold">Email</h2>
            <ul class="mt-3">
              <li class="flex items-center">
                <div class="bg-zinc-800 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#fff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a href="" class="text-primary text-sm ml-3">
                  <strong>kontakt@oazazdravia.com</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form class="ml-auo space-y-4">
          <input
            type="text"
            placeholder="Meno"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-primary"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-primary"
          />
          <input
            type="text"
            placeholder="Predmet"
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-primary"
          />
          <textarea
            placeholder="Správa"
            rows="6"
            class="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-primary"
          ></textarea>
          <button
            type="button"
            class="text-white bg-primary hover:bg-transparent hover:text-primary 
             duration-300 font-semibold rounded-md text-sm px-4 py-3 w-full border-primary border"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
