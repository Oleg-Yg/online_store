import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../constants/global";
import Loader from "../../components/Loader";
import ImagesCarousel from "../../components/ImagesCarousel";
import s from "./styles.module.scss";
import Button from "../../components/Button";
import Tabs from "../../components/Tabs";
import Tab from "../../components/Tabs/Tab";
import { getArrayImgsFetch } from "../../utils";
import { Product } from "../../types/product";
import { BiRuble as Ruble } from "react-icons/bi";

const ProductPage: React.FC = () => {
  const location = useLocation();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    axios.get(`${BACKEND_URL}api${location.pathname}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  const buyProduct = React.useCallback(() => {
    console.log("Купить сейчас");
  }, []);

  const addToBasket = React.useCallback(() => {
    console.log("В корзину");
  }, []);

  return (
    <div>
      {!product ? (
        <Loader />
      ) : (
        <div className={s.productPage}>
          <div className={s.wrapperImgAndPrice}>
            <ImagesCarousel
              images={getArrayImgsFetch(product.img)}
              className={s.imagesCarousel}
            />{" "}
            <div>
              <div className={s.nameProduct}>{product.name}</div>
              <div className={s.price}>
                {product.price}
                <Ruble size={30} />
              </div>
              <div>
                <Button
                  onClick={buyProduct}
                  color={"success"}
                  margin={"0 10px 5px 0"}
                >
                  Купить сейчас
                </Button>
                <Button onClick={addToBasket} margin={"0 10px 5px 0"}>
                  В корзину
                </Button>
              </div>
            </div>
          </div>
          <Tabs>
            <Tab
              title={"Характеристики"}
              component={
                <div>
                  {product.productInfo.length ? (
                    product.productInfo.map(({ id, title, description }) => (
                      <div key={id}>
                        <span>{title}: </span>
                        <span>{description}</span>
                      </div>
                    ))
                  ) : (
                    <div>Данных о товаре нету</div>
                  )}
                </div>
              }
            />
            <Tab
              title={"Отзывы"}
              component={
                <div>
                  <div>Отзывы </div>
                  <div>Отзывы </div>
                  <div>Отзывы </div>
                  <div>Отзывы </div>
                  <div>Отзывы </div>
                  <div>Отзывы </div>
                  <div>Отзывы </div>
                </div>
              }
            />
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
