import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CoursesContext } from "../../contexts/CoursesProvider/CoursesProvider";
import Course from "../Shared/Others/Course/Course";
import CourseSideBar from "../Shared/Others/CourseSideBar/CourseSideBar";

const Courses = () => {
  const courses = useContext(CoursesContext);
  const topics = useLoaderData();
  const [topicCategory, setTopicCategory] = useState(courses);

  const handleTopic = (topic) => {
    const filteredTopics = courses.filter(
      (t) => t.category.toLowerCase() === topic.toLowerCase()
    );
    setTopicCategory(filteredTopics);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `https://mastering-ai-server.vercel.app/courses`
        );
        response.ok ? console.log("Successfull") : console.log("failed");
        const data = await response.json();
        setTopicCategory(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  const allHandler = () => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `https://mastering-ai-server.vercel.app/courses`
        );
        response.ok ? console.log("Successfull") : console.log("failed");
        const data = await response.json();
        setTopicCategory(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  };

  return (
    <div className="grid lg:grid-cols-12 mx-auto container ">
      <div className="lg:col-start-1 lg:col-end-9 ">
        <div className="text-5xl font-extrabold text-center mt-5 ">
          <p className="text-slate-900 dark:text-slate-200 ">Our Courses</p>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {topicCategory.map((course) => (
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
          {topicCategory.map((course) => (
            <CourseSideBar key={course.id} course={course} />
          ))}
        </ul>
        <div>
          <h2 className="text-sm font-semibold tracking-widest uppercase">
            Course Categories
          </h2>
          <div className="flex justify-center space-x-1 dark:text-gray-100">
            {topics.map((topic, index) => (
              <button
                onClick={() => handleTopic(topic)}
                key={index}
                type="button"
                title="Page 1"
                className="flex items-center justify-center flex-col text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400 px-5 py-2 bg-sky-400 hover:bg-sky-600"
              >
                {" "}
                {topic}
              </button>
            ))}
            <button
              onClick={allHandler}
              type="button"
              title="Page 1"
              className="flex items-center justify-center flex-col text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400 px-5 py-2 bg-sky-400 hover:bg-sky-600"
            >
              {" "}
              All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
