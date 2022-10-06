import { createHTMLElement } from "./helpers"


/*

NAMES:
Pot Au Feu
The Aviary
Brass Tacks
Cibo Matto
Catch 35
Parallel 37
Eleven Madison Park



<div id="root">
  <div id="content">
    <h1>L’unico</h1>


    About Section

    Hours

    Location
  </div>
</div>

*/


export const Home = () => {
  const contentDiv = document.createElement('div')

  const getHome = () => {
    return createHTMLElement('div',{textContent: 'Home'})
  }

  return {getHome}
}