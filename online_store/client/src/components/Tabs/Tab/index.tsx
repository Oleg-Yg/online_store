import React from "react";

const Tab = ({
  title,
  component,
}: {
  title: string;
  component: JSX.Element;
}) => {
  return <div>{component}</div>;
};

export default Tab;
