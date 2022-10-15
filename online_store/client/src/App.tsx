import React from "react";
import "./App.scss";
import AppRouter from "./navigation/AppRouter";
import useTheme from "./hooks/useTheme";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const { theme } = useTheme();

  return (
    <div className="app" style={{ background: theme.background.primary }}>
      <Header />
      <Content>
        <AppRouter />
      </Content>
    </div>
  );
}

export default App;
