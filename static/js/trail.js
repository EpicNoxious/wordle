const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    gsap.to(circle, {
      duration: 0.3,
      left: x - 6 + "px",
      top: y - 6 + "px",
      ease: "power4.out",
      scale: (circles.length - index) / circles.length,
    });

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
