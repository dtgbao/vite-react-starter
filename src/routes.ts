import { LazyExoticComponent, lazy } from "react";

interface Route {
   index?: boolean;
   path?: string;
   element: LazyExoticComponent<() => JSX.Element>;
}

export const routes: Route[] = [
   {
      index: true,
      element: lazy(() => import("./pages/Home")),
   },
];
