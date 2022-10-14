import React from "react";
import style from "./styles.module.scss";

const Loader: React.FC = () => {
  return (
    <div>
      <span className={style.loader}></span>
    </div>
  );
};

export default Loader;
