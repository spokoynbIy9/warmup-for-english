import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { WarmupPage } from "@/pages/WarmupPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  NotFoundPage = "NotFoundPage",
  HomePage = "HomePage",
  WarmupPage = "WarmupPage",
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.HomePage]: "/",
  [AppRoutes.WarmupPage]: "/warmup",
  [AppRoutes.NotFoundPage]: "*",
};

export const RouterConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HomePage]: {
    path: RoutesPath.HomePage,
    element: <HomePage />,
  },
  [AppRoutes.NotFoundPage]: {
    path: RoutesPath.NotFoundPage,
    element: <NotFoundPage />,
  },
  [AppRoutes.WarmupPage]: {
    path: RoutesPath.WarmupPage,
    element: <WarmupPage />,
  },
};
