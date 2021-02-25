const openMobileMenu = document.querySelector("#openMobileMenu");
const closeMobileMenu = document.querySelector("#closeMobileMenu");
const header = document.querySelector("header");

openMobileMenu.addEventListener("click", displayMenu);

function displayMenu() {
    header.classList.toggle("d-none");
    openMobileMenu.classList.toggle("shiftedMobileMenu");

}