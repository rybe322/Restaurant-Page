export const createHTMLElement = (elementType, attrs) => {
  const element = document.createElement(elementType)
  for (let key in attrs) {
    element[key] = attrs[key]
  }
  return element
}

export const elFactory = (type, attributes, children) => {
  const el = document.createElement('type')

  for (let key in attributes) {
    el.setAttribute(key, attributes[key])
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child))
    } else {
      el.appendChild(child)
    }
  })
  return el
}
/*
const markup = elFactory(
  'div',
  { class: 'my-component' },
  elFactory('span', {}, 'Hello World!'),
  ' Thanks for reading my blog!'
)

document.body.appendChild(markup)
*/
export const getCSSVariable = (variableName) => getComputedStyle(document.documentElement).getPropertyValue(`--${variableName}`)
  