import { ComponentPropsWithoutRef } from "react";

interface TitleProps extends ComponentPropsWithoutRef<"h1"> {}

const Title = ({ children }: TitleProps) => 
  <h1 className="font-bold text-4xl text-center">
    {children}
  </h1>;

export default Title;
