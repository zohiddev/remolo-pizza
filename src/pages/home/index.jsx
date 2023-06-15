import { useState } from "react";
import {
  Input,
  Icon,
  ProductsList,
  CardButtonMobile,
  CategoriesList,
} from "..";
import { categoriesData } from "../../data/categories";
import productsData from "../../data/products.json";

export const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <main className="main home-page">
      <div className="fixed">
        <Input
          icon={
            <Icon>
              <img
                src="/src/assets/images/icons/search-icon.svg"
                alt="search icon"
              />
            </Icon>
          }
          placeholder="Busca algo de nuestro menu..."
          additionalClasses={["search"]}
        />
        <h1 className="home-page__title">Categorias</h1>
        <p className="home-page__description">
          Elige nuestras deliciosas pizzas
        </p>
        <CategoriesList
          categoriesData={categoriesData}
          activeCategory={activeCategory}
        />
      </div>
      <ProductsList productsData={productsData} />
      <CardButtonMobile />
    </main>
  );
};
