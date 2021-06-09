//page loads -> show 50 monsters 
// grab html container for monsters 
//create name and age and description
//append to monsterContainer
//check if works in browser

const url = "http://localhost:3000/monsters"
const monsters = []

document.addEventListener('DOMContentLoaded', () => {
    getFiftyMonsters()
})

const getFiftyMonsters = () => {
  fetch("http://localhost:3000/monsters/?_limit=50")
  .then(res => res.json())
  .then(data => data.forEach(putMonstersOnPage(monster))
  .then(console.log(data))
  )
}

const putMonstersOnPage = (monster) => {
  let monsterContainer = document.querySelector('#monster-container')
    let name = document.createElement('h2')
    let age = document.createElement('h4')
    let description = document.createElement('hp')
    name.innerText = monster.name
    age.innerText = monster.age
    description.innerText = monster.description
    monsterContainer.append(name,age,description)
}

also: 
const monsterContainerDiv = document.querySelector("#monster-container")
const renderMonster = (monster) => {
  let monsterDiv = document.createElement('div')
    monsterDiv.innerHTML = `
     <h2>${monster.name}</h2>
     <h4>${monster.age}</h4>
     <p>${monster.description}</p>
    `
    monsterContainer.append(monsterDiv)
}