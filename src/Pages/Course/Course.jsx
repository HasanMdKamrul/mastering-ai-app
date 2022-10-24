import React from "react";
import { MdOutlineCategory, MdOutlineHourglassTop } from "react-icons/md";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { title, price, image, category, duration } = course;

  return (
    <Link to="/">
      <div className="overflow-hidden transition-shadow duration-300 bg-white  hover:bg-sky-400 hover:shadow-2xl p-3 rounded-2xl ">
        <img src={image} className="object-cover w-full h-64 rounded" alt="" />

        <div className="py-5">
          <p className="mb-2 text-xs font-semibold text-gray-600 uppercase flex items-center">
            <MdOutlineHourglassTop className="text-blue-600 w-4 h-4" />
            <small>Duration: {duration} hrs</small>
          </p>

          <p className="text-2xl font-bold leading-2">
            {title && title.slice(0, 30)} ...
          </p>

          <p className="mb-4 text-gray-700 font-semibold">$ {price}</p>
          <div className="flex items-center">
            <MdOutlineCategory className="text-orange-400 mr-2" />
            <small className="font-semibold ">{category}</small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course;
