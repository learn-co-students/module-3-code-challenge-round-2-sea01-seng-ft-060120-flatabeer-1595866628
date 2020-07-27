// Code here



fetch('http://localhost:3000/beers/1')
.then(res => res.json())
// .then(json => console.log(json))
.then(json => addContent(json))

const addContent = (beer) => {
    let h2 = document.querySelector('h2')
    let img = document.querySelector('img')
    let desc = document.querySelector('.description').querySelector('textArea')

    let beerForm = document.querySelector('.description')
    beerForm.addEventListener('submit', (e) => updateBeer(e))
    let reviewForm = document.querySelector('.review-form')
    reviewForm.addEventListener('submit', (e) => addReview(e))

    // console.log(h2)    
    // console.log(img)
    // console.log(desc)

    h2.innerText = beer.name
    img.src = beer.image_url
    desc.innerText = beer.description
}

const updateBeer = (e) => {
    e.preventDefault()
    // console.log(e.target)
    console.log(e.target[0].value)


    // let desc = document.querySelector('.description').querySelector('textArea')
    // // console.log(desc.textArea)
    
    // fetch(`http://localhost:3000/beers/1`, {
    //     method:'PATCH',
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body: JSON.stringify({description:desc})
    // })
    // .then(res => res.json())
    // .then(json => {
    //   let oldDesc =  desc.querySelector('.text-area')
    //   oldDesc.innerText = `${desc}`
    // })
}

const addReview = (e) => {
    console.log(e.target[0].value)
    let ul = document.querySelector('.reviews')
    // console.log(ul)
    debugger
    ul.innerHTML = ''
    // console.log(ul)

    let review = document.createElement('li')
    review.innerText = e.target.innerText

}

