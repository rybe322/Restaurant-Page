import { Header } from "./header"
import { Home } from "./home"
import { Menu } from "./menu"
import { Contact } from "./contact"
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

  return {initialLoad, renderHome, renderMenu, renderContact}

}