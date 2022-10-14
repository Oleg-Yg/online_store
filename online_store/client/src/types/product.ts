export interface ProductState {
  products: Product[];
  loading: boolean;
  error: null | string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  createdAt: Date;
  categoryId: number;
  category: any;
  img: string[];
  productInfo: ProductInfo[];
}

export interface ProductInfo {
  id: number;
  title: string;
  description: string;
}

export enum ProductActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

interface FetchProductsAction {
  type: ProductActionTypes.FETCH_PRODUCTS;
}

interface FetchProductsSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchProductsErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type ProductAction =
  | FetchProductsAction
  | FetchProductsSuccessAction
  | FetchProductsErrorAction;
