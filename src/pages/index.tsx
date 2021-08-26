import * as React from "react";
import { Link } from "gatsby";

import "../styles/index.css";

// markup
const IndexPage = () => {
  const [currentCanvas, setCanvas] = React.useState(null);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    var canvas: any = document.getElementById("space_box");
    if (canvas) setCanvas(canvas);
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }

  if (currentCanvas) {
    let canvas = currentCanvas.getContext("2d");
    
    let radius = 1,
      starsIndex = 0,
      stars = [],
      TWO_PI = Math.PI * 2,
      centerX = windowWidth / 2,
      centerY = windowHeight / 2,
      focalLength = 100,
      starRadius = null,
      starX = null,
      starY = null,
      numStars = 2000,
      mouse = {},
      starX_dir = 0,
      starY_dir = 0,
      smallCircleX = windowWidth / 2,
      smallCircleY = windowHeight / 2;

    currentCanvas.width = windowWidth;
    currentCanvas.height = windowHeight;

    let grd = canvas.createRadialGradient(
      smallCircleX,
      smallCircleY,
      1,
      smallCircleX,
      smallCircleY,
      1100
    );
    grd.addColorStop(0, "#158AB2");
    grd.addColorStop(0.2, "#1F2A77");
    grd.addColorStop(0.35, "#111742");
    grd.addColorStop(0.8, "#0D071A");
    grd.addColorStop(1, "#000");

    // Zoom in/out into the Space on mouse scroll
    currentCanvas.addEventListener(
      "mousewheel",
      function (e) {
        if (e.deltaY < 0) {
          focalLength *= 1.1;
        } else {
          focalLength /= 1.1;
        }

        if (focalLength >= windowWidth) {
          focalLength = windowWidth - 20;
        } else if (focalLength < 100) {
          focalLength = 100;
        }
      },
      false
    );

    // Function for create new start
    function renderStar(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.radius = radius;
      this.color = "#FF7F50";
      starsIndex++;
      stars[starsIndex] = this;
      this.id = starsIndex;

      // Animate Stars
      this.update = function () {
        starX = (this.x - centerX) * (focalLength / this.z);
        starX += centerX;

        starY = (this.y - centerY) * (focalLength / this.z);
        starY += centerY;

        starRadius = radius * (focalLength / this.z);

        starX += starX_dir;
        starY += starY_dir;

        this.z += -1;

        if (this.z <= 0) {
          this.z = windowWidth;
        }

        this.draw();
      };

      // Function for draw star
      this.draw = function () {
        canvas.beginPath();
        canvas.arc(starX, starY, starRadius, TWO_PI, false);
        canvas.fillStyle = this.color;
        canvas.fill();
        canvas.closePath();
      };
    }

    // X,Y,Z values
    for (let s = 0; s < numStars; s++) {
      const x = Math.random() * windowWidth;
      const y = Math.random() * windowHeight;
      const z = Math.random() * windowWidth;
      new renderStar(x, y, z);
    }

    // Function for animate canvas objects
    const animate = () => {
      requestAnimationFrame(animate);
      canvas.fillStyle = grd;
      canvas.fillRect(0, 0, windowWidth, windowHeight);

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

        <div className="dusk" id="d1"></div>
        <div className="dusk" id="d2"></div>
        <div className="dusk" id="d3"></div>
        <div className="dusk" id="d4"></div>
        <div className="dusk" id="d5"></div>
        <div className="dusk" id="d6"></div>
        <div className="dusk" id="d7"></div>
        <div className="dusk" id="d8"></div>
        <div className="dusk" id="d9"></div>

        <canvas id="space_box" />
      </div>
    </>
  );
};

export default IndexPage;
