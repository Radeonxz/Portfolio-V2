import * as React from "react";

import ProjectsMenu from "../components/ProjectsMenu";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <>
      <div className="main">
        <ProjectsMenu />
        <ProjectCard />
      </div>
      <Footer />
    </>
  );
};

export default ProjectsPage;
