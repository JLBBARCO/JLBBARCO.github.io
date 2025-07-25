const windowWidth = 990;
const windowWidthPX = `${windowWidth}px`;

function resize() {
  const navLinks = document.querySelector(".nav-links");
  if (window.innerWidth > windowWidth) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
}

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.getElementById("menu-icon");
  if (navLinks.style.display === "grid") {
    navLinks.style.display = "none";
    menuIcon.src = "assets/icons/menu.svg";
  } else {
    navLinks.style.display = "grid";
    menuIcon.src = "assets/icons/close.svg";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Developer age
  const date = new Date();
  const year = date.getFullYear();
  const devYear = 2008;
  const age = document.getElementById("age");
  age.innerHTML = `${year - devYear}`;
});
