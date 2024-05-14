import HighlightCard from "../HighlightCard";
import Subtitle from "../Subtitle";
import Title from "../Title";

const HighlightSection = () => {
  return (
    <div className="px-8 py-16 lg:px-48 lg:py-24 2xl:px-96 2xl:py-32 flex flex-col gap-4 items-center justify-center">
      <Title>Lorem ipsum dolor sit amet</Title>
      <Subtitle>
        Curabitur commodo viverra lacus efficitur sollicitudin. Cras congue, 
        velit a eleifend gravida, nibh ex laoreet augue, nec pharetra quam 
        ipsum eget purus.
      </Subtitle>
      <div className="flex flex-col gap-8 mt-8 lg:flex-row lg:flex-wrap">
        <HighlightCard icon="edit" title="Cras congue velit a eleifend" />
        <HighlightCard icon="computer" title="Curabitur commodo viverra lacus" />
        <HighlightCard icon="graph" title="Pharetra quam ipsum eget purus" />
      </div>
    </div>
  );
}

export default HighlightSection;
