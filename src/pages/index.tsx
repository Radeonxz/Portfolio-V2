import * as React from "react";
import { Link } from "gatsby";

import "../styles/index.css";

import Footer from "../components/Footer";

// markup
const IndexPage = () => {
  const [currentCanvas, setCanvas] = React.useState(null);

  React.useEffect(() => {
    var canvas: any = document.getElementById("space_box");
    if (canvas) setCanvas(canvas);
  }, []);

  if (currentCanvas) {
    var c = currentCanvas.getContext("2d");

    var innerWidth = window.innerWidth,
      innerHeight = window.innerHeight,
      radius = 1,
      starsIndex = 0,
      stars = [],
      TWO_PI = Math.PI * 2,
      centerX = innerWidth / 2,
      centerY = innerHeight / 2,
      focalLength = 100,
      starRadius = null,
      starX = null,
      starY = null,
      numStars = 2000,
      mouse = {},
      starX_dir = 0,
      starY_dir = 0,
      smallCircleX = innerWidth / 2,
      smallCircleY = innerHeight / 2;

    currentCanvas.width = innerWidth;
    currentCanvas.height = innerHeight;

    var grd = c.createRadialGradient(
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

        if (focalLength >= innerWidth) {
          focalLength = innerWidth - 20;
        } else if (focalLength < 100) {
          focalLength = 100;
        }
      },
      false
    );

    // Function for create new start
    function star(x, y, z) {
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
          this.z = innerWidth;
        }

        this.draw();
      };

      // Function for draw star
      this.draw = function () {
        c.beginPath();
        c.arc(starX, starY, starRadius, TWO_PI, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
      };
    }

    // X,Y,Z values
    var s;
    for (s = 0; s < numStars; s++) {
      const x = Math.random() * innerWidth;
      const y = Math.random() * innerHeight;
      const z = Math.random() * innerWidth;
      new star(x, y, z);
    }

    // Function for animate canvas objects
    const animate = () => {
      requestAnimationFrame(animate);
      c.fillStyle = grd;
      c.fillRect(0, 0, innerWidth, innerHeight);

      for (var i in stars) {
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
          <p id="info">I bet you are looking for the projects.</p>
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
      <Footer />
    </>
  );
};

export default IndexPage;
