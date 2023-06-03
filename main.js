const current = document.querySelector("#current");
const images = document.querySelector(".images");
const imgArray = document.querySelectorAll(".images img"); // Array like node list
const opacity = 0.6;

// Opacity for first subimage
imgArray[0].style.opacity = opacity;

images.addEventListener("click", imageClick);

function imageClick(event) {
    console.log(event.target);

    // Resets thumbnails' opacity
    imgArray.forEach((img) => img.style.opacity = 1);

    // Changes main image to clicked image.
    current.src = event.target.src;

    // Adds fade-in class
    current.classList.add("fade-in");

    // Removes fade-in after 500ms (0.5seconds)
    setTimeout(() => current.classList.remove("fade-in"), 500);

    // Changes current thumbnail's opacity
    event.target.style.opacity = opacity;
}