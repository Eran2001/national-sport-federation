import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import NotFound from "@/pages/404/NotFound";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "*", element: <NotFound /> },
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);
