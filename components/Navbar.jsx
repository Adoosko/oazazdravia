import { Menu } from "lucide-react";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  const NAV_LINKS = [
    {
      label: "Kontakt",
      href: "/kontakt",
    },
    {
      label: "Galeria",
      href: "/galeria",
    },
    {
      label: "O nás",
      href: "/about",
    },
  ];
  return (
    <nav
      className=" fixed top-0 z-50  shadow-xl  border-b-2 border-green-500 flex justify-between items-center w-full h-16 bg-zinc-900 py-auto px-6
    text-slate-200"
    >
      <div className=" items-center flex font-extrabold">
        <Image src={"/2.svg"} width={57} height={57} alt="logo"></Image>
        <h3 className="text-2xl">Oáza Zdravia.</h3>
      </div>
      <ul className="flex gap-10 max-md:hidden">
        <li>
          <Link className="font-bold text-base" href={"/"}>
            <Home className=" text-white hover:text-primary hover:transition-all duration-300"></Home>
          </Link>
        </li>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              className="font-bold text-base hover:text-primary hover:transition-all duration-300 text-white"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-3xl hidden max-md:block">
        <Sheet>
          <SheetTrigger className="text-white  hover:text-primary hover:transition-all duration-300">
            <Menu className=""></Menu>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] bg-zinc-900 text-slate-200">
            <ul className="flex gap-10 flex-col font-bold text-2xl justify-center items-center  ">
              <li>
                <Link className="" href={"/"}>
                  <Home className=" text-white  hover:text-primary hover:transition-all duration-300"></Home>
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    className="hover:text-primary hover:transition-all duration-300"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
