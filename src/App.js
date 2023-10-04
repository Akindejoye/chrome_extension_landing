import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import Recordings from "./pages/Recordings";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recording",
        element: <Recordings />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
