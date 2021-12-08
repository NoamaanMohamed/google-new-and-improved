const searchBtn = document.querySelector('#search-btn')

// searchBtn.addEventListener('click', e =>getRandomSearchName(e))

const luckyBtn = document.querySelector('#lucky-btn')

// luckyBtn.addEventListener('click', e =>getRandomSearchLink(e))

function getRandomSearchName(e) {
  e.preventDefault()
  fetch('http://localhost:3000/random')
    .then(resp => resp.json())
   
    .then(search => document.getElementById('text').innerHTML = search.name)
}

function getRandomSearchLink(e) {
  e.preventDefault()
  fetch('http://localhost:3000/random')
    .then(resp => resp.json())
   
    .then(search => document.getElementById('text').innerHTML = search.webLink)
}