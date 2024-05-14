"use client";

import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  link?: string;
  onClick?: () => void;
}

const Button = ({ link = "#", onClick = () => {}, children }: ButtonProps) => {
  return (
    <a 
      href={link} 
      className="px-8 py-4 bg-primary text-white rounded-[10px] font-bold"
      onClick={onClick}
    >
      { children }
    </a>
  );
};

export default Button;
