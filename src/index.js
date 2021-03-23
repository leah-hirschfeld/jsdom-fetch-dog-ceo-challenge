console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', fetchAllTheThings)

function fetchAllTheThings(){
    fetchDogImages()
    fetchBreeds()
    
 
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
            debugger
            //create li elements with breed names to update the text
        }

    })
}