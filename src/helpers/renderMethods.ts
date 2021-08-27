interface renderGrdProps {
	canvas: HTMLCanvasElement;
	windowWidth: number;
	windowHeight: number;
}

export const renderGrd = (
	canvas,
	windowWidth,
	windowHeight
): renderGrdProps => {
	const smallCircleX = windowWidth / 2,
		smallCircleY = windowHeight / 2;

	const grd = canvas.createRadialGradient(
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

	return grd;
};

// Function for create new star
let starsIndex = 0;
export function renderStar({
	x,
	y,
	z,
	stars,
	focalLength,
	windowWidth,
	windowHeight,
	currentCanvas,
}) {
	const radius = 1;
	let starX = null,
		starY = null,
		TWO_PI = Math.PI * 2,
		centerX = windowWidth / 2,
		centerY = windowHeight / 2,
		starRadius = null,
		starX_dir = 0,
		starY_dir = 0;

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
		currentCanvas.beginPath();
		currentCanvas.arc(starX, starY, starRadius, TWO_PI, false);
		currentCanvas.fillStyle = this.color;
		currentCanvas.fill();
		currentCanvas.closePath();
	};
}
