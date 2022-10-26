import React, { createContext, useEffect, useState } from "react";

export const CoursesContext = createContext();

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const unsubscribe = async () => {
      try {
        const response = await fetch(
          `https://mastering-ai-server.vercel.app/courses`
        );
        response.ok ? console.log("successfull") : console.log("failed");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    return () => unsubscribe();
  }, []);

  return (
    <CoursesContext.Provider value={courses}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;
