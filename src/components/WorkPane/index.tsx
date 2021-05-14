import React from "react";

import Experience from "./Experience";
import experiences from "../../data/experiences";

const WorkPane = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto" id="Work">
      <h1 className="mb-4 text-2xl text-purple-200">Work</h1>
      <div className="pb-2">
        {experiences.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default WorkPane;
