import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home.jsx";
import SurahList from "./pages/SurahList";
import LastRead from "./pages/LastRead";
import Favorit from "./pages/Favorit";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/surahlist",
    element: <SurahList />,
  },
  {
    path: "/lastread",
    element: <LastRead />,
  },
  {
    path: "/favorit",
    element: <Favorit />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
