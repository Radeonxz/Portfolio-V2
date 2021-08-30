import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaGithub } from "react-icons/fa";

import Image from "../Image";
import Description from "./Description";

import "./styles.css";

const ProjectCard = ({ name, image, description, siteLink, repoLink }) => {
	return (
		<div className="project-card">
			<div className="box">
				<div className="imgBox">
					{image ? (
						<Image
							className="img-responsive"
							style={{ width: "100%", height: "25rem" }}
							src={image}
							alt={name}
						/>
					) : (
						<StaticImage
							className="img-responsive"
							style={{ width: "100%", height: "25rem" }}
							src="https://mocah.org/uploads/posts/520226-GitHub-Git.jpg"
							alt={name}
						/>
					)}
				</div>
				<div className="content">
					<h3>{name}</h3>
					<Description description={description} />
					{siteLink && (
						<a href={siteLink} className="btn btn-default btnD" target="_blank">
							Visit
						</a>
					)}
					{repoLink && (
						<a href={repoLink} className="btn btn-default btnD" target="_blank">
							<FaGithub />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
