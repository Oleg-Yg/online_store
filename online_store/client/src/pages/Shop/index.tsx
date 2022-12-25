import React, { useEffect, useRef, useState } from "react";
import s from "./styles.module.scss";
import Products from "./Products";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useActions } from "../../hooks/useAction";
import FloatingActionButton from "../../components/FloatingActionButton";
import useIsAdmin from "../../hooks/useIsAdmin";
import Tooltip from "../../components/Tooltip";
import Modal from "../../components/Modal";
import AddingProduct from "./AddingProduct";

const Shop: React.FC = () => {
  const { products, error, loading } = useAppSelector((state) => state.product);
  const { fetchProducts } = useActions();
  const isAdmin = useIsAdmin();

  const [modalOpen, setModalOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  // console.log(buttonRef.current);
  // buttonRef.current;

  useEffect(() => {
    fetchProducts();
  }, []);

  const changeModalOpen = React.useCallback(() => {
    setModalOpen(true);
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={s.shop}>
      <Products data={products} />
      {isAdmin && (
        <Tooltip title={"Добавить товар"} className={s.tooltipAddButton}>
          <FloatingActionButton
            ref={buttonRef}
            onClick={changeModalOpen}
            variant={"add"}
            className={s.addButton}
          />
        </Tooltip>
      )}

      <Modal open={modalOpen} setOpen={setModalOpen} title={"Добавить товар"}>
        <AddingProduct setModalOpen={setModalOpen} />
      </Modal>
    </div>
  );
};

export default Shop;
