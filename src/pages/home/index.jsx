import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductsList,
  CardButtonMobile,
  CategoriesList,
  Header,
  getApiUrl,
  categoryAdded,
} from "..";
import axios from "axios";

export const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const activeCategory = useSelector((state) => state.layout.activeCategory);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(getApiUrl("category/all/"))
      .then((response) => {
        setCategories(response.data);
        response.data.forEach((category) => dispatch(categoryAdded(category)));
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(getApiUrl("product/all/"))
      .then((response) => {
        setProducts(
          response.data.filter((product) => product.category === activeCategory)
        );
      })
      .catch((error) => console.log(error));
  }, [activeCategory]);

  return (
    <main className="main home-page">
      <div className="fixed">
        <Header />
        <h1 className="home-page__title">Categorias</h1>
        <p className="home-page__description">
          Elige nuestras deliciosas pizzas
        </p>
        <CategoriesList
          categoriesData={categories}
          activeCategory={activeCategory}
        />
      </div>
      <ProductsList productsData={products} />
      <CardButtonMobile />
    </main>
  );
};
