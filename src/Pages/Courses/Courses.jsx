import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Shared/Others/Course/Course";
import CourseSideBar from "../Shared/Others/CourseSideBar/CourseSideBar";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="grid lg:grid-cols-12 ">
      <div className="lg:col-start-1 lg:col-end-9 ">
        <div className="text-5xl font-extrabold text-center mt-5 ">
          <p className="text-slate-900 dark:text-slate-200 ">Our Courses</p>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {courses.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-start-9 lg:col-end-12 mt-28">
        <h2 className="text-sm font-semibold tracking-widest uppercase">
          Course Outline
        </h2>
        <ul className="menu  overflow-y-auto w-full bg-gray-200 shadow text-slate-900">
          {courses.map((course) => (
            <CourseSideBar key={course.id} course={course} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Courses;
