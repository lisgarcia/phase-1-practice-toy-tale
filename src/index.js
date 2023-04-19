let addToy = false;
let toyArry



const toyList=document.querySelector("#toy-collection")

function getToys () {
  return fetch("http://localhost:3000/toys")
    .then(resp=>resp.json())
    .then (toys => {
        toyArry=toys
       // toysList.className="card"

      toys.map(toys => {
       // const toyCards=document.createElement()
        createToyCard(toys)})}
      )}

const toyCard=document.createElement('li')
const toyImg=document.createElement("img")
const h2Tag= document.createElement("h2")
const pLikes=document.createElement("p")
const btn=document.createElement("button")

function createToyCard(toys) {
  // toyImg=document.querySelector("img")
  // h2Tag=document.querySelector("h2")
  // pLikes=document.querySelector("p")
  // btn=document.querySelector("button")

  toyCard.append(toyImg, h2Tag, pLikes, btn)

  toyImg.src=toys.image
  toyImg.alt=toys.name
  h2Tag.textContent=toys.name
  pLikes.textContent=toys.likes

  toyList.append(toyCard)
}



document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


getToys()