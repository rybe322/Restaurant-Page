import { createHTMLElement } from "./helpers"

export const Contact = () => {
  const contentDiv = createHTMLElement('div', {id: 'content'})

  const createContactRow = (contactType, contactText) => {
    const contactRowDiv = createHTMLElement('div')
    contactRowDiv.classList.add('contact-div')
    const contactH2 = createHTMLElement('h2', {textContent: contactType})
    const contactP = createHTMLElement('p', {textContent: contactText})
    contactRowDiv.appendChild(contactH2)
    contactRowDiv.appendChild(contactP)
    return contactRowDiv

  }


  const getContact = () => {
    contentDiv.appendChild(createHTMLElement('h1',{id: 'contact-header' ,textContent: 'Contact us' }     ))
    contentDiv.appendChild(createContactRow('Phone','123-456-7890'))
    contentDiv.appendChild(createContactRow('Email','contact@parallel37.com'))
    contentDiv.appendChild(createContactRow('Socials', 'Twitter | Instagram | Facebook | Others'))
    

    return contentDiv
  }

  return {getContact}
}