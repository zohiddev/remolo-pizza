import { Somsa } from "../pages/Somsa/Somsa";
import { Napitka } from "../pages/Napitka/Napitka";
import { Disert } from "../pages/Disert/Disert";
import { HomePage } from "../pages";

export const routes = [
  {
    id: 1,
    path: "/",
    component: HomePage,
  },
  {
    id: 2,
    path: "/Somsa",
    component: Somsa,
  },
  {
    id: 3,
    path: "/Napitka",
    component: Napitka,
  },
  {
    id: 4,
    path: "/Disert",
    component: Disert,
  },
];
