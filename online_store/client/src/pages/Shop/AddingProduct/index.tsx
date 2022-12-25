import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import s from "./styles.module.scss";
import Input from "../../../components/Input";
import UpLoadedPictures from "../../../components/UpLoadedPictures";
import DropdownAutocomplete from "../../../components/DropdownAutocomplete";
import { useActions } from "../../../hooks/useAction";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Button from "../../../components/Button";
import InfoRow from "./InfoRow";
import { createProduct } from "../../../api/product";
import { AddingProductProps } from "./types";

interface Info {
  createdAt: number;
  title: string;
  description: string;
}

const AddingProduct: React.FC<AddingProductProps> = ({ setModalOpen }) => {
  const [categoryId, setCategoryId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [info, setInfo] = useState<Info[]>([]);
  const { categories, error, loading } = useAppSelector(
    (state) => state.category
  );
  const { fetchCategories } = useActions();

  useEffect(() => {
    fetchCategories();
  }, []);

  const changeCategory = React.useCallback(
    (category: string) => {
      const [id] = categories
        .filter(({ id, name }) => name === category)
        .map((i) => i.id.toString());
      setCategoryId(id);
    },
    [categories]
  );

  const arrayCategories = useMemo(
    () => categories.map((category) => category.name),
    [categories]
  );

  const changeName = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    []
  );

  const changePrice = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPrice(event.target.value);
    },
    []
  );

  const addInfo = React.useCallback(() => {
    setInfo([...info, { createdAt: Date.now(), title: "", description: "" }]);
  }, [info]);

  const removeInfo = React.useCallback(
    (id: number) => {
      setInfo(info.filter((i: Info) => i.createdAt !== id));
    },
    [info]
  );

  const changeInfo = React.useCallback(
    ({ createdAt, title, description }: Info) => {
      setInfo(
        info.map((i) =>
          i.createdAt === createdAt
            ? { ...i, title: title, description: description }
            : i
        )
      );
    },
    [info]
  );

  const addDevice = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("categoryId", categoryId);
    files.map((file) => formData.append("img", file));
    formData.append("info", JSON.stringify(info));
    createProduct(formData).then((data) => setModalOpen(false));
  };

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <DropdownAutocomplete
        placeholder={"Категория"}
        onChange={changeCategory}
        list={arrayCategories}
        className={s.dropdownCategory}
      />
      <Input
        value={name}
        onChange={changeName}
        placeholder={"Имя продукта"}
        variant={"outlined"}
      />
      <Input
        value={price}
        onChange={changePrice}
        placeholder={"Цена"}
        variant={"outlined"}
        type={"number"}
      />
      <div className={s.characteristics}>Характеристики</div>
      {info.map((i: Info) => (
        <InfoRow
          getInfo={changeInfo}
          key={i.createdAt}
          id={i.createdAt}
          onClickDelete={removeInfo}
        />
      ))}
      <Button onClick={addInfo} margin={"0 0 20px 0"}>
        Добавить характеристику
      </Button>
      <UpLoadedPictures
        getUploadedImages={(element) => setFiles(element)}
        limit={5}
      />
      <Button onClick={addDevice} color={"success"}>
        Добавить продукт
      </Button>
    </div>
  );
};

export default AddingProduct;
