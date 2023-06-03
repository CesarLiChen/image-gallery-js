const current = document.querySelector("#current");
const images = document.querySelector(".images");
const imgArray = document.querySelectorAll(".images img"); // Array like node list
const opacity = 0.6;

// Opacity for first subimage
imgArray[0].style.opacity = opacity;

images.addEventListener("click", imageClick);

function imageClick(event) {
    console.log(event.target);

    // Changes main image to clicked image.
    current.src = event.target.src;
}