import React, { useState } from "react";
import s from "./styles.module.scss";
import useTheme from "../../../hooks/useTheme";
import { ElementListProps } from "./types";

const ElementList: React.FC<ElementListProps> = ({ title, onClick }) => {
  const { theme } = useTheme();
  const [onHover, setOnHover] = useState(false);

  const changeOnMouseOver = React.useCallback(() => {
    setOnHover(true);
  }, []);

  const changeOnMouseOut = React.useCallback(() => {
    setOnHover(false);
  }, []);

  return (
    <div
      className={s.elementList}
      style={{
        color: theme.colors.secondary,
        background: onHover ? theme.background.primary : "",
      }}
      onMouseOver={changeOnMouseOver}
      onMouseOut={changeOnMouseOut}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default ElementList;
