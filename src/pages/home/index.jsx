import { useState } from "react";
import { ProductsList, CardButtonMobile, CategoriesList, Header } from "..";
import { categoriesData } from "../../data/categories";
import productsData from "../../data/products.json";

export const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <main className="main home-page">
      <div className="fixed">
        <Header />
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
