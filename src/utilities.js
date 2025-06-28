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

const createDomElement = function( textContent, parentElement, contentType, ...classes ) {
  const newElement = document.createElement( contentType );
  const parent = document.querySelector( parentElement );
  if ( classes ) {
    newElement.classList.add( ...classes );
  }
  newElement.textContent = textContent;
  parent.appendChild(newElement);
}

function createImageElement( container, image, altText, imageSize ) {
  const newImage = document.createElement("img");
  const imageContainer = document.querySelector( `.${container} > .image`);
  console.log(imageContainer);
  newImage.src = image
  newImage.alt = altText
  newImage.height = imageSize;
  newImage.width = imageSize;
  imageContainer.appendChild( newImage );
}

function createPage( contentArray ) {

  const checkForContainer = ( section ) => ( document.querySelector( `.${section}` )) ? true : false;

  for ( let content of contentArray ) {
    if ( !checkForContainer(content.section )) {
      createDomElement( "", "#content", "div", `${content.section}`, "container" );
    };

    if ( content.header ) {
      createDomElement( content.header, `.${content.section}`, "h1", "header" );
    };

    if ( content.title ) {
      createDomElement( content.title, `.${content.section}`, "h2", "title" );
    };

    if ( content.text ) {
      createDomElement( content.text, `.${content.section}`, "div", "text" );
    };

    if ( content.price ) {
      createDomElement( content.price, `.${content.section}`, "div", "text" );
    };

    if ( content.image ) {
      //create an image container then create the image
      createDomElement( "", `.${content.section}`, "div", "image", "container" );
      createImageElement( content.section, content.image, content.image_alt_text, content.image_size );
    }
  }

}


export { clearContent, createPage }
window.clearContent = clearContent