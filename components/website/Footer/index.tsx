import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
  <footer className="bg-white px-8 xl:px-32 py-8 pb-12 flex flex-col items-center text-subtitle gap-8">
    <div className="xl:grid grid-cols-4 flex flex-col gap-8">
      <div className="flex flex-col items-start gap-4">
        <Image src="/logo.svg" alt="Forkee" width={115} height={25} />
        
      </div>
      <div className="flex flex-col items-start gap-4">
        <h3 className="font-bold">Le produit</h3>
        <ul className="flex flex-col items-start gap-4">
          <li>
            <Link href="#product">Produit</Link>
          </li>
          <li>
            <Link href="#offers">Offres</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-4">
        <h3 className="font-bold">Légal</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="#">Gestion des cookies</Link>
          </li>
          <li>
            <Link href="#offers">Politique de confidentialité</Link>
          </li>
          <li>
            <Link href="#offers">CGV</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-4">
        <h3 className="font-bold">À propos</h3>
        <p>Découvrez Forkee, le CMS conçu spécialement pour les restaurateurs à la recherche de simplicité et de performance. Notre équipe vous accompagne à chaque étape, de la création à la gestion de votre site. Forkee, votre partenaire de confiance pour un site web à la hauteur de votre cuisine.</p>
      </div>
    </div>
    <h4 className="text-sm">Copyright © 2024 Forkee 🚀. Tous droits réservés.</h4>
  </footer> 
);
}
