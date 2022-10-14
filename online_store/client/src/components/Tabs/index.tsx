import React, { useState } from "react";
import s from "./styles.module.scss";
import useTheme from "../../hooks/useTheme";

const Tabs = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { theme } = useTheme();

  return (
    <div className={s.tabs} style={{ background: theme.background.secondary }}>
      {Array.isArray(children) ? (
        <>
          <div
            className={s.wrapperTabButton}
            style={{
              borderBottom: `1px solid lightgrey`,
            }}
          >
            {children.map((tab, index) => (
              <button
                key={index}
                className={s.tabButton}
                style={{
                  borderBottom:
                    selectedTab === index
                      ? `3px solid ${theme.colors.primary}`
                      : "none",
                }}
                onClick={() => setSelectedTab(index)}
              >
                {tab.props.title}
              </button>
            ))}
          </div>

          {children.map((tab, index) => {
            if (selectedTab === index) return <div key={index}>{tab}</div>;
          })}
        </>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Tabs;
