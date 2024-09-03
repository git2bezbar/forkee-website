import NotFound from "@/app/not-found";
import TextWidget from "@/components/frontend/Widgets/Text";
import { getPage } from "@/services/api";
import { redirect } from "next/navigation";
import { metadata } from "./layout";

interface WebsiteParams {
  params: { uuid: string };
}

export default async function DynamicHome({ params }: WebsiteParams) {

  const page = await getPage(params.uuid, 'home');
  
  if (!page) {
    return <NotFound />;
  }
  
  if (!page.isActive) {
    redirect(`/${params.uuid}`);
  }
  
  metadata.description = page.description || "Page d'accueil";

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
    </>
  );
}
