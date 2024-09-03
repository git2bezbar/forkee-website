import NotFound from "@/app/not-found";
import MenuWidget from "@/components/frontend/Widgets/Menu";
import TextWidget from "@/components/frontend/Widgets/Text";
import { getCategories, getPage, getProducts } from "@/services/api";
import { redirect } from "next/navigation";
import { metadata } from "../layout";

interface WebsiteParams {
  params: { uuid: string };
}

export default async function DynamicMenu({ params }: WebsiteParams) {

  const page = await getPage(params.uuid, 'menu');
  const categories = await getCategories(params.uuid);
  const products = await getProducts(params.uuid);
  
  if (!page || !categories || !products) {
    return <NotFound />;
  }

  if (!page.isActive) {
    redirect(`/${params.uuid}`);
  }

  metadata.description = page.description || "Page de menu";

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
      <MenuWidget
        categories={categories}
        items={products}
      />
    </>
  );
}
