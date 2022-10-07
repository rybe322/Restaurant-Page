import { createHTMLElement } from "./helpers"

export const Menu = () => {
  const contentDiv = createHTMLElement('div', {id: 'content'})

  const createMenuItem = (name, price, description) => {
    const menuItemDiv = createHTMLElement('div')
    menuItemDiv.classList.add('menu-item')
    const nameH3 = createHTMLElement('h3', {textContent: name})
    nameH3.classList.add('menu-item-name')
    const priceP = createHTMLElement('p', {textContent: price})
    priceP.classList.add('menu-item-price')
    const descriptionP = createHTMLElement('p', {textContent: description})
    descriptionP.classList.add('menu-item-description')
    menuItemDiv.appendChild(nameH3)
    menuItemDiv.appendChild(priceP)
    menuItemDiv.appendChild(descriptionP)
    return menuItemDiv
  }
  
  const getChefsChoice = () => {
    const menuItemDiv = createHTMLElement('div', {id:'menu-item-container'})
    const chefH2 = createHTMLElement('h2', {textContent: 'Chef\'s Choice'})
    menuItemDiv.appendChild(chefH2)
    menuItemDiv.appendChild(createMenuItem('Dish Name 1','$100', 'Tempus egestas sed sed risus. Duis convallis convallis tellus id. Ultricies tristique nulla aliquet enim tortor at. Cursus turpis massa tincidunt dui. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.'))
    menuItemDiv.appendChild(createMenuItem('Dish Name 2','$100', 'Tempus egestas sed sed risus. Duis convallis convallis tellus id. Ultricies tristique nulla aliquet enim tortor at. Cursus turpis massa tincidunt dui. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.'))
    menuItemDiv.appendChild(createMenuItem('Dish Name 3','$100', 'Tempus egestas sed sed risus. Duis convallis convallis tellus id. Ultricies tristique nulla aliquet enim tortor at. Cursus turpis massa tincidunt dui. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.'))
    return menuItemDiv
  }
  

  const getCocktails = () => {
    const cocktailDiv = createHTMLElement('div', {id:'cocktail-item-container'})
    const cocktailH2 = createHTMLElement('h2', {textContent: 'Chef\'s Cocktails'})
    cocktailDiv.appendChild(cocktailH2)
    cocktailDiv.appendChild(createMenuItem('Cocktail Name 1','$30', 'Tempus egestas sed sed risus. Duis convallis convallis tellus id.'))
    cocktailDiv.appendChild(createMenuItem('Cocktail Name 2','$50', 'Tempus egestas sed sed risus. Duis convallis convallis tellus id.'))
    cocktailDiv.appendChild(createMenuItem('Cocktail Name 3','$25', 'Tempus egestas sed sed risus. Duis convallis convallis tellus id.'))
    return cocktailDiv
  }

  const getDeserts = () => {
    const desertDiv = createHTMLElement('div', {id:'desert-item-container'})
    const desertH2 = createHTMLElement('h2', {textContent: 'Chef\'s Deserts'})
    desertDiv.appendChild(desertH2)
    desertDiv.appendChild(createMenuItem('Desert Name 1','$30', 'Duis convallis convallis tellus id.'))
    desertDiv.appendChild(createMenuItem('Desert Name 2','$50', 'Tempus egestas sed sed risus. Duis convallis convallis tellus id. Tempus egestas sed sed risus.'))
    desertDiv.appendChild(createMenuItem('Desert Name 3','$25', 'Tempus egestas sed sed risus. Duis convallis convallis tellus id.'))
    return desertDiv
  }
  

  const getMenu = () => {
    contentDiv.appendChild(createHTMLElement('h1', {id: 'menu-top', textContent: 'Menu'}))
    contentDiv.appendChild(getChefsChoice())
    contentDiv.appendChild(getCocktails())
    contentDiv.appendChild(getDeserts())
    return contentDiv
  }

  return {getMenu}

}