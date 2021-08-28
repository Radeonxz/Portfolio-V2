import * as React from "react";

import ProjectsMenu from "../components/ProjectsMenu";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

import "../styles/project.css";

const ProjectsPage = () => {
	return (
		<div className="main">
			<ProjectsMenu />
			<ProjectCard />
			<Footer />
		</div>
	);
};

export default ProjectsPage;
