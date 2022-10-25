import React, { useRef } from "react";
import { FaBookOpen } from "react-icons/fa";
import {
  MdDownload,
  MdOutlineHourglassEmpty,
  MdPlayArrow,
} from "react-icons/md";
import { RiExchangeDollarFill } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData();
  const pdfRef = useRef();
  const { title, price, description, category, image, duration, id } = course;
  return (
    <div>
      <div className="text-5xl font-extrabold text-center my-5 ">
        <p className="text-primary"> Details Overview</p>
      </div>
      <div
        ref={pdfRef}
        className="px-4 py-16 shadow-xl rounded-2xl bg-gray-200  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <Link
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 hover:bg-indigo-200">
                <Pdf targetRef={pdfRef} filename={`${title}`}>
                  {({ toPdf }) => (
                    <button onClick={toPdf}>
                      <MdDownload className="w-12 h-12" />
                    </button>
                  )}
                </Pdf>
              </div>
            </Link>
            <div>
              <h5 className="mb-4 text-4xl font-extrabold leading-none">
                {title}
              </h5>
              <p className="mb-6 text-gray-900">{description}</p>
              <div className="flex  text-blue-600 items-center ">
                <MdOutlineHourglassEmpty className="w-6 h-6" />
                <small className="mr-2">{duration} Hrs</small>
                <RiExchangeDollarFill className="w-6 h-6" />
                <small className="mr-2 ml-2">{price}</small>
                <FaBookOpen className="w-6 h-6" />
                <small className="ml-2">{category}</small>
              </div>
              <hr className="mb-5 border-gray-300" />
              <div className="flex items-center space-x-4"></div>
              <div className="flex">
                <Link to={`/checkout/${id}`}>
                  <button className="btn btn-secondary">
                    Get premium access
                    <MdPlayArrow />
                  </button>
                </Link>
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
    </div>
  );
};

export default CourseDetails;
