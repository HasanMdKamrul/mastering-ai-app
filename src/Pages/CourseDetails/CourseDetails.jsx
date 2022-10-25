import React, { useRef } from "react";
import { MdDownload, MdPlayArrow } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData();
  const pdfRef = useRef();
  const { title, price, description, category, image, duration, id } = course;
  return (
    <div
      ref={pdfRef}
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <Link
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </Link>
          <div>
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              {title}
            </h5>
            <p className="mb-6 text-gray-900">{description}</p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center space-x-4"></div>
            <div className="flex">
              <Link to={`/checkout/${id}`}>
                <button className="btn btn-secondary">
                  Get premium access
                  <MdPlayArrow />
                </button>
              </Link>
              <Pdf targetRef={pdfRef} filename="code-example.pdf">
                {({ toPdf }) => (
                  <button onClick={toPdf}>
                    <MdDownload className="w-12 h-12" />
                  </button>
                )}
              </Pdf>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
