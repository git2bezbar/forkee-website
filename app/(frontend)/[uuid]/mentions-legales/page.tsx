import NotFound from "@/app/not-found";
import { getGeneralSettings, getPage } from "@/services/api";
import { redirect } from "next/navigation";
import { metadata } from "../layout";

interface WebsiteParams {
  params: { uuid: string };
}

export default async function DynamicPrivacyPolicy({ params }: WebsiteParams) {

  const page = await getPage(params.uuid, 'legal');
  const generalSettings = await getGeneralSettings(params.uuid);
  
  if (!page || !generalSettings) {
    return <NotFound />;
  }

  const websiteTitle = generalSettings.websiteTitle;

  if (!page.isActive) {
    redirect(`/${params.uuid}`);
  }

  metadata.description = "Page de mentions légales";

  return (
    <div className="px-8 py-16 flex flex-col items-center justify-start text-center gap-8">
      <h1 className="text-4xl font-bold break-word">Mentions Légales</h1>

      <h2 className="text-4xl font-bold break-word">Éditeur du site</h2>
      <p className="max-w-5xl break-word">Le site { websiteTitle } est édité par la société Forkee, autoentreprise, immatriculée au Registre du Commerce et des Sociétés de Bordeaux sous le numéro 123 456 789 00010.</p>
      <p className="max-w-5xl break-word">Siège social : 46 Sente des Radoubs, 33000 BORDEAUX</p>
      <p className="max-w-5xl break-word">Directeur de la publication : Adem DURAN</p>
      <p className="max-w-5xl break-word">Contact : contact@forkee.fr</p>

      <h2 className="text-4xl font-bold break-word">Hébergeur</h2>
      <p className="max-w-5xl break-word">L&apos;hébergement du site est assuré par Vercel, dont le siège social est situé au SAN FRANCISCO, USA.</p>
      <p className="max-w-5xl break-word">Contact : privacy@vercel.com</p>

      <h2 className="text-4xl font-bold break-word">Propriété intellectuelle</h2>
      <p className="max-w-5xl break-word">Le contenu du site { websiteTitle } (textes, images, graphismes, logo, etc.) est la propriété exclusive de Forkee, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l&apos;accord préalable et écrit de Forkee.</p>

      <h2 className="text-4xl font-bold break-word">Données personnelles</h2>
      <p className="max-w-5xl break-word">Forkee s&apos;engage à respecter la confidentialité des informations fournies par l&apos;utilisateur lors de son inscription ou de l&apos;utilisation du site. Les données collectées sont destinées exclusivement à Forkee et ne seront en aucun cas cédées à des tiers. Conformément à la loi &quot;Informatique et Libertés&quot; du 6 janvier 1978 modifiée, vous disposez d&apos;un droit d&apos;accès, de rectification, et de suppression des données vous concernant. Pour l&apos;exercer, veuillez adresser votre demande à contact@forkee.fr.</p>

      <h2 className="text-4xl font-bold break-word">Cookies</h2>
      <p className="max-w-5xl break-word">Le site { websiteTitle } utilise des cookies pour améliorer l&apos;expérience utilisateur et mesurer l&apos;audience du site. Vous pouvez choisir de désactiver les cookies via les paramètres de votre navigateur.</p>

      <h2 className="text-4xl font-bold break-word">Responsabilité</h2>
      <p className="max-w-5xl break-word">Forkee décline toute responsabilité quant aux éventuels dysfonctionnements pouvant survenir sur le site et entraîner une perte de données ou une indisponibilité de l&apos;accès aux informations produites sur celui-ci.</p>
      <p className="max-w-5xl break-word">Forkee ne saurait être tenue pour responsable des dommages résultant de l&apos;utilisation du site, ni de toute action ou décision prise sur la base des informations fournies sur le site.</p>

      <h2 className="text-4xl font-bold break-word">Droit applicable</h2>
      <p className="max-w-5xl break-word">Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux de Bordeaux seront seuls compétents pour trancher le différend.</p>

    </div>
  );
}
