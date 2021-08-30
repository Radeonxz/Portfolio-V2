import * as React from "react";

import ProjectsMenu from "../components/ProjectsMenu";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

import "../styles/project.css";

const ProjectsPage = () => {
	return (
		<div className="main">
			<ProjectsMenu />
			<Projects />
			<Footer />
		</div>
	);
};

export default ProjectsPage;
