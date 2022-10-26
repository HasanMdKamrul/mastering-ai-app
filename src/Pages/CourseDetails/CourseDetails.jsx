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
import CourseStep from "../Shared/Others/CourseStep/CourseStep";

const CourseDetails = () => {
  const course = useLoaderData();
  const pdfRef = useRef();
  const {
    title,
    price,
    description,
    category,
    image,
    duration,
    id,
    instructor,
    steps,
  } = course;

  const { name } = instructor;

  return (
    <div ref={pdfRef} className="mx-auto container">
      <div className="text-5xl font-extrabold text-center my-5 ">
        <p className="dark:text-gray-200 "> Details Overview</p>
      </div>
      <div className="px-4 py-16 shadow-xl rounded-2xl bg-gray-200  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <Link
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 dark:text-black rounded-full bg-indigo-50 hover:bg-indigo-200">
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
              <h5 className="mb-4 dark:text-black text-4xl font-extrabold leading-none">
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
      <div className="my-5 bg-gray-200 rounded-xl shadow-2xl">
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400 before:dark:bg-violet-400">
                  <h3 className="text-3xl font-semibold">{name}</h3>
                  <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                    {category}
                  </span>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                  {steps.map((step, index) => (
                    <CourseStep category={category} key={index} step={step} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;
