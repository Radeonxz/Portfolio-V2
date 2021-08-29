import * as React from "react";
import { Link } from "gatsby";

import { renderGrd, renderStar } from "../helpers/renderMethods";
import StaticStars from "../components/StaticStars";

import "../styles/index.css";

const isBrowser = typeof window !== "undefined";

const IndexPage = () => {
	const [canvas, setCanvas] = React.useState<HTMLCanvasElement>(null);
	const [currentCanvas, setCurrentCanvas] = React.useState<any>(null);
	const [windowWidth, setWindowWidth] = React.useState<number>(
		isBrowser ? window.innerWidth : null
	);
	const [windowHeight, setWindowHeight] = React.useState<number>(
		isBrowser ? window.innerHeight : null
	);

	React.useLayoutEffect(() => {
		if (isBrowser) {
			window.addEventListener("resize", handleResize);
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	React.useEffect(() => {
		var selectedCanvas: any = document.getElementById("space_box");
		if (selectedCanvas) {
			let canvasContext = selectedCanvas.getContext("2d");
			setCanvas(selectedCanvas);
			setCurrentCanvas(canvasContext);
		}
	}, [windowWidth, windowHeight]);

	const handleResize = () => {
		if (isBrowser) {
			setWindowWidth(window.innerWidth);
			setWindowHeight(window.innerHeight);
		}
	};

	if (canvas) {
		canvas.width = windowWidth;
		canvas.height = windowHeight;
		let stars = [];
		let focalLength = Math.floor((windowWidth * windowHeight) / 20000);
		let numStars = Math.floor((windowWidth * windowHeight) / 4000);

		// star x,y,z values
		for (let s = 0; s < numStars; s++) {
			const x = Math.random() * windowWidth;
			const y = Math.random() * windowHeight;
			const z = Math.random() * windowWidth;
			const starProps = {
				x,
				y,
				z,
				stars,
				focalLength,
				windowWidth,
				windowHeight,
				currentCanvas,
			};
			new renderStar(starProps);
		}

		const grd = renderGrd(currentCanvas, windowWidth, windowHeight);
		// To render and animate canvas objects
		const animate = () => {
			requestAnimationFrame(animate);
			currentCanvas.fillStyle = grd;
			currentCanvas.fillRect(0, 0, windowWidth, windowHeight);

			for (let i in stars) {
				stars[i].update();
			}
		};

		animate();
	}

	return (
		<>
			<div className="home">
				<div id="display">
					<p id="msg">Home page found</p>
					<div id="error">
						<p id="f1">4</p>
						<div id="circle">
							<div id="smalldot"></div>
						</div>
						<p id="f2">4</p>
					</div>
					<p id="info">I bet you are looking for some projects.</p>
					<div id="btn">
						<Link to="/projects">Projects</Link>
					</div>
				</div>

				<div id="ring" />
				<StaticStars />
				<canvas id="space_box" />
			</div>
		</>
	);
};

export default IndexPage;
