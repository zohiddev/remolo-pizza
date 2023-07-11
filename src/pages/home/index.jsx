import { useEffect } from 'react'
import {
  ProductsList,
  CardButtonMobile,
  CategoriesList,
  Header,
} from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getProducts } from '../../redux/actions/categoryActions'

export const HomePage = () => {
  const { categories, products } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [])

  return (
    <>
      <main className='main home-page'>
        <div className='fixed'>
          <Header />
          <h1 className='home-page__title'>Categorias</h1>
          <p className='home-page__description'>
            Elige nuestras deliciosas pizzas
          </p>
          {categories.loading ? (
            <h1>Loading...</h1>
          ) : (
            <CategoriesList
              categoriesData={categories.items}
              activeCategory={categories.activeCategory}
            />
          )}
        </div>
        {products.loading ? (
          <h1>Loading...</h1>
        ) : (
          <ProductsList
            productsData={products.items.filter(
              (item) => item.category === categories.activeCategory
            )}
          />
        )}
        <CardButtonMobile />
      </main>
    </>
  )
}
