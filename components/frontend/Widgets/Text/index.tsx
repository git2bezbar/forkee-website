import Link from "next/link";

interface TextWidgetProps {
  index: number;
  uuid: string;
  title: string;
  text: string;
  hasButton: boolean;
  buttonLink: string;
  buttonText: string;
}

export default function TextWidget({
  index,
  uuid,
  title,
  text,
  hasButton,
  buttonLink,
  buttonText
}: TextWidgetProps) {
  return (
    <div className="px-8 py-16 flex flex-col items-center justify-start text-center gap-8">
      { 
        index === 0 
        ? <h1 className="text-4xl font-bold break-word">{ title }</h1>
        : <h2 className="text-4xl font-bold break-word">{ title }</h2>
      }
      <p className="max-w-5xl break-word">{ text }</p>
      {
        hasButton &&
        (
          <Link
            className="px-8 py-3 bg-primary text-black rounded-full border-2 border-black shadow-outline font-bold text-black"
            href={`/${uuid}/${buttonLink}`}
          >
            { buttonText }
          </Link>
        )
      }
    </div>
  )
}