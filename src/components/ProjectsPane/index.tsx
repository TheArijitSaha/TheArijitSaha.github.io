import React from "react";

import Project from "./Project";
import projects from "../../data/projects";

const ProjectsPane = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto" id="Projects">
      <h1 className="mb-4 text-2xl text-purple-200">Projects</h1>
      <div className="pb-2">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPane;
