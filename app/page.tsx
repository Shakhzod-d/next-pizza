import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            {/* Фильтрация */}
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "some",
                    price: 505,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D62859516B382666F5C30B88589.avif",
                  },
                  {
                    id: 1,
                    name: "some",
                    price: 505,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D62859516B382666F5C30B88589.avif",
                  },
                  {
                    id: 1,
                    name: "some",
                    price: 505,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D62859516B382666F5C30B88589.avif",
                  },
                  {
                    id: 1,
                    name: "some",
                    price: 505,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D62859516B382666F5C30B88589.avif",
                  },
                  {
                    id: 1,
                    name: "some",
                    price: 505,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D62859516B382666F5C30B88589.avif",
                  },
                ]}
                categoryId={1}
                listClassName=""
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "some",
                    price: 505,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D62859516B382666F5C30B88589.avif",
                  },
                  {
                    id: 1,
                    name: "some",
                    price: 505,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D62859516B382666F5C30B88589.avif",
                  },
                  {
                    id: 1,
                    name: "some",
                    price: 505,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D62859516B382666F5C30B88589.avif",
                  },
                  {
                    id: 1,
                    name: "some",
                    price: 505,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D62859516B382666F5C30B88589.avif",
                  },
                  {
                    id: 1,
                    name: "some",
                    price: 505,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D62859516B382666F5C30B88589.avif",
                  },
                ]}
                categoryId={2}
                listClassName=""
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
