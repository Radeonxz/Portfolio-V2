import * as React from "react";

import ProjectsMenu from "../components/ProjectsMenu";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="main">
      <ProjectsMenu />
      <ProjectCard />
    </div>
  );
};

export default ProjectsPage;
