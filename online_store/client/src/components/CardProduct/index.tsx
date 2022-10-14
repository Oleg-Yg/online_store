import React from "react";
import useTheme from "../../hooks/useTheme";
import s from "./styles.module.scss";
import { CardProductProps } from "./types";
import ImgWithLoader from "../ImgWithLoader";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../navigation/consts";
import { getContrastColor } from "../../utils";
import { BACKEND_URL } from "../../constants/global";

const CardProduct: React.FC<CardProductProps> = ({
  id,
  title,
  price,
  img,
  info,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={s.cardProduct}
      style={{ background: theme.background.secondary }}
    >
      <NavLink
        to={`${PRODUCT_ROUTE}/${id}`}
        className={s.wrapperDescription}
        style={{ color: getContrastColor(theme.background.secondary) }}
      >
        <ImgWithLoader src={`${BACKEND_URL}/${img}`} className={s.img} />
        <div className={s.description}>
          {title}

          {info.length ? (
            info.map(({ id, title, description }) => (
              <div key={id}>
                <span>{title}: </span>
                <span>{description}</span>
              </div>
            ))
          ) : (
            <div>Данных о товаре нету</div>
          )}
        </div>
      </NavLink>
      <div className={s.priceWrapper}>
        <div
          className={s.price}
          style={{ color: getContrastColor(theme.background.secondary) }}
        >
          <span>Цена: </span>
          <span>{price}</span>
        </div>
        <div className={s.buttonWrapper}>
          <Button
            onClick={() => console.log("Купить сейчас")}
            color={"success"}
            margin={"0 10px 5px 0"}
          >
            Купить сейчас
          </Button>
          <Button
            onClick={() => console.log("В корзину")}
            margin={"0 10px 5px 0"}
          >
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
