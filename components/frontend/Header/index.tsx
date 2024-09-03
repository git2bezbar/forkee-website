"use client";

import { useState } from "react";
import HeaderListItem from "./HeaderListItem";
import { WebsiteMenu } from "@/services/types";
import { PAGE_NAMES, PAGE_PATHS } from "@/services/commons";
import Link from "next/link";

interface HeaderProps {
  menu: WebsiteMenu;
  uuid: string;
  restaurantName: string;
}

export default function Header({ menu, uuid, restaurantName }: HeaderProps) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const headerMenuItems = menu
    .filter((menuItem) => menuItem.isActive && menuItem.type !== "legal" && menuItem.type !=="home")
    .sort((a, b) => a.order - b.order)
    .map((menuItem) => ({
      href: `${uuid}${ PAGE_PATHS[menuItem.type] }`,
      label: PAGE_NAMES[menuItem.type],
    }));

  return (
    <header
      className="p-8 flex items-center justify-between lg:px-16 xl:px-32 relative"
    >
      <Link href={`/${uuid}/`} className="font-bold">{ restaurantName }</Link>

      <ul
        className={`sm:flex sm:items-center sm:static sm:flex-row sm:p-0 sm:translate-y-0 sm:translate-x-0 pt-0 p-8 gap-12 items-end font-bold flex flex-col
          fixed z-10 top-8 right-0 translate-y-[96px] duration-300
          ${ isMenuOpened ? "translate-x-0" : "translate-x-full" }`}  
      >

        {
          headerMenuItems.map((menuItem, index) => (
            <HeaderListItem key={index} href={menuItem.href}>
              {menuItem.label}
            </HeaderListItem>
          ))
        }
      </ul>
      <svg
        width="38"
        height="28"
        viewBox="0 0 38 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        className={`sm:hidden cursor-pointer duration-300
          ${ isMenuOpened ? "rotate-90" : "" }`}
      >
        <rect width="38" height="4" fill="#111111"/>
        <rect y="12" width="38" height="4" fill="#111111"/>
        <rect y="24" width="38" height="4" fill="#111111"/>
      </svg>
    </header>
  );
};
