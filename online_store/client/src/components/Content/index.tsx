import React, { PropsWithChildren } from "react";
import s from "./styles.module.scss";

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.content}>{children}</div>;
};

export default Content;
