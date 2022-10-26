import Lottie from "lottie-react";
import React, { useContext } from "react";
import {
  MdLocationOn,
  MdOutlineAppRegistration,
  MdPlayArrow,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import AiAnimation from "../../assets/Animations/HomeAnimation.json";
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
      </div>
    </div>
  );
};

export default Home;
