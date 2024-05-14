import { ComponentPropsWithoutRef } from "react";

interface SubtitleProps extends ComponentPropsWithoutRef<"p"> {}

const Subtitle = ({ children }: SubtitleProps) => {
  return <p className="text-sm text-center text-subtitle leading-4 lg:text-base 
    lg:px-16">{children}</p>;
};

export default Subtitle;
