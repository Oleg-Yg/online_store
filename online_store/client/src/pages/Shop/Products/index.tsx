import React from "react";
import CardProduct from "../../../components/CardProduct";
import { ProductDataProps } from "./types";

const Products: React.FC<ProductDataProps> = ({ data }) => {
  return (
    <div style={{ width: "100%" }}>
      {data.map((product, index) => (
        <CardProduct
          key={product.id}
          id={product.id}
          title={product.name}
          price={product.price}
          img={product.img[0]}
          info={product.productInfo}
        />
      ))}
    </div>
  );
};

export default Products;
