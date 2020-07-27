let div = document.querySelector('.beer-details')
let form = document.querySelector('description')
let form2 = document.querySelector('review-form')
let updateButton = document.querySelector('button')
let submitButton = document.querySelector('submit')
// form2.addEventListener('submit', (e) => reviewSubmit(e))
updateButton.addEventListener('click', (e) => updateBeer(e, item))

// Code here
const fetchAllBeers = () => {
fetch('http://localhost:3000/beers')
.then(res => res.json())
.then(json => json.forEach(content => beersInfo(content)))
}
fetchAllBeers()

const beersInfo = (beers) => {
let h2 = div.querySelector('h2')
let img = div.querySelector('img')
let h3 = div.querySelector('h3')
let textarea = div.querySelector('textarea')
// let textarea2 = document.querySelector('textarea2')

h2.innerText = beers.name
img.src = beers.image_url
h3.innerText = beers.reviews
textarea.innerHTML = beers.description
}
//kept getting error when attempting to display info,  the info would display but saying unable to find by name etc..
beersInfo()


const updateBeer = (e, item) => {
    console.log(item)
    e.preventDefault()
    fetch(`http://localhost:3000/beers${id}`,{
        method: 'PATCH',
       headers: {
             'Content-Type': 'applicatoin/json'
        },
         body: JSON.stringify(beers)
     })
     .then (res => res.json())
     .then(json => console.log(json))
    
}

// attempted to update beer with new info, was unable to get patch to work, I think eathier due to the eventlistner or something in this code.