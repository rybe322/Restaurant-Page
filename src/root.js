import { Header } from "./header"
import { Home } from "./home"
import { Menu } from "./menu"
import { Contact } from "./contact"
import { getCSSVariable } from "./helpers"
import { createHTMLElement } from "./helpers"


export const Root = () => {
  const root = document.querySelector('#root')
  const header = Header()
  const home = Home()
  const menu = Menu()
  const contact = Contact()

  const clear = () => {
    while (root.childNodes.length > 1) {
      root.removeChild(root.lastChild);
    }
  }

  const initialLoad = () => {
    root.appendChild(header.getHeader())
    root.appendChild(home.getHome())
    
  }

  const drawButtonBorder = (button) => {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.style.border = 'none')
    console.log(getCSSVariable('section-border-dotted'))
    button.style.borderLeft = getCSSVariable('section-border-dotted')
    button.style.borderRight = getCSSVariable('section-border-dotted')
    /*
    FOR DRAWING THE BORDER AROUND THE BUTTONS TODO
    console.log('hellow from draw')
    console.log(button)
    button.style.border = '1px solid black'
    */
  }

  //const getCSSVariable = (variableName) => getComputedStyle(document.documentElement).getPropertyValue(`--${variableName}`)
  

  const render = (button) => {
    console.log('hello from render')
    console.log('button', button)
    // clearButtonBorder()
    drawButtonBorder(button)
    switch(button.id) {
      case 'home' :
        renderHome()
        break;
      case 'menu' :
        renderMenu()
        break;
      case 'contact' :
        renderContact()
        break;
      default:
        break;
    }
  }

  const renderHome = () => {
    clear()
    root.appendChild(home.getHome())
  }

  const renderMenu = () => {
    clear()
    root.appendChild(menu.getMenu())
  }

  const renderContact = () => {
    clear()
    root.appendChild(contact.getContact())
  }

  return {initialLoad, renderHome, renderMenu, renderContact, render}

}