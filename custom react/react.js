function customRender (reactElement, container){
  /*const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.target)
  container.appendChild(domElement)*/

  // modefide version of code
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for(const prop in reactElement.props) {
    if (prop == "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop])
    container.appendChild(domElement)
  }
}


const reactElement = {
  type: "a",
  props: {
    href: 'http://google.com',
    target: '_blank'
  },
  children: 'Click me to visit'
}
// is element ko add kar na hai ek element main
const mainContainer = document.querySelector("#root");
//render kar na hai ek function ko jasa react main ho rah tha 
customRender(reactElement, mainContainer)
//  customRender do chezay layta hai 
// ek kia render kar na hai wo dosri kahn per rendeer kar na hai wo 

//cusromrender kam kasa karta hai ab ya dekh ta hai hum

