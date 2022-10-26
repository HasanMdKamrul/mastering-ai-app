import React from "react";

const CourseStep = ({ step, category }) => {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400 before:dark:bg-violet-400">
      <h3 className="text-xl font-semibold tracking-wide">{step}</h3>
      <time className="text-xs tracking-wide uppercase dark:text-gray-400">
        Dec 2020
      </time>
      <p className="mt-3">{category}</p>
    </div>
  );
};

export default CourseStep;
