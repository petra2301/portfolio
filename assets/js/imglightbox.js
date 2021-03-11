const imgLightbox = document.querySelectorAll(".img-lightbox");
const lightboxContainer = document.querySelector(".lightboxBg");
const lightbox = document.querySelector(".lightbox");
const closeLightboxIcon = document.querySelector("#closeLightbox");

for (let i = 0; i < imgLightbox.length; i++) {
    let clickedImg = imgLightbox[i];

    clickedImg.addEventListener("click", displayLargeImg, false);

    function displayLargeImg() {

        const imgSrc = clickedImg.getAttribute("src");
        const imgAlt = clickedImg.getAttribute("alt");  
        console.log(imgSrc);
        lightboxContainer.classList.remove("d-none");
        lightbox.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`;
    }
}

closeLightboxIcon.addEventListener("click", closeLightbox);

function closeLightbox() {
    lightboxContainer.classList.add("d-none");
}