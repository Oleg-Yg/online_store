import { NOT_FOUND_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE } from "./consts";
import Shop from "../pages/Shop";
import ProductPage from "../pages/ProductPage";
import NotFound from "../pages/NotFound";

export const userRoutes = [
  {
    path: SHOP_ROUTE,
    component: Shop,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    component: ProductPage,
  },
  {
    path: NOT_FOUND_ROUTE,
    component: NotFound,
  },
];
