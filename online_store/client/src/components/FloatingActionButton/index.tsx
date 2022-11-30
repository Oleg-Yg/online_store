import React from "react";
import { FloatingActionButtonProps } from "./types";
import { IoIosAdd as Add, IoMdCreate as Edit } from "react-icons/io";
import s from "./styles.module.scss";
import useTheme from "../../hooks/useTheme";

type Ref = HTMLButtonElement;

const FloatingActionButton = React.forwardRef<Ref, FloatingActionButtonProps>(
  ({ variant, onClick, style, className }, ref) => {
    const { theme } = useTheme();

    return (
      <label style={style} className={className}>
        <button
          className={s.floatingActionButton}
          ref={ref}
          onClick={onClick}
          style={{
            background: theme.colors.primary,
            color: theme.background.secondary,
            boxShadow: `0 0 3px ${theme.colors.primary}`,
          }}
        >
          {variant === "add" && <Add size={32} />}
          {variant === "edit" && <Edit size={22} />}
        </button>
      </label>
    );
  }
);

export default FloatingActionButton;
