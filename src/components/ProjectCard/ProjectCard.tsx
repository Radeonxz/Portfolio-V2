import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.css";
import ProjectsData from "../../content/projects.json";

const ProjectCard = () => {
	return (
		<div className="projects-container">
			{ProjectsData.projects.map((project) => {
				return (
					<div className="project-card" key={project.name}>
						<div className="box">
							<div className="imgBox">
								<StaticImage
									className="img-responsive"
									style={{ height: "25rem" }}
									src="https://mocah.org/uploads/posts/520226-GitHub-Git.jpg"
									alt={project.name}
								/>
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
	);
};

export default ProjectCard;
