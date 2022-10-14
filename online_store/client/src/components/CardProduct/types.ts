import { ProductInfo } from "../../types/product";

export interface CardProductProps {
  id: number;
  title: string;
  price: number;
  img: string;
  info: ProductInfo[];
}
