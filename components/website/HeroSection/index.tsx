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
        &quot;Forkee a transformé la façon dont je gère le site de mon restaurant en ligne. Simple, efficace, et vraiment impressionnant !&quot; - Emilie
      </p>
      <Button link="#product">Voir le produit</Button>
      <Image
        className="rounded-[15px] lg:mt-16"
        src={dashboard}
        alt="Dashboard Forkee"
      />
    </div>
  );
};

export default HeroSection;
