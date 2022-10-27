import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Faq from "../Pages/Faq/Faq";
import Profile from "../Pages/Profile/Profile";
import StripeContainer from "../Stripe/StripeContainer";
import PrivateRoute from "./PrivateRoute";
const Home = lazy(() => import("../Pages/Home/Home"));
const Courses = lazy(() => import("../Pages/Courses/Courses"));
const Find = lazy(() => import("../Pages/Find/Find"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: (
              <Suspense
                fallback={
                  <div className="flex justify-center items-center min-h-screen">
                    <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                  </div>
                }
              >
                <Home />
              </Suspense>
            ),
          },
          {
            path: "/home",
            element: (
              <Suspense
                fallback={
                  <div className="flex justify-center items-center min-h-screen">
                    <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                  </div>
                }
              >
                <Home />
              </Suspense>
            ),
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
          {
            path: "/signin",
            element: <SignIn />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/payment",
            element: <StripeContainer />,
          },
          {
            path: "/find",
            element: (
              <Suspense
                fallback={
                  <div className="flex justify-center items-center min-h-screen">
                    <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                  </div>
                }
              >
                <Find />
              </Suspense>
            ),
          },
          {
            path: "/faq",
            element: <Faq />,
            loader: () => fetch(`https://mastering-ai-server.vercel.app/faq`),
          },
          {
            path: "/blog",
            element: <Blog />,
            loader: () => fetch(`https://mastering-ai-server.vercel.app/blogs`),
          },
          {
            path: "/courses",
            element: (
              <Suspense
                fallback={
                  <div className="flex justify-center items-center min-h-screen">
                    <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                  </div>
                }
              >
                <Courses />
              </Suspense>
            ),
            loader: () =>
              fetch(`https://mastering-ai-server.vercel.app/topics`),
          },
          {
            path: "/courses/:id",
            element: <CourseDetails />,
            loader: ({ params }) =>
              fetch(
                `https://mastering-ai-server.vercel.app/courses/${params.id}`
              ),
          },
          {
            path: "/checkout/:id",
            element: (
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(
                `https://mastering-ai-server.vercel.app/courses/${params.id}`
              ),
          },
        ],
      },
    ],
  },
]);

export default router;
