import * as React from "react";
import { Link } from "gatsby";

import "./styles.css";

const ProjectsMenu = () => {
  return (
    <div className="menu">
      <a href="#" className="brand">
        <img src="/resources/assets/banner.png" />
      </a>
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
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsMenu;
