import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "../../../../components/Input";
import FloatingActionButton from "../../../../components/FloatingActionButton";
import { InfoRowProps } from "./types";

const InfoRow: React.FC<InfoRowProps> = ({ id, getInfo, onClickDelete }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getInfo({ createdAt: id, title: title, description: description });
  }, [title, description]);

  const changeTitleInfo = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    []
  );

  const changeDescriptionInfo = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
    },
    []
  );

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Input
        value={title}
        onChange={changeTitleInfo}
        placeholder={"Название"}
        variant={"outlined"}
        margin={"0 10px 0 0"}
      />
      <Input
        value={description}
        onChange={changeDescriptionInfo}
        placeholder={"Описание"}
        variant={"outlined"}
        margin={"0 10px 0 0"}
      />
      <FloatingActionButton
        variant={"delete"}
        onClick={() => onClickDelete(id)}
        size={35}
      />
    </div>
  );
};

export default React.memo(InfoRow);
