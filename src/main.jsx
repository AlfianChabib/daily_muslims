import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home.jsx";
import LastRead from "./pages/LastRead";
import Favorit from "./pages/Favorit";
import Error from "./pages/Error";
import Surah from "./pages/Surah";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/lastread",
    element: <LastRead />,
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
