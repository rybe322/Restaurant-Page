export const createHTMLElement = (elementType, attrs) => {
  const element = document.createElement(elementType)
  for (let key in attrs) {
    element[key] = attrs[key]
  }
  return element
}