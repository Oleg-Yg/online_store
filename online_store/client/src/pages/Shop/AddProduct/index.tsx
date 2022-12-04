import React, { ChangeEvent, useState } from "react";
import s from "./styles.module.scss";
import Input from "../../../components/Input";
import UpLoadedPictures from "../../../components/UpLoadedPictures";
import DropdownAutocomplete from "../../../components/DropdownAutocomplete";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const changeCategory = (category: string) => {
    setCategory(category);
  };

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      <DropdownAutocomplete
        placeholder={"Категория"}
        onChange={changeCategory}
        list={["Hello", "World"]}
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
      <UpLoadedPictures
        getUploadedImages={(element) =>
          console.log("UpLoadedPictures", element)
        }
        limit={5}
      />
    </div>
  );
};

export default AddProduct;
