////////////
// Footer //
////////////

let footer = document.querySelector("footer")
let i = 0
footer.addEventListener("click",function(){
  i++
  console.log(`clique numéro ${i}`)
})

///////////////
// Hamburger //
///////////////

let hamburger = document.querySelector("#navbarHeader")
let navBarButton = document.querySelector(".navbar-toggler-icon")
navBarButton.addEventListener("click",function(){
  hamburger.classList.toggle("collapse")
})


//////////////
// Edit Red //
//////////////

// querySelector("div:nth-child(1) .col-8") selectionne la première div et ensuite le premier enfant avec la classe .col-8//

let editButton1 = document.querySelector(".card .btn-outline-secondary")
let editText1 = document.querySelector(".card .card-text")


editButton1.addEventListener("click",function(){
  if(editText1.style.color == "red"){
    editText1.style.color = ""
  }
  else if(editText1.style.color != "red"){
    editText1.style.color = "red"
  }
})

//////////////////
// Edit 2 Green //
//////////////////

let editButton = document.querySelectorAll(".card .btn-outline-secondary")
let editText = document.querySelectorAll(".card .card-text")

editButton[1].addEventListener("click",function(){
  if(editText[1].style.color == "green"){
    editText[1].style.color = ""
  }
  else if(editText[1].style.color != "green"){
    editText[1].style.color = "green"
  }
})

//////////////////////
// Remove Bootstrap //
//////////////////////

let navBar = document.querySelector(".navbar")
let bootstrap = document.querySelector("link")

navBar.addEventListener("dblclick",function(){
  if(bootstrap.href == "javascript:void(0)"){
    bootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  }else{
    bootstrap.href = "javascript:void(0)"
  }
})

//////////
// View //
//////////

let allCardButton = document.querySelectorAll(".card .btn-success")
let allCardText = document.querySelectorAll(".card .card-text")
let allCardImg = document.querySelectorAll(".card img")

allCardButton.forEach((card,i) => {
  let toggleCard = false
  var cardText = allCardText[i]
  var cardImg = allCardImg[i]
  var parent = cardImg.nextElementSibling

  card.addEventListener("mouseover",function(){
    if(toggleCard == false){
      cardImg.style.transform = "scale(0.2)"
      cardText.remove()
      toggleCard = true
    }else if(toggleCard ==true){
      cardImg.style.transform = "scale(1)"
      parent.insertBefore(cardText, parent.childNodes[1])
      toggleCard = false
    }
  })
})


/////////////////////
// ==> Grey button //
/////////////////////

let greyButton = document.querySelector(".btn-secondary")
let parentCard = document.querySelectorAll(".row:last-child")[1]

greyButton.addEventListener("click",function(){
  let firstCard = document.querySelector(".col-md-4")
  let lastCard = document.querySelector(".col-md-4:last-child")
  parentCard.insertBefore(lastCard, firstCard)
})


/////////////////////
// ==> Blue button //
/////////////////////

let blueButton = document.querySelector(".btn-primary")
blueButton.href = "javascript:void(0)"

blueButton.addEventListener("click",function(){
  let firstCard = document.querySelector(".col-md-4")
  parentCard.insertBefore(firstCard, null)
})

///////////////////////////
// Focus + Keyboard event//
//////////////////////////

let body = document.querySelector("body")
let logo = document.querySelector("strong").parentElement
let toggleFocus = false

logo.addEventListener("focus",function(){
  toggleFocus = true
  console.log(toggleFocus)
})
logo.addEventListener("blur",function(){
  toggleFocus = false
  console.log(toggleFocus)
})

logo.addEventListener("keydown",function(e){
  body.classList.remove("col-4")
  body.classList.remove("offset-md-4")
  body.classList.remove("offset-md-8")
  switch (e.code){
  case "KeyA":
    body.classList.add("col-4")
    break
  case "KeyY":
    body.classList.add("col-4")
    body.classList.add("offset-md-4")
    break
  case "KeyP":
    body.classList.add("col-4")
    body.classList.add("offset-md-8")
    break
  case "KeyB":
    break
  }
})