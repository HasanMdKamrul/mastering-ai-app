import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const { status, statusText, message } = error;
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          {error && (
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>
              {status}
            </h2>
          )}
          {error && (
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.{" "}
              <span className="text-red-500"> {statusText || message}</span>
            </p>
          )}
          <p className="mt-4 mb-8 text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
