const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
]

// Declaration des variables
const carousel = document.querySelector("#banner")
const dots = document.querySelector(".dots")
const arrow_left = document.querySelector(".arrow_left")
const arrow_right = document.querySelector(".arrow_right")

let activeDot = null

// Initialisation du carousel
let currentImage = 0

// Fonction pour afficher l'image
function showImage() {
  carousel.querySelector(".banner-img").src = slides[currentImage].image
  carousel.querySelector(".tagLine").innerHTML = slides[currentImage].tagLine

  // Update du dot
  if (activeDot !== null) {
    activeDot.classList.remove("dot_selected")
  }
  activeDot = dots.querySelector(`.dot[data-image="${currentImage}"`)
  activeDot.classList.add("dot_selected")
}

// Fonction pour naviguer vers l'image précédente
function previousImage() {
  currentImage--
  if (currentImage < 0) {
    currentImage = slides.length - 1
  }
  if (currentImage === -1) {
    currentImage = 3
  }
  showImage()
}

// Fonction pour naviguer vers l'image suivante
function nextImage() {
  currentImage++
  if (currentImage >= slides.length) {
    currentImage = 0
  }
  if (currentImage === 4) {
    currentImage = 0
  }
  showImage()
}

// Initialisation des dots
for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("span")
  dot.classList.add("dot")
  dot.setAttribute("data-image", i)
  dots.appendChild(dot)

  if (i === currentImage) {
    activeDot = dot
    dot.classList.add("dot_selected")
  }
}

// Ecoute de l'évenement sur les dots
carousel.addEventListener("click", event => {
  if (event.target.classList.contains("dot")) {
    currentImage = event.target.getAttribute("data-image")
    showImage()
  }
})

// Ecoute de l'évenement sur les flèches
arrow_left.addEventListener("click", previousImage)

arrow_right.addEventListener("click", nextImage)
