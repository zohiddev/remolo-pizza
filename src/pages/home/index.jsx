import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductsList,
  CardButtonMobile,
  CategoriesList,
  Header,
  getApiUrl,
  categoryAdded,
  Loading,
  ProductsSkeletonList,
} from "..";
import axios from "axios";

export const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const activeCategory = useSelector((state) => state.layout.activeCategory);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoadingCategories(true);
    axios
      .get(getApiUrl("category/all/"))
      .then((response) => {
        setCategories(response.data);
        response.data.forEach((category) => dispatch(categoryAdded(category)));
      })
      .catch((error) => console.log(error))
      .finally(() => setLoadingCategories(false));
  }, []);

  useEffect(() => {
    setLoadingProducts(true);
    axios
      .get(getApiUrl("product/all/"))
      .then((response) => {
        setProducts(
          response.data.filter((product) => product.category === activeCategory)
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoadingProducts(false));
  }, [activeCategory]);

  return (
    <main className="main home-page">
      <div className="fixed">
        <Header />
        <h1 className="home-page__title">Categorias</h1>
        <p className="home-page__description">
          Elige nuestras deliciosas pizzas
        </p>
        {loadingCategories ? (
          <Loading />
        ) : (
          <CategoriesList
            categories={categories}
            activeCategory={activeCategory}
          />
        )}
      </div>
      {loadingProducts ? (
        <ProductsSkeletonList count={Math.ceil(Math.random() * 10)} />
      ) : (
        <ProductsList products={products} />
      )}
      <CardButtonMobile />
    </main>
  );
};
