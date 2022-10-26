import React from "react";
import { RiPlayCircleFill } from "react-icons/ri";

const CourseStep = ({ step, category, price }) => {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400 before:dark:bg-violet-400">
      <h3 className="text-xl font-semibold tracking-wide">{step}</h3>
      <time className="text-xs tracking-wide uppercase flex items-center dark:text-gray-400">
        <RiPlayCircleFill className="w-6 h-6 text-primary" />
        {category}
      </time>
    </div>
  );
};

export default CourseStep;
