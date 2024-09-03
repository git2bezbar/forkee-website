import NotFound from "@/app/not-found";
import TextWidget from "@/components/frontend/Widgets/Text";
import { getContactSettings, getPage } from "@/services/api";
import { redirect } from "next/navigation";
import { metadata } from "../layout";

interface WebsiteParams {
  params: { uuid: string };
}

export default async function DynamicContact({ params }: WebsiteParams) {

  const page = await getPage(params.uuid, 'contact');
  const contactSettings = await getContactSettings(params.uuid);
  
  if (!page || !contactSettings) {
    return <NotFound />;
  }

  const email = contactSettings.email;

  if (!page.isActive) {
    redirect(`/${params.uuid}`);
  }

  metadata.description = page.description || "Page de contact";

  return (
    <>
      {
        page.widgets && 
        page.widgets.map((widget, index) => (
          <TextWidget
            key={index}
            index={index}
            uuid={params.uuid}
            title={widget.content.title}
            text={widget.content.subtitle}
            hasButton={widget.content.hasButton}
            buttonLink={widget.content.buttonLink}
            buttonText={widget.content.buttonContent}
          />
        ))
      }
      {
        email &&
        <div className="px-8 py-16 flex flex-col items-center justify-start text-center gap-8">
          <h2 className="text-4xl font-bold break-word">Contact</h2>
          <p className="max-w-5xl break-word">Vous pouvez nous contacter par mail à l&apos;adresse suivante : <a className="font-bold underline" href={`mailto:${email}`}>{ email }</a></p>
        </div>
      }
    </>
  );
}
