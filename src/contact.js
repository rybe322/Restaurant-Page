import { createHTMLElement } from "./helpers"

export const Contact = () => {

  const getContact = () => {
    return createHTMLElement('div',{textContent: 'CONTACT'})
  }

  return {getContact}
}