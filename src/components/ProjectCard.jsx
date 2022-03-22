import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="project-title">{data.name}</h2>
      </div>
      <div className="card-body">
        <div className="tool-container">
          {data.tools.map((tool, i) => {
            return (
              <span key={i} className="project-tool">
                {tool}
              </span>
            );
          })}
        </div>
        <p className="project-description">{data.description}</p>
        <div className="link-group">
          <a
            href={data.deployedUrl}
            rel="noreferrer"
            target="_blank"
            className="deployed-url"
          >
            VIEW SITE
          </a>
          <a
            href={data.backendSrc}
            rel="noreferrer"
            target="_blank"
            className="src-url"
          >
            BACKEND CODE
          </a>
          <a
            href={data.frontendSrc}
            rel="noreferrer"
            target="_blank"
            className="src-url"
          >
            FRONTEND CODE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
