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
