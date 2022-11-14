import React from "react";
import s from "./styles.module.scss";
import { ButtonProps } from "./types";
import useTheme from "../../hooks/useTheme";
import { getContrastColor } from "../../utils";

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  color = "primary",
  variant = "contained",
  margin,
}) => {
  const { theme } = useTheme();

  return (
    <button
      type={type}
      className={s.button}
      style={{
        background:
          variant === "outlined" || variant === "text"
            ? "none"
            : theme.colors[color],
        borderColor: theme.colors[color],
        color:
          variant === "outlined" || variant === "text"
            ? theme.colors[color]
            : getContrastColor(theme.colors[color]),
        boxShadow:
          variant === "outlined" || variant === "text"
            ? "none"
            : `0 0 3px ${theme.colors[color]}`,
        margin: margin,
        borderWidth: variant === "text" ? "0" : "1px",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
