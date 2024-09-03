import Image from "next/image";
import edit from '@/assets/icons/edit.svg';
import computer from '@/assets/icons/computer.svg';
import graph from '@/assets/icons/graph.svg';

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
}

const HighlightCard = ({ icon, title }: HighlightCardProps) => {

  const iconToDisplay = () => {
    switch (icon) {
      case 'edit':
        return edit;
      case 'computer':
        return computer;
      case 'graph':
        return graph;
      default:
        return edit;
    }
  }

  return (
    <div
      className="sm:w-[300px] lg:w-[350px] p-8 flex flex-col gap-6 items-start justify-start rounded-[10px] shadow-2xl"
    >
      <div
        className={`w-[64px] h-[64px] bg-primary flex items-center justify-center rounded-[10px]`}
      >
        <Image src={iconToDisplay()} alt="Icon" />
      </div>
      <div className="text-2xl font-bold">{ title }</div>
    </div>
  );
};

export default HighlightCard;
