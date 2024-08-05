import "./assets/styles/style.css";
import homePage from "./home.js";
import aboutPage from "./about.js";
import menuPage from "./menu.js";

homePage();

const homeButton = document.getElementById("home");
const aboutButton = document.getElementById("about");
const menuButton = document.getElementById("menu");

homeButton.addEventListener("click", () => {
  homePage();
});

aboutButton.addEventListener("click", () => {
  aboutPage();
});

menuButton.addEventListener("click", () => {
  menuPage();
});
