let headLine = document.querySelector("h1.headLine");
let shopButton = document.querySelector("button.shopButton");
let hideGallery = document.querySelector("div.hideGallery");

let webMenu = document.querySelector("ul.menu");
let hamburger = document.querySelector("div.hamburger");
let closeItem = document.querySelector(".closeItem");
let mobileMenu = document.querySelector("ul.mobileMenu");
var x = window.matchMedia("(max-width: 800px)");

// Click to Change Text
headLine.addEventListener("click", () => {headLine.textContent = "Have a good time!";});

// Click to Show/Close Menu
function navMenu(x) {
    if (x.matches) {
        webMenu.style.display = "none";  
    }
    else {
        mobileMenu.style.display = "none";
        webMenu.style.display = "block";  
    }
}
navMenu(x);
x.addListener(navMenu);

hamburger.addEventListener("click", () => {
    if (x.matches) {
        closeItem.style.display = "block";
        mobileMenu.style.display = "block";
    }
});

closeItem.addEventListener("click", () => {
    if (x.matches) {
        closeItem.style.display = "none";
        mobileMenu.style.display = "none";
    }
});

// Click to Show More Content Boxes
shopButton.addEventListener("click", () => {
    hideGallery.style.display = "block";
    shopButton.style.display = "none";
});