// Code here
fetch('http://localhost:3000/beers/1')
.then(res => res.json())
.then(json => beerInfo(json))

const beerInfo = (beer) => {
    let beerDetails = document.getElementsByClassName('beer-details')[0]

    beerDetails.innerHTML = ''

    beerDetails.innerHTML = `
    <h2>${beer.name}</h2>
    <img src=${beer.image_url}>

    <form class="description">
    <textarea>${beer.description}</textarea>
    <button>Update Beer</button>
    </form>

    <h3>Leave a Review</h3>
    <form class="review-form">
      <textarea></textarea>
      <input type="submit" value="Submit">
    </form>

    <h3>Customer Reviews</h3>
    <ul class="reviews">
    </ul>
    `
    beer.reviews.forEach(review => {
        let ul = document.querySelector('ul.reviews')
        let li = document.createElement('li')
        li.textContent = review
        ul.appendChild(li)
    })
    let description = document.querySelector('form.description')
    console.log(description)

    description.addEventListener('submit', (e) => updateDescription(e, beer))

}

const updateDescription = (e, beer) => {

    e.preventDefault()
    console.log(beer)
    let inputByIndex = e.target[0].value
    console.log(inputByIndex)

    fetch(`http://localhost:3000/beers/${beer.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(inputByIndex)
    })
    .then(res => res.json())
    .then(json => {
        let description = document.querySelector('form.description')
        description.innerHTML = `
        <textarea>${json.inputByIndex}</textarea>
        <button>Update Beer</button>
        `
        console.log(description)
    })
}
//I'm getting the value I want, was trying to figure out why I'm getting a 400 w/ my PATCH