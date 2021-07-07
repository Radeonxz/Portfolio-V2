import * as React from "react";

import "./styles.css";
import ProjectsData from "../../content/projects.json";

const ProjectCard = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          {ProjectsData.projects.map((project) => {
            return (
              <div className="col-md-6" key={project.name}>
                <div className="box">
                  <div className="imgBox">
                    <img src={project.image} className="img-responsive" />
                  </div>
                  <div className="content">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a
                      href={project.siteLink}
                      className="btn btn-default btnD"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
