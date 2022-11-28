import React, { useState } from "react";
import Button from "../Button";
import useTheme from "../../hooks/useTheme";
import s from "./styles.module.scss";
import { AiFillSetting as Setting } from "react-icons/ai";
import Modal from "../Modal";
import Auth from "../../pages/Auth/Auth";
import useAuth from "../../hooks/useAuth";
import { logout } from "../../api/users";

const Header = () => {
  const { theme } = useTheme();
  const isAuth = useAuth();

  const [modalOpen, setModalOpen] = useState(false);
  const [showButtonLogout, setShowButtonLogout] = useState(isAuth);

  const logoutHandler = async () => {
    setShowButtonLogout(!showButtonLogout);
    await logout();
  };

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
          <Button margin={"10px"} onClick={() => console.log("Ok")}>
            Корзина
          </Button>
          {/*<Button variant={"outlined"} onClick={() => console.log("авторизация")}>*/}
          {/*<Setting size={22} />*/}
          {/*</Button>*/}
          {!showButtonLogout && (
            <Button variant={"outlined"} onClick={() => setModalOpen(true)}>
              Войти
            </Button>
          )}
          {showButtonLogout && (
            <Button variant={"outlined"} onClick={logoutHandler}>
              Выйти
            </Button>
          )}
        </div>
      </div>

      <Modal open={modalOpen} setOpen={setModalOpen} title={"Вход в акаунт"}>
        <Auth setOpen={setModalOpen} />
      </Modal>
    </header>
  );
};

export default Header;
