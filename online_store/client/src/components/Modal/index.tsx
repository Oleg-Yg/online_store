import React from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "./types";
import s from "./styles.module.scss";
import Button from "../Button";

const Modal: React.FC<ModalProps> = ({
  children,
  open,
  setOpen,
  onOkClick,
  title,
  showButtons,
  okLabel,
  cancelLabel,
}) => {
  if (!open) return null;

  const closeHandler = () => {
    setOpen(false);
  };

  const okHandler = () => {
    if (onOkClick) {
      onOkClick();
    }
    closeHandler();
  };

  return ReactDOM.createPortal(
    <>
      <div className={s.background} onClick={closeHandler} />
      <div className={s.modalWindow}>
        <div className={s.headerAndContent}>
          <div className={s.header}>
            <span>{title}</span>
          </div>
          <div className={s.content}>{children}</div>
        </div>
        {showButtons && (
          <div className={s.footer}>
            <Button variant={"outlined"} onClick={closeHandler}>
              {cancelLabel || "Cancel"}
            </Button>
            <Button onClick={okHandler}>{okLabel || "OK"}</Button>
          </div>
        )}
      </div>
    </>,
    document.body
  );
};

export default Modal;
