import React, { useEffect } from "react";
import Products from "./Products";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useActions } from "../../hooks/useAction";

const Shop: React.FC = () => {
  const { products, error, loading } = useAppSelector((state) => state.product);
  const { fetchProducts } = useActions();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Products data={products} />
    </div>
  );
};

export default Shop;
