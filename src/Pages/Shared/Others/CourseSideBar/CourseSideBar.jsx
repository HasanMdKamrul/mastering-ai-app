import React from "react";
import { Link } from "react-router-dom";

const CourseSideBar = ({ course }) => {
  return (
    <div className="p-5 flex items-center hover:text-orange-500  border-b-2 border-b-sky-600">
      <Link to="/">{course?.title}</Link>
    </div>
  );
};

export default CourseSideBar;
