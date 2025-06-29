console.log("link established");
import { homePageContent } from "./home_content";
import { menuPageContent } from "./menu_content";
import { aboutUsPageContent } from "./about_us_content";
import { clearContent, createPage } from "./utilities";
import "./style.css";

const initializeButtons = (function() {
  const homeButton = document.querySelector(".home-btn");
  const menuButton = document.querySelector(".menu-btn");
  const aboutButton = document.querySelector(".about-btn");

  homeButton.addEventListener("click", () => {
    clearContent();
    createPage( homePageContent );
  } )

  menuButton.addEventListener("click", () => {
    clearContent();
    createPage( menuPageContent );
  } )

  aboutButton.addEventListener("click", () => {
    clearContent();
    createPage( aboutUsPageContent );
  } )

})();

const initializeHomePage = (function() {
  createPage ( homePageContent );
})();