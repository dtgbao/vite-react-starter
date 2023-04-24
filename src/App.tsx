import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import LayoutDefault from "./layouts/LayoutDefault";

function App() {
   return (
      <LayoutDefault>
         <Routes>
            {routes.map((route) => {
               const Component = route.element;
               return (
                  <Route
                     key={route.path || "/"}
                     index={route.index}
                     path={route.path}
                     element={
                        <Suspense fallback={<>Loading...</>}>
                           <Component />
                        </Suspense>
                     }
                  />
               );
            })}
         </Routes>
      </LayoutDefault>
   );
}

export default App;
