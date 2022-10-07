/*
<div id="root">
  <header>
    <h1 id="restaurant-name">NAME</h1>
    <nav>
      <button id="home">Home</button>
      <button id="menu">Menu</button>
      <button id="contact">Contact</button>
    </nav>
  <header>
</div>

*/
import { createHTMLElement, elFactory } from "./helpers"



export const Header = () => {
  const header = createHTMLElement('header')
  //const h1 = createHTMLElement('h1', {id: 'restaurant-name', textContent: 'RESTAURANT'})
  const nav = createHTMLElement('nav', {id: 'top-nav'})
  const homeButton = createHTMLElement('button', {id: 'home', textContent: 'Home'})
  const menuButton = createHTMLElement('button', {id: 'menu', textContent: 'Menu'})
  const contactButton = createHTMLElement('button', {id: 'contact', textContent: 'Contact'})
  nav.appendChild(homeButton)
  nav.appendChild(menuButton)
  nav.appendChild(contactButton)
  //header.appendChild(h1)
  header.appendChild(nav)

  const getHeader = () => {
    return header
  }



  return {getHeader}
}