import { createHTMLElement } from "./helpers"

export const Menu = () => {

  const getMenu = () => {
    return createHTMLElement('div',{textContent: 'MENU'})
  }

  return {getMenu}
}