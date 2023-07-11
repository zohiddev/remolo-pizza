import { CategoriesPage, Favourites, Help, HomePage, LoginPage, ProductsPage, Settings } from '../pages'

export const routes = [
  {
    id: 1,
    path: '/',
    component: <HomePage />,
  },
  {
    id: 2,
    path: '/favourites',
    component: <Favourites />,
  },
  {
    id: 3,
    path: '/settings',
    component: <Settings />,
  },
  {
    id: 4,
    path: '/help',
    component: <Help />,
  },
  {
    id: 5,
    path: '/login',
    component: <LoginPage />,
  },
  {
    id: 6,
    path: '*',
    component: <HomePage />,
  },
]

export const adminRoutes = [
  {
    id: 1,
    path: '/products',
    component: <ProductsPage />,
  },
  {
    id: 2,
    path: '/categories',
    component: <CategoriesPage />,
  },
]