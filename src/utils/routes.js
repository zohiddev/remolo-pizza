import { Favourites, Help, HomePage, Settings } from '../pages'

export const routes = [
  {
    id: 1,
    path: '/',
    component: HomePage,
  },
  {
    id: 2,
    path: '/favourites',
    component: Favourites,
  },
  {
    id: 3,
    path: '/settings',
    component: Settings,
  },
  {
    id: 4,
    path: '/help',
    component: Help,
  },
  {
    id: 5,
    path: '*',
    component: HomePage,
  },
]
