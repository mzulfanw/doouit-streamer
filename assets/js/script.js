const burgerMenu = document.querySelector('.burger-menu .burger');
const burger = document.querySelector('.burger-menu');


burgerMenu.addEventListener('click', function () {
    const menu = document.querySelector('.menu-mobile');
    if (menu.style.display === "none") {
        menu.style.display = "block";

    } else {
        menu.style.display = "none";
    }

});

