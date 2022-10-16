import React, { useState } from "react";
import Button from "../Button";
import useTheme from "../../hooks/useTheme";
import s from "./styles.module.scss";
import { AiFillSetting as Setting } from "react-icons/ai";
import Modal from "../Modal";

const Header = () => {
  const { theme } = useTheme();

  const [modalOpen, setModalOpen] = useState(false);

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
          <Button variant={"outlined"} onClick={() => setModalOpen(true)}>
            Войти
          </Button>
        </div>
      </div>

      <Modal
        open={modalOpen}
        setOpen={setModalOpen}
        onOkClick={() => console.log("OK")}
        title={"Вход в акаунт"}
        showButtons
        okLabel={"Принять"}
        cancelLabel={"Отменить"}
      >
        Test
      </Modal>
    </header>
  );
};

export default Header;
