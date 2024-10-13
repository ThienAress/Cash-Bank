// Get the navbar element
let navbar = document.getElementById("navbar");

// Function to add sticky class after scrolling
window.onscroll = function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
