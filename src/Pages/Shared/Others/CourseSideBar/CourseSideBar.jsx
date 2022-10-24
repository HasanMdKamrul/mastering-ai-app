import React from "react";
import { Link } from "react-router-dom";

const CourseSideBar = ({ course }) => {
  return (
    <div className="p-5 flex items-center hover:text-orange-500  border-b-2 border-b-sky-600">
      <img className="w-12 h-12 mr-2 rounded-3xl " src={course?.image} alt="" />
      <Link to={`/courses/${course.id}`}>{course?.title}</Link>
    </div>
  );
};

export default CourseSideBar;
