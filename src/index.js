const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', fetchAllTheThings)

function fetchAllTheThings(){
    fetchDogImages()
    fetchBreeds()
    //find dropdown menu
    const breedDropdown = document.getElementById("breed-dropdown")

    //add event listener
    breedDropdown.addEventListener('change', filterBreeds)
    }


function fetchDogImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
        json["message"].forEach(dogImage => {
            let imageElement = document.createElement("img");
            imageElement.src = dogImage;
            const dogDiv = document.getElementById("dog-image-container")
            dogDiv.appendChild(imageElement);
        })
    })
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        for (const breedName in json["message"]){
            const listItem = document.createElement("li")
            listItem.addEventListener("click", colorChange)
            listItem.innerText = breedName
            const breedContainer = document.getElementById("dog-breeds")
            breedContainer.appendChild(listItem)
        }

    })
}

function colorChange(event) {
    event.target.style.color = "purple"
}


function filterBreeds(event) {
    const userSelection = event.target.value
    const breedList = document.getElementsByTagName('li')

    for (const breed of breedList) {
        if (breed.innerText.startsWith(userSelection)){
            breed.style.display = ''
        } else {
            breed.style.display = "none"
        }
        
    }
}