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

const createDomElement = function( content, elementType, classNames = [], attributes = {} ) {
  const element = document.createElement( elementType );
  element.classList.add(...classNames);
  console.log( content );
  if ( content ) element.textContent = content;
  Object.assign( element, attributes );
  return element;
}


const contentMap = {
  header: ( content ) => createDomElement( content.header, "h1", [ "header" ]) ,
  title: ( content ) => createDomElement( content.title, "h2", [ "title" ] ),
  text: ( content ) => createDomElement( content.text, "div", [ "text" ] ),
  price: ( content ) => createDomElement ( content.price, "div", [ "price" ] ),
  image: ( content ) => {
      const imgContainer = createDomElement( null, "div", [ "image" ] );
      const img = createDomElement( null, "img", [ "img" ], {
        alt: content.image_alt_text || "",
        src: content.image || "",
        width: content.image_size || 0,
        height: content.image_size || 0
      });

      imgContainer.appendChild( img );

    const photoText = "Photo by "
    const websiteText = " on "
    const creditContainer = createDomElement( null, "div", [ "credit" ] );
    const photographer = createDomElement ( content.photographer, "a", [ "photographer", "link" ], {
      href: content.photographer_link,
    });
    const website = createDomElement ( content.image_credit, "a", [ "website", "link" ], {
      href: content.credit_link,
    });
    creditContainer.append( photoText, photographer, websiteText, website );
    imgContainer.appendChild( creditContainer );
    return imgContainer;
  },
};

function createContentArray( content ) {
  console.log("content:", content);
  return Object.keys( contentMap )
  .filter( key => content[key] !== undefined )
  .map( key => contentMap[key]( content ));
}



function createPage( pageContentArray ) {

  const checkForContainer = ( section ) => ( document.querySelector( `.${section}` )) ? true : false;

  for ( let content of pageContentArray ) {
    let section;
    if ( checkForContainer(content.section )) {
      section = document.querySelector( `.${content.section}` );

    } else {
      section = createDomElement( null, "div", [ `${content.section}`, "container" ] );
      const contentContainer = document.querySelector("#content");
      contentContainer.appendChild( section );
    }
    const contentArray = createContentArray( content );
    console.log( contentArray );
    section.append( ...contentArray );
  }

}


export { clearContent, createPage }
window.clearContent = clearContent