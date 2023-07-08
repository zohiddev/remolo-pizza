import {
  CategoriesPage,
  Favourites,
  Help,
  HomePage,
  Login,
  ProductsPage,
  Settings,
} from '../pages'

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
    component: <Login />,
  },
  {
    id: 6,
    path: '*',
    component: <HomePage />,
  },
]

export const adminRoutes = [
  {
    id: 8,
    path: '/products',
    component: <ProductsPage />,
  },
  {
    id: 9,
    path: '/categories',
    component: <CategoriesPage />,
  },
]
