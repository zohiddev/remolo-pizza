import { HomePage, Settings, Favourites, Help, NotFound } from "../pages";

export const routes = [
  {
    id: 1,
    path: "/",
    component: <HomePage />,
  },
  {
    id: 2,
    path: "/settings",
    component: <Settings />,
  },
  {
    id: 3,
    path: "/favourites",
    component: <Favourites />,
  },
  {
    id: 4,
    path: "/help",
    component: <Help />,
  },
  {
    id: 5,
    path: "*",
    component: <NotFound />,
  },
];
