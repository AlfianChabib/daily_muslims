import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home.jsx";
import Favorit from "./pages/Favorit";
import Error from "./pages/Error";
import Surah from "./pages/Surah";
import Menu from "./pages/Menu";
import AsmaulHusna from "./pages/MenuPages/AsmaulHusna";
import DoaHarian from "./pages/MenuPages/DoaHarian";
import KisahNabi from "./pages/MenuPages/KisahNabi";
import Tahlil from "./pages/MenuPages/Tahlil";
import Istighosah from "./pages/MenuPages/Istighosah";
import BacaanSholat from "./pages/MenuPages/BacaanSholat";
import Wirid from "./pages/MenuPages/Wirid";

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
    loader: async ({ params }) => {
      return fetch(`https://equran.id/api/v2/surah/${params.id}`);
    },
  },
  {
    path: "/asmaulhusna",
    element: <AsmaulHusna />,
  },
  {
    path: "/doaharian",
    element: <DoaHarian />,
  },
  {
    path: "/kisahnabi",
    element: <KisahNabi />,
  },
  {
    path: "/tahlil",
    element: <Tahlil />,
  },
  {
    path: "/istighosah",
    element: <Istighosah />,
  },
  {
    path: "/bacaansholat",
    element: <BacaanSholat />,
  },
  {
    path: "/wirid",
    element: <Wirid />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
