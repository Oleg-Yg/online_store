import React from "react";
import "./App.scss";
import AppRouter from "./navigation/AppRouter";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <div className="app" style={{ background: theme.background.primary }}>
      <AppRouter />
    </div>
  );
}

export default App;
