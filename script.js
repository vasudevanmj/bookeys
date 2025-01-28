// selete popup box overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

// selete cancel button

var cancelbutton = document.getElementById("cancel-book")
cancelbutton.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

// selete container :add-book,book-titel,book-author-input,book-description-input

var container       = document.querySelector(".container")
var addbook         = document.getElementById("add-book")
var booktitel       = document.getElementById("book-titel-input")
var bookauthor      = document.getElementById("book-anutor-input")
var bookdescription = document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
        div.setAttribute("class","book-container")
        div.innerHTML=` <h2>${booktitel.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdescription.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
        container.append(div)
           popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

function deletebook(event){
    event.target.parentElement.remove()

}