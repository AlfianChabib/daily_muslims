import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home.jsx";
import Favorit from "./pages/Favorit";
import Error from "./pages/Error";
import Surah from "./pages/Surah";
import Menu from "./pages/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/favorit",
    element: <Favorit />,
  },
  {
    path: "/surah/:id",
    element: <Surah />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
