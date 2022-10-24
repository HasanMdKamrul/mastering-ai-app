import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Shared/Others/Course/Course";
import CourseSideBar from "../Shared/Others/CourseSideBar/CourseSideBar";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="grid lg:grid-cols-12 ">
      <div className="lg:col-start-1 lg:col-end-9 ">
        <h1 className="lg:text-3xl font-extralight mt-2  text-center ">
          Our Courses
        </h1>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {courses.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-start-9 lg:col-end-12 mt-28">
        <ul className="menu  overflow-y-auto w-full bg-gray-50 shadow text-base-content">
          {courses.map((course) => (
            <CourseSideBar key={course.id} course={course} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Courses;
