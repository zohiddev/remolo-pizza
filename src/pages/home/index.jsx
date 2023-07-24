import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getCategories, getProducts } from "../../redux/actions/categoryActions";
import { Skeleton } from "../../components/card/Skeleton";
import { CardButtonMobile, CategoriesList, Header, ProductsList } from "../../components";
import Loader from "../../components/ui/Loader";

export const HomePage = () => {
  const {categories, products} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts()) 
  }, [])

  return (
    <main className="main home-page">
      <div className="fixed">
        <Header />
        <h1 className="home-page__title">Categorias</h1>
        <p className="home-page__description">
          Elige nuestras deliciosas pizzas
        </p>

        {
          categories.loading ? <Loader/> :        
           <CategoriesList
          categoriesData={categories.items}
          activeCategory={categories.activeCategory}
        />
        }
      </div>

        {
          products.loading ? <Skeleton/> : 
          <ProductsList productsData={products.items.filter((item) => item.category === categories.activeCategory)}/>
        }
        
      <CardButtonMobile  />
    </main>
  );
};
