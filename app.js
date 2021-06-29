//FUNCTION TO SCROLL 
const scrollButton = document.querySelector('#scrollArrow')
      scrollButton.addEventListener('click', scrollOnClick)

function scrollOnClick(event) {
    event.preventDefault()
    const section = document.querySelector('#selectGreen')
    window.scroll({top: section.offsetTop, behavior: 'smooth'})
}

//ASYNC
let sunValue = document.querySelector('#sun-select')
let waterValue = document.querySelector('#water-select')
let petsValue = document.querySelector('#pets-select')

async function fetchData(url) {
    try{
        const plantsResponse = await fetch(url)
        const plantsJSON = await plantsResponse.json()
        const plantsCard = document.querySelector('.greenFriendResult-cards')
              plantsJSON.array.forEach(plant => {
                  const divPlant = createPlant(plant)
                  plantsCard.appendChild(divPlant)
              })
    }
    catch(error){
        console.log(error)
    }
}

function createPlant(plant) {
    const div = document.createElement('div')
    div.classList.add('card-plant')
    div.innerHTML = `
        <img src="${plant.url}">
        <h3>${plant.name}</h3>
        <footer>
            <h4>${plant.price}</h4>
        </footer>
        `

}

sunValue.onchange = () => fetchData(`https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sunValue.value}&water=${waterValue.value}&pets=${petsValue.value}`)
waterValue.onchange = () => fetchData(`https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sunValue.value}&water=${waterValue.value}&pets=${petsValue.value}`)
petsValue.onchange = () => fetchData(`https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sunValue.value}&water=${waterValue.value}&pets=${petsValue.value}`)


