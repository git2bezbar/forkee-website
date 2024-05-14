import Button from "../Button";
import Image from "next/image";
import dashboard from "@/assets/images/dashboard.png";

const HeroSection = () => {
  return (
    <div 
      className={`px-8 py-16 lg:px-48 lg:py-24 2xl:px-96 2xl:py-32 flex 
        flex-col gap-4 items-center justify-center`}
    >
      <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl text-center">
        <span className="text-primary">Forkee</span> propulse les restaurateurs 
        sur le web 🚀
      </h1>
      <p
        className={`text-sm text-center text-subtitle leading-4 
          lg:text-base lg:px-16`}
      >
        Curabitur commodo viverra lacus efficitur sollicitudin. Cras congue, 
        velit a eleifend gravida, nibh ex laoreet augue, nec pharetra quam 
        ipsum eget purus.
      </p>
      <Button link="#product">Get started</Button>
      <Image
        className="rounded-[15px] lg:mt-16"
        src={dashboard}
        alt="Dashboard Forkee"
      />
    </div>
  );
};

export default HeroSection;
