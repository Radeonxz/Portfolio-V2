import React from "react";

import ProjectCard from "../ProjectCard";

import "./styles.css";
import ProjectsData from "../../content/projects.json";

const Projects = () => {
	return (
		<div className="projects-container">
			{ProjectsData.projects.map((project) => {
				return <ProjectCard {...project} key={project.name} />;
			})}
		</div>
	);
};

export default Projects;
