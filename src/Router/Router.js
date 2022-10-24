import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
