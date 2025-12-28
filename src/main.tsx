import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Otp from "./page/Otp";
import Services from "./page/Services";
import Charge from "./page/Charge";
import Internet from "./page/Internet";
import Kifepool from "./page/Kifepool";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Otp",
    element: <Otp />,
  },

  {
    path: "/Charge",
    element: <Charge />,
  },

  {
    path: "/Internet",
    element: <Internet />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Kifepool",
    element: <Kifepool />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
