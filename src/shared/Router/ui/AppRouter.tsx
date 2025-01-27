import { Route, Routes } from "react-router-dom";
import { RouterConfig } from "../config/RouterConfig";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(RouterConfig).map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
