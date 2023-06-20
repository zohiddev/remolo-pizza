import { useState } from "react";
import { ProductsList, CardButtonMobile, CategoriesList, Header } from "..";
import { categoriesData } from "../../data/categories";
import productsData from "../../data/products.json";

export const HomePage = ({ store }) => {
  const { categories, products } = store.getState();

  return (
    <main className="main home-page">
      <div className="fixed">
        <Header />
        <h1 className="home-page__title">Categorias</h1>
        <p className="home-page__description">
          Elige nuestras deliciosas pizzas
        </p>
        <CategoriesList
          categoriesData={categories.items}
          activeCategory={categories.activeCategory}
          store={store}
        />
      </div>
      <ProductsList productsData={products.items.filter(
        (item) => item.category === categories.activeCategory
      )}
        store={store} />
      <CardButtonMobile />
    </main>
  );
};
