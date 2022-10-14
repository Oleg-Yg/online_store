import React from "react";
import { Route, Routes } from "react-router-dom";
import { userRoutes } from "./routes";

const AppRouter: React.FC = () => {
  const isAuth = false;
  return (
    <div style={{ width: 1000 }}>
      <Routes>
        {userRoutes.map(({ path, component: Component }, index) => (
          <Route path={path} element={<Component />} key={index} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
