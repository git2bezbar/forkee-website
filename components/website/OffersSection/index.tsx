import Image from "next/image";
import Title from "../Title";
import check from '@/assets/icons/check.svg';
import checkWhite from '@/assets/icons/check-white.svg';

export default function OffersSection() {
  return (
    <div className="flex flex-col items-center gap-8 p-8" id="offers">
      <Title>Forkee, votre solution intuitive pour booster vos profits avec facilité.</Title>
      <div className="flex items-center gap-4">
        <div className="w-[316px] h-[427px] shadow-2xl rounded-[15px] p-8 flex flex-col gap-8">
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-xl font-bold">Basic</h3>
            <p className="text-sm text-subtitle leading-4 lg:text-base">
              Commencez à construire votre site
            </p>
            <h4 className="text-xl font-bold">15€/mois</h4>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4 font-bold">
              <Image
                src={check}
                alt="Validé"
                width={32}
                height={32}
              />
              <p>Accès à toutes les fonctionnalités</p>
            </li>
            <li className="flex items-center gap-4 font-bold">
              <Image
                src={check}
                alt="Validé"
                width={32}
                height={32}
              />
              <p>Onboarding inclus</p>
            </li>
          </ul>
          <a 
            className="px-8 py-4 bg-[#F0EAFF] rounded-[10px] font-bold mt-auto text-primary"
          >
            Souscrire à l&apos;offre Basic
          </a>
        </div>
        <div className="w-[316px] rounded-[15px] p-8 flex flex-col gap-8 bg-primary text-white">
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="text-sm leading-4 lg:text-base">
              Commencez à construire votre site
            </p>
            <h4 className="text-xl font-bold">15€/mois</h4>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4 font-bold">
              <Image
                src={checkWhite}
                alt="Validé"
                width={32}
                height={32}
              />
              <p>Accès à toutes les fonctionnalités</p>
            </li>
            <li className="flex items-center gap-4 font-bold">
              <Image
                src={checkWhite}
                alt="Validé"
                width={32}
                height={32}
              />
              <p>Onboarding inclus</p>
            </li>
            <li className="flex items-center gap-4 font-bold">
              <Image
                src={checkWhite}
                alt="Validé"
                width={32}
                height={32}
              />
              <p>Accompagnement de A à Z</p>
            </li>
            <li className="flex items-center gap-4 font-bold">
              <Image
                src={checkWhite}
                alt="Validé"
                width={32}
                height={32}
              />
              <p>Réponse en moins de 24h</p>
            </li>
            <li className="flex items-center gap-4 font-bold">
              <Image
                src={checkWhite}
                alt="Validé"
                width={32}
                height={32}
              />
              <p>Équipe française à votre disposition</p>
            </li>
          </ul>
          <a 
            className="px-8 py-4 bg-[#F0EAFF] rounded-[10px] font-bold mt-auto text-primary"
          >
            Souscrire à l&apos;offre Pro
          </a>
        </div>
      </div>
    </div>
  )
}