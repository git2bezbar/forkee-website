import HighlightCard from "../HighlightCard";
import Subtitle from "../Subtitle";
import Title from "../Title";

const HighlightSection = () => {
  return (
    <div className="px-8 py-16 lg:px-48 lg:py-24 2xl:px-96 2xl:py-32 flex flex-col gap-4 items-center justify-center" id="product">
      <Title>Des fonctionnalités dédiées</Title>
      <Subtitle>
        Retrouvez toutes les fonctionnalités nécessaires pour gérer votre site web simplement.
      </Subtitle>
      <div className="flex flex-col gap-8 mt-8 lg:flex-row lg:flex-wrap">
        <HighlightCard icon="edit" title="Gérez votre site web sans avoir à coder" />
        <HighlightCard icon="computer" title="Utilisez un dashboard intuitif" />
        <HighlightCard icon="graph" title="Renseignez le menu de votre établissement" />
      </div>
    </div>
  );
}

export default HighlightSection;
