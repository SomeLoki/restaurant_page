console.log("link established");
import { homePageContent } from "./home_content";
console.log(homePageContent);

const createDomElement = function( textContent, parentElement, ...args ) {
  const newElement = document.createElement("div");
  const parent = document.querySelector(parentElement);
  if (args) {
    newElement.classList.add(...args);
  }
  newElement.textContent = textContent;
  parent.appendChild(newElement);
}

function createHomePage() {
  for ( let content of homePageContent ) {
    if (!checkForParent( content.parent )) {
      createDomElement( "", "#content", content.parent, "container" )
    }
      createDomElement( content.textContent, `.${content.parent}`, content.className )
  }
}

function checkForParent( parent ) {
  console.log( document.querySelector(`.${parent}`) ? true : false )
  return document.querySelector(`.${parent}`) ? true : false
}

createHomePage();

function clearContent() {
  const contentToClear = document.querySelectorAll(".container > *")
  const containersToClear = document.querySelectorAll("#content > *")
  for ( let content of contentToClear ) {
    content.remove()
  }
  for ( let container of containersToClear ) {
    container.remove()
  }
}

export { clearContent }
window.clearContent = clearContent