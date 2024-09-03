import Image from "next/image";
import check from '@/assets/icons/check.svg';
import dashboard from '@/assets/images/dashboard-1.png';
import dashboardSecondary from '@/assets/images/dashboard-2.png';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  advantages: string[];
  type?: 'primary' | 'secondary';
}

export default function FeatureSection({ title, subtitle, advantages, type = "primary" }: FeatureSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-16 lg:px-44 gap-16 items-center">   
      {
        type === "secondary" && (
          <div>
          <Image
            className="rounded-[10px] flex"
            src={dashboardSecondary}
            alt="Dashboard Forkee"
          />
        </div>
        )
      }
      <div className="flex flex-col gap-8 items-start text-start">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-4xl">
            { title }
          </h2>
          <p className="text-sm text-subtitle leading-4 lg:text-base">
            { subtitle }
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          {
            advantages.map((advantage, index) => (
              <li key={index} className="flex items-center gap-4">
                <Image
                  src={check}
                  alt="Validé"
                  width={32}
                  height={32}
                />
                <p>{ advantage }</p>
              </li>
            ))
          }
        </ul>
      </div>
      {
        type === "primary" && (
          <div>
          <Image
            className="rounded-[10px] flex"
            src={dashboard}
            alt="Dashboard Forkee"
          />
        </div>
        )
      }
    </div>
  );
}
