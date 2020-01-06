const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Click burger and have menu appear/disappear
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });

    //Click links and have the menu disappear
    nav.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
}

window.onload = function() {
    navSlide();
    document.body.classList.add('fade');
}