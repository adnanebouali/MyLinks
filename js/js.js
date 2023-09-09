const quoteElement = document.querySelector("#quote");

let holdTimer;

// Function to fetch and display a new quote
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

// Function to copy the quote to the clipboard
function copyQuoteToClipboard() {
  const textToCopy = quoteElement.textContent;
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

// Add mousedown event to start the hold timer
quoteElement.addEventListener("mousedown", () => {
  holdTimer = setTimeout(() => {
    copyQuoteToClipboard();
  }, 1000); // Adjust the duration (in milliseconds) as needed
});

// Add mouseup event to clear the hold timer
quoteElement.addEventListener("mouseup", () => {
  clearTimeout(holdTimer);
});

// Add a click event listener to generate a new quote on click
quoteElement.addEventListener("click", getQuote);

// Initial quote generation when the page loads
getQuote();


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


// -----
// Check localStorage for dark mode preference when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const savedDarkModeEnabled = localStorage.getItem('darkModeEnabled');
  if (savedDarkModeEnabled === 'true') {
    enableDarkMode();
  }
});

darkModeBtn.addEventListener("click", toggleDarkMode);

function enableDarkMode() {
  document.documentElement.classList.add("dark-mode");
  // Save the preference to localStorage
  localStorage.setItem('darkModeEnabled', 'true');
}

function disableDarkMode() {
  document.documentElement.classList.remove("dark-mode");
  // Save the preference to localStorage
  localStorage.setItem('darkModeEnabled', 'false');
}

function toggleDarkMode() {
  if (document.documentElement.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}
