import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="grid lg:grid-cols-12">
      <div className="col-start-1 col-end-10">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {courses.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
      <div className="col-start-10 col-end-12">
        <h1>Right side</h1>
      </div>
    </div>
  );
};

export default Courses;
