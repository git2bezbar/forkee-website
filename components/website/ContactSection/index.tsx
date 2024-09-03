import Subtitle from "../Subtitle";
import Title from "../Title";

export default function ContactSection() {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <Title>Vous avez une question ? Contactez-nous !</Title>
      <Subtitle>
        Contactez-nous à l&apos;adresse suivante : <a className="font-bold text-primary" href="mailto:contact@forkee.fr">contact@forkee.fr</a>
      </Subtitle>
    </div>
  )
}