import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import Recordings from "./pages/Recordings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/recordings",
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
