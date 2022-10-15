import React from "react";
import Button from "../Button";
import useTheme from "../../hooks/useTheme";
import s from "./styles.module.scss";
import { AiFillSetting as Setting } from "react-icons/ai";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      className={s.wrapperHeader}
      style={{ background: theme.background.secondary }}
    >
      <div className={s.header}>
        <span className={s.nameStore} style={{ color: theme.colors.primary }}>
          Online store
        </span>
        <div className={s.groupButton}>
          <Button margin={"10px"} onClick={() => console.log("Корзина")}>
            Корзина
          </Button>
          {/*<Button variant={"outlined"} onClick={() => console.log("авторизация")}>*/}
          {/*<Setting size={22} />*/}
          {/*</Button>*/}
          <Button
            variant={"outlined"}
            onClick={() => console.log("авторизация")}
          >
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;