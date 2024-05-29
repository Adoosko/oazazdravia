import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer class="w-full   ">
      <div class="mx-auto  px-4 sm:px-6 lg:px-8">
        <div class="mt-20 py-7">
          <div class="flex items-center justify-center flex-col gap-7 ">
            <span class="text-sm text-white ">
              ©<a href="https://pagedone.io/">Oáza Zdravia</a> 2024, Developed
              by Adrian Finik
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
