import React, { useState } from "react";
import { InputProps } from "./types";
import s from "./styles.module.scss";
import useTheme from "../../hooks/useTheme";

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  color = "primary",
  variant = "standard",
  width = "100%",
  margin,
}) => {
  const { theme } = useTheme();
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const unFocus = () => {
    setFocus(false);
  };

  return (
    <div
      className={s.wrapper}
      style={{
        width: width,
        background:
          variant === "filled" ? `${theme.background.primary}` : "none",
        margin: margin,
      }}
    >
      <label
        onFocus={onFocus}
        onBlur={unFocus}
        className={s.label}
        style={{ width: width }}
      >
        <input
          type={type}
          className={s.input}
          style={{
            border:
              variant === "outlined"
                ? `1px solid ${theme.colors[color]}`
                : "none",
            borderRadius: variant === "outlined" ? `3px` : "none",
            borderBottom: `1px solid ${theme.colors[color]}`,
            background:
              variant === "filled" ? `${theme.background.primary}` : "none",
          }}
          value={value}
          onChange={onChange}
        />
        <div
          className={s.placeholder}
          style={{
            background:
              variant === "filled"
                ? `transparent`
                : `${theme.background.secondary}`,
            top: focus ? "-18px" : value && "-18px",
          }}
        >
          {placeholder}
        </div>
      </label>
    </div>
  );
};

export default React.memo(Input);
