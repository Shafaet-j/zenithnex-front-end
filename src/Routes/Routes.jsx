import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
