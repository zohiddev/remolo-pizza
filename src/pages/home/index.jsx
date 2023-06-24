import { useContext } from "react";
import { ProductsList, CardButtonMobile, CategoriesList, Header } from "..";
import { store } from "../../redux/store";
import { StoreContext } from "../../context/storeContext";

export const HomePage = () => {
  const { getState } = useContext(StoreContext)
  const { categories, products } = getState();


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
        />
      </div>
      <ProductsList productsData={products.items.filter((item) => item.category !== categories.activeCategory)} />
      <CardButtonMobile />
    </main>
  );
};
