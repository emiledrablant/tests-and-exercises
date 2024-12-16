
import "./style.css"

const carouselFrame = document.getElementById("carousel-frame");
const carouselContent = document.getElementById("carousel-content");
const carouselImages = document.getElementsByClassName("carousel-item");

carouselFrame.addEventListener("click", () => {
    const arrayOfImages = Array.from(carouselImages);
    for (const item of carouselImages) {
        if (item.classList.contains("current-image")) {
            const currentImage = arrayOfImages.indexOf(item);
            if (currentImage === arrayOfImages.length - 1) {
                carouselContent.style.left = 0;
                item.classList.remove("current-image");
                arrayOfImages[0].classList.add("current-image");
                break;
            } else {
                carouselContent.style.left = -400 * (currentImage + 1) + "px";
                item.classList.remove("current-image");
                arrayOfImages[currentImage+1].classList.add("current-image");
                break;
            }
        }
    }
});