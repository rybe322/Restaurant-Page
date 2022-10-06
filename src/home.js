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


Use time element for time-related piece of information.


<div id="root">
  <div id="content">
    <h1>L’unico</h1>


    About Section

    Hours

    Location
  </div>
</div>


 <p><meta itemprop="opens" content="08:00:00">8:00 a.m. -<meta itemprop="closes" content="20:00:00">8:00 p.m.</p>
  

*/


export const Home = () => {
  const contentDiv = createHTMLElement('div', {id: 'content'})

  const getAbout = () => {
    const aboutDiv = createHTMLElement('div', {id:'about-div'})
    const aboutH2 = createHTMLElement('h2', {textContent: 'About'})
    const aboutP = createHTMLElement('p', {textContent: 'About section'})
    aboutDiv.appendChild(aboutH2)
    aboutDiv.appendChild(aboutP)
    return aboutDiv
  }

  const makeHoursElement = (day, openingHours, closingHours) => {
    const textContent = `${day}: ${openingHours} A.M - ${closingHours} P.M`
    return createHTMLElement('p', {
      class: 'hours-row',
      'textContent': textContent
    })
  }

  const getHours = () => {
    const hoursDiv = createHTMLElement('div', {id: 'hours-div'})
    const hoursH2 = createHTMLElement('h2', {textContent: 'Hours'})

    hoursDiv.appendChild(hoursH2)
    hoursDiv.appendChild(makeHoursElement('Sunday', '08:00', '09:00'))
    hoursDiv.appendChild(makeHoursElement('Monday', '08:00', '09:00'))
    hoursDiv.appendChild(makeHoursElement('Tuesday', '08:00', '09:00'))
    hoursDiv.appendChild(makeHoursElement('Wednesday', '08:00', '09:00'))
    hoursDiv.appendChild(makeHoursElement('Thursday', '08:00', '09:00'))
    hoursDiv.appendChild(makeHoursElement('Friday', '08:00', '09:00'))
    hoursDiv.appendChild(makeHoursElement('Saturday', '08:00', '09:00'))
    return hoursDiv
  }

  const getLocation = () => {
    const locationDiv = createHTMLElement('div', {id: 'location-div'})
    const locationH2 = createHTMLElement('h2', {textContent: 'Location'})
    const address = createHTMLElement('address', {textContent: '123 Fake St. Fake Illinois 12345'})
    locationDiv.appendChild(locationH2)
    locationDiv.appendChild(address)
    return locationDiv
  }

  const getHome = () => {
    contentDiv.appendChild(getAbout())
    contentDiv.appendChild(getHours())
    contentDiv.appendChild(getLocation())
    return contentDiv
  }

  return {getHome}
}