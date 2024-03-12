let burgerIcon = document.querySelector(".header .container .icon");
let mobileNav = document.querySelector(".mobile-nav");
let mobileLinks = document.querySelectorAll(".mobile-nav nav a");
let divs = document.querySelectorAll(".skills .skill .bar div");
let section = document.querySelector(".about");
let cards = document.querySelectorAll(".portfolio .container .card");

burgerIcon.addEventListener("click", () => {
    // When Burger Icon Is Clicked Add Class Clicked To Burger Icon
    burgerIcon.classList.toggle("clicked");
    // If Burger Icon Have Clicked Class Edit Mobile Nav's Make It 0  Else Return
    if (burgerIcon.classList.contains("clicked")) {
        mobileNav.style.left = 0;
    } else {
        mobileNav.style.left = "100%";
    }
    // If One Of Links Is Clicked Remove Clicked Class From Burger Icon And Make Mobile Nav's Left 100%
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            burgerIcon.classList.remove("clicked");
            mobileNav.style.left = "100%";
        });
    });
});

// If Scroll Greater Than Section Or Equalls Section Offset Top Make Skill Bar Width Its Data Width
window.onscroll = function (){
    if (window.scrollY >= section.offsetTop - 300) {
        divs.forEach(div => {
            div.style.width = div.dataset.width;
        });
    };
};


// Loop All Elements In This Array
cards.forEach(card => {
    // When Card Is Clicked Go To Link That In Card's Data Link
    card.addEventListener("click", () => {
        location.assign(card.dataset.link);
    });
});
