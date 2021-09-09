import * as React from "react";

import "./styles.css";

const Footer = () => {
	return (
		<footer className="footer-container">
			<p>&#169; Xz - {new Date().getFullYear()}</p>
		</footer>
	);
};

export default Footer;
