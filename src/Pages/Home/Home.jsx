import Lottie from "lottie-react";
import React, { useContext } from "react";
import {
  MdLocationOn,
  MdOutlineAppRegistration,
  MdPlayArrow,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import AiAnimation from "../../assets/Animations/AiAnimation.json";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { CoursesContext } from "../../contexts/CoursesProvider/CoursesProvider";
import Instructors from "../Shared/Others/Instructors/Instructors";

const Home = () => {
  const { user } = useContext(AuthContext);
  // ** Instructor info
  const courses = useContext(CoursesContext);

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <div className="flex">
                  <MdPlayArrow />
                  <p className="inline-block px-3 py-px mb-4 dark:text-gray-200 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Mastering Ai
                  </p>
                </div>
              </div>
              <h2 className="max-w-lg mb-6 h-12 font-sans text-3xl font-bold tracking-tight dark:text-gray-200 text-gray-900 sm:text-4xl sm:leading-none">
                <Typewriter loop words={["Mastering Ai with professonals "]} />
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-400 md:text-lg">
                This web application contains courses related to the modern
                technologies related to the Ai,Ml and deep learning. We offer a
                wide range of courses to master this technologies and full
                support for your carrer.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-sky-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
              >
                <span className="mr-3">Buy Courses</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    points="4,4 22,4 19,14 4,14 "
                  />
                  <circle
                    cx="4"
                    cy="22"
                    r="2"
                    strokeLinejoin="miter"
                    strokeLinecap="square"
                    stroke="none"
                    fill="currentColor"
                  />
                  <circle
                    cx="20"
                    cy="22"
                    r="2"
                    strokeLinejoin="miter"
                    strokeLinecap="square"
                    stroke="none"
                    fill="currentColor"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    points="1,1 4,4 4,14 2,18 23,18 "
                  />
                </svg>
              </Link>
              {!(user && user.uid) && (
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-sky-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
                >
                  <span className="mr-3">Sign Up</span>
                  <MdOutlineAppRegistration />
                </Link>
              )}
              <Link
                to="/find"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-sky-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
              >
                <span className="mr-3">Find</span>
                <MdLocationOn />
              </Link>
            </div>
          </div>
          <div className=" lg:w-1/2  lg:block ">
            <Lottie animationData={AiAnimation} />
          </div>
        </div>
      </div>
      <div>
        {/* ** slider  */}
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100 ">
          <div className="container flex flex-col items-center justify-center mx-auto ">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
              Instructor team
            </p>
            <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
              The talented people behind the scenes
            </h1>
            <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
              {courses.map((course) => (
                <Instructors key={course?.id} course={course} />
              ))}
            </div>
          </div>
        </section>
        {/* ** reviews */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col max-w-xl p-8 shadow-sm w-full rounded-xl lg:p-12 bg-gray-900 text-gray-100">
            <div className="flex flex-col w-full">
              <h2 className="text-3xl font-semibold text-center">
                Customer reviews
              </h2>
              <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                <div className="flex">
                  <button
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 2 stars"
                    aria-label="Rate 2 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 3 stars"
                    aria-label="Rate 3 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 4 stars"
                    aria-label="Rate 4 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-600"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 5 stars"
                    aria-label="Rate 5 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-600"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                </div>
                <span className="text-gray-400">3 out of 5</span>
              </div>
              <p className="text-sm text-gray-400">861 global ratings</p>
              <div className="flex flex-col mt-4">
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                  <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                    <div className="bg-orange-300 h-4 w-5/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    83%
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                  <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                    <div className="bg-orange-300 h-4 w-4/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    67%
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                  <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                    <div className="bg-orange-300 h-4 w-3/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    50%
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                  <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                    <div className="bg-orange-300 h-4 w-2/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    33%
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                  <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                    <div className="bg-orange-300 h-4 w-1/6"></div>
                  </div>
                  <span className="flex-shrink-0 w-12 text-sm text-right">
                    17%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
