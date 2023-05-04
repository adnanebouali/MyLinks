/* Store the element in el */
let el = document.getElementById("tilt");

/* Get the height and width of the element */
const height = el.clientHeight;
const width = el.clientWidth;

/*
 * Add a listener for mousemove event
 * Which will trigger function 'handleMove'
 * On mousemove
 */
el.addEventListener("mousemove", handleMove);

/* Define function a */
function handleMove(e) {
  /*
   * Get position of mouse cursor
   * With respect to the element
   * On mouseover
   */
  /* Store the x position */
  const xVal = e.layerX;
  /* Store the y position */
  const yVal = e.layerY;

  /*
   * Calculate rotation valuee along the Y-axis
   * Here the multiplier 20 is to
   * Control the rotation
   * You can change the value and see the results
   */
  const yRotation = 20 * ((xVal - width / 2) / width);

  /* Calculate the rotation along the X-axis */
  const xRotation = -20 * ((yVal - height / 2) / height);

  /* Generate string for CSS transform property */
  const string =
    "perspective(500px)  rotateX(" +
    xRotation +
    "deg) rotateY(" +
    yRotation +
    "deg)";

  /* Apply the calculated transformation */
  el.style.transform = string;
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener("mouseout", function () {
  el.style.transform = "perspective(500px)  rotateX(0) rotateY(0)";
});

/* Add listener for mousedown event, to simulate click */
el.addEventListener("mousedown", function () {
  el.style.transform = "perspective(500px)  rotateX(0) rotateY(0)";
});

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener("mouseup", function () {
  el.style.transform = "perspective(500px)  rotateX(0) rotateY(0)";
});

const quoteElement = document.querySelector("#quote");

function getQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteElement.textContent = `"${data.content}" - ${data.author}`;
      quoteElement.style.backgroundColor = getRandomColor();
    })
    .catch((error) => {
      console.error(error);
      quoteElement.textContent =
        "Self-belief and hard work will always earn you success.";
    });
}

function getRandomColor() {
  const colors = [
    "rgb(220, 226, 255)", // Red
    "#E3F2C1", // Pink
    "#917FB3", // Purple
    "#BFCCB5", // Deep Purple
    "#DDFFBB", // Indigo
    "#F6F1E9", // Blue
    "#FFB4B4", // Light Blue
    "#F5C6EC", // Cyan
    "#D5B4B4", // Teal
    "#AEC2B6", // Green
    "#FFACAC", // Light Green
    "#EDE9D5", // Amber
    "#F7C8E0", // Orange
    "#BEF0CB", // Deep Orange
    "#D9ACF5", // Brown
    "#B7B78A", // Grey
    "#E3ACF9", // Blue Grey
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

window.onload = function () {
  getQuote();
};

const darkModeBtn = document.querySelector(".darkModeToglle");
darkModeBtn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  document.documentElement.classList.toggle("dark-mode");
}
