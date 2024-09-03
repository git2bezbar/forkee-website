import { Categories, ProductContent, Products } from "@/services/types";

interface CardMenuProps {
  categories: Categories;
  items: Record<string, ProductContent>;
}

export default function MenuWidget({ categories, items }: CardMenuProps) {

  return (
    <div className="px-8 py-16 xl:px-32 flex flex-col items-center justify-start text-center gap-8">
      <h2 className="text-4xl font-bold">Notre menu</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-center">
        {
          categories.map((category) => {
            return (
              <div key={category.id} className="flex flex-col items-start gap-8 rounded-2xl bg-primary border-2 border-black shadow-outline p-8 grow-0 shrink-0 basis-1/2 xl:basis-1/3 2xl:basis-1/4">
                <h3 className="text-xl font-bold uppercase">{category.name}</h3>
                <div className="flex flex-col gap-4 items-start w-full">
                  {
                    Object.keys(items).map((key: string) => {
                      const item = items[key];
                      if (item.category_id === category.id) {
                        return (
                          <div key={key} className="flex flex-col items-start gap-2 w-full text-left">
                            <div className="flex items-center justify-between w-full">
                              <h4 className="text-xl font-bold">{item.title}</h4>
                              <p className="min-w-10">{item.price / 100} €</p>
                            </div>
                            <p className="text-sm">{item.description}</p>
                          </div>
                        )
                      }
                      return null;
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}