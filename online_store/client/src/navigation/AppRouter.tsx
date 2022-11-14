import React from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, userRoutes } from "./routes";
import s from "./styles.module.scss";
import useAuth from "../hooks/useAuth";

const AppRouter: React.FC = () => {
  const isAuth = useAuth();
  return (
    <div className={s.appRouter}>
      <Routes>
        {isAuth &&
          authRoutes.map(({ path, component: Component }, index) => (
            <Route path={path} element={<Component />} key={index} />
          ))}
        {userRoutes.map(({ path, component: Component }, index) => (
          <Route path={path} element={<Component />} key={index} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
