import { CategoriesPage, FavouritePage, HelperPage, HomePage, LoginPage, PageNotFound, ProductsPage, SettingPage } from "../pages";


export const routes = [
  {
    id: 1,
    path: "/",
    component: <HomePage/>
  },
  {
    id: 2,
    path: "/favourite",
    component: <FavouritePage/> ,
  },
  {
    id: 3,
    path: "/setting",
    component: <SettingPage/> ,
  },
  {
    id: 4,
    path: "/helper",
    component: <HelperPage/> ,
  },
  {
    id: 5,
    path: "/login",
    component: <LoginPage/> ,
  },
  {
    id: 6,
    path: "*",
    component: <PageNotFound/> ,
  }
];

export const adminRoutes = [
  {
    id: 1,
    path: '/products',
    component: <ProductsPage/>
  },
  {
    id: 2,
    path: '/categories',
    component: <CategoriesPage/>
  }
]
