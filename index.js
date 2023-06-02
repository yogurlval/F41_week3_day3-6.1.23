console.log("hello world")

let message = document.querySelector("#message")


const addMovie = (evt) =>{
    evt.preventDefault()

    let inputField = document.querySelector("input")
    let movie = document.createElement("li")
    let movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)

    movie.appendChild(movieTitle) // <li> <span> movietitle </span> </li>

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = ("x")
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn) // <ul> <li> <span> movietitle </span> <button> x </button> </li> </ul>

    document.querySelector("ul").appendChild(movie)

    inputField.value = " "

}



let form = document.querySelector("form")
form.addEventListener("submit", addMovie)

const deleteMovie = (event) =>{
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
    revealMessage()
}

const crossOffMovie = (event) =>{
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")){
        message.textContent = "Movie Watched!"
    } else {
        message.textContent = "Movie Added Back!"
    }
    revealMessage()
  
} 


const revealMessage = () =>{
    message.classList.remove("hide")
    setTimeout(() => {
        message.classList.add("hide")
    }, 1000 )
}

