// Code here
fetch('http://localhost:3000/beers/1')
    .then(res => res.json())
    .then(json => showBeer(json))

const showBeer = (beer) => {
    let h2 = document.querySelector('h2')
    let img = document.querySelector('img')
    let textDescription = document.querySelector('textarea')
    let textReview = document.querySelector('ul.reviews')
    
    
    h2.textContent = beer.name
    img.src = beer.image_url
    textDescription.textContent = beer.description

    let li = textReview.querySelector('li')
    li.remove()
    beer.reviews.forEach(review => {
        let newli = document.createElement('li')
        newli.textContent = review
        textReview.appendChild(newli)
    })
    
    
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {editDescription(e, beer)
    })
}



const editDescription = (e, beer) => {
    e.preventDefault()
    // console.log(e)
    // console.log(beer)

    let data = {description: e.target.description}

    fetch(`http://localhost:3000/beers/${beer.id}`, {
    method: "PATCH",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        
        let textDescription = document.querySelector('textarea')
        textDescription.textContent = json.description
        // beer gets updated but then resets when reloaded
        // cant remember the wy to save the change
        //
    })

}

let reviewForm = document.querySelectorAll('form')[1]
reviewForm.addEventListener('submit', (e) => {
    addReview(e)
})

const addReview = (e) => {
    e.preventDefault()

    let textReview = document.querySelector('ul.reviews')
    
    let review = document.querySelectorAll('textarea')[1]
    let li = document.createElement('li')
    li.innerText = e.target

    review.appendChild(li)
    console.log(review)
    textReview.appendChild(review)
  
   //content of the review wont display, undefine d
   //have to define
   // makes the space for it at the bottom of the screen on the show page for beer

}