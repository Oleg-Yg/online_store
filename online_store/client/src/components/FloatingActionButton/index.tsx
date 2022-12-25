import React from "react";
import { FloatingActionButtonProps } from "./types";
import { IoIosAdd as Add, IoMdCreate as Edit } from "react-icons/io";
import { MdDelete as Delete } from "react-icons/md";
import s from "./styles.module.scss";
import useTheme from "../../hooks/useTheme";

type Ref = HTMLButtonElement;

const FloatingActionButton = React.forwardRef<Ref, FloatingActionButtonProps>(
  ({ variant, onClick, style, className, size }, ref) => {
    const { theme } = useTheme();

    return (
      <label style={style} className={className}>
        <button
          className={s.floatingActionButton}
          ref={ref}
          onClick={onClick}
          style={{
            background:
              variant === "delete" ? theme.colors.error : theme.colors.primary,
            color: theme.background.secondary,
            boxShadow: `0 0 3px ${theme.colors.primary}`,
            width: size,
            height: size,
          }}
        >
          {variant === "add" && <Add size={32} />}
          {variant === "edit" && <Edit size={22} />}
          {variant === "delete" && <Delete size={22} />}
        </button>
      </label>
    );
  }
);

export default React.memo(FloatingActionButton);
