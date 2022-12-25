import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  BiChevronDown as Down,
  BiChevronUp as Up,
  BiX as Delete,
} from "react-icons/bi";
import s from "./styles.module.scss";
import useTheme from "../../hooks/useTheme";
import { DropdownAutocompleteProps } from "./types";
import ElementList from "./ElementList";

const DropdownAutocomplete: React.FC<DropdownAutocompleteProps> = ({
  list,
  onChange,
  placeholder,
  className,
  style,
}) => {
  const { theme } = useTheme();
  const [focus, setFocus] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [arrayElementList, setArrayElementList] = useState(list);

  useEffect(() => {
    if (!valueInput) {
      setArrayElementList(list);
    } else {
      setArrayElementList(
        list.reduce((acc: string[], element) => {
          if (element.toLowerCase().includes(valueInput.toLowerCase())) {
            acc = [...acc, element];
          }
          return acc;
        }, [])
      );
    }
    if (valueInput.length === 1) {
      setDropdownOpen(true);
    }
    if (list.includes(valueInput)) {
      onChange(valueInput);
    }
  }, [valueInput]);

  const changeDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const deleteValueInput = React.useCallback(() => {
    setValueInput("");
  }, []);

  const changeValueInput = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValueInput(event.target.value);
    },
    []
  );

  const onClickElementList = React.useCallback((title: string) => {
    setValueInput(title);
    setDropdownOpen(false);
  }, []);

  return (
    <div className={className} style={style}>
      <label
        className={s.DropdownAutocomplete}
        style={{ color: theme.colors.primary }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <input
          className={s.input}
          value={valueInput}
          onChange={changeValueInput}
        />
        <span
          className={s.placeholder}
          style={{
            background: `${theme.background.secondary}`,

            top: focus ? "-14px" : valueInput && "-14px",
          }}
        >
          {placeholder}
        </span>
        {valueInput && (
          <button className={s.buttonIcon} onClick={deleteValueInput}>
            <Delete size={20} />
          </button>
        )}

        <button className={s.buttonIcon} onClick={changeDropdownOpen}>
          {dropdownOpen ? <Up size={20} /> : <Down size={20} />}
        </button>
        {dropdownOpen && (
          <div
            className={s.list}
            style={{ background: theme.background.secondary }}
          >
            {arrayElementList.map((title, index) => (
              <ElementList
                title={title}
                key={index}
                onClick={() => onClickElementList(title)}
              />
            ))}
            {arrayElementList.length === 0 && (
              <div className={s.option}>нет выбора</div>
            )}
          </div>
        )}
      </label>
    </div>
  );
};

export default React.memo(DropdownAutocomplete);
