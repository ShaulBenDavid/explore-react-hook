import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Data = lazy(() => import("./pages/Data"));
const Form = lazy(() => import("./pages/Form"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="Loading....">
            <Main />
          </Suspense>
        ),
      },
      {
        path: "/data",
        element: (
          <Suspense fallback="Loading....">
            <Data />
          </Suspense>
        ),
      },
      {
        path: "/form",
        element: (
          <Suspense fallback="Loading....">
            <Form />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
