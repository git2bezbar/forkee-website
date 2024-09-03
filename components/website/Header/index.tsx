"use client";

import { useState } from "react";
import Image from "next/image";
import menu from "@/assets/icons/menu.svg";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header
      className="relative px-8 lg:px-44 py-8 flex items-center justify-between"
    >
      <Image src="/logo.svg" alt="Forkee" width={115} height={25} />
      <ul className="lg:flex gap-8 items-center font-bold hidden">
        <li>
          <a href="#product">Produit</a>
        </li>
        <li>
          <a href="#pricing">Tarifs</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            className="px-6 py-4 bg-primary text-white rounded-[10px]"
            href="#"
          >
            Se connecter
          </a>
        </li>
      </ul>
      <Image
        className={`lg:hidden cursor-pointer duration-300
          ${ isMenuOpened ? "rotate-90" : "" }`}
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        src={menu}
        alt="Menu"  
      />
      <ul
        className={`lg:hidden pt-0 p-8 gap-6 items-end font-bold flex flex-col
          fixed z-10 top-0 right-0 translate-y-[96px] duration-300 
          ${ isMenuOpened ? "translate-x-0" : "translate-x-full" }`}
      >
        <li
          className="px-6 py-4 bg-white rounded-[10px] border border-black/10"
        >
          <a href="#product">Produit</a>
        </li>
        <li
          className="px-6 py-4 bg-white rounded-[10px] border border-black/10"
        >
          <a href="#pricing">Tarifs</a>
        </li>
        <li
          className="px-6 py-4 bg-white rounded-[10px] border border-black/10" 
        >
          <a href="#contact">Contact</a>
        </li>
        <li className="px-6 py-4 bg-primary text-white rounded-[10px]">
          <a href="#">Se connecter</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
