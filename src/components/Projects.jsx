import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="container" id="projects">
      <hr />
      <h1 className="section-header">Projects</h1>
      <div className="card-container">
        {projects.map((project, i) => {
          return <ProjectCard key={i} data={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
