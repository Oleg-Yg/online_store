import React from "react";
import { Route, Routes } from "react-router-dom";
import { userRoutes } from "./routes";
import s from "./styles.module.scss";

const AppRouter: React.FC = () => {
  const isAuth = false;
  return (
    <div className={s.appRouter}>
      <Routes>
        {userRoutes.map(({ path, component: Component }, index) => (
          <Route path={path} element={<Component />} key={index} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
