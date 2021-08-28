import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FaGithub } from "react-icons/fa";

import "./styles.css";

const ProjectsMenu = () => {
	return (
		<div className="menu">
			<Link to="/" className="brand">
				<StaticImage src="../../images/banner.png" alt="banner" />
			</Link>
			<div className="nav">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link className="active" to="/projects">
							Projects
						</Link>
					</li>
					<li>
						<a className="" href="https://github.com/Radeonxz" target="_blank">
							<FaGithub />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectsMenu;
