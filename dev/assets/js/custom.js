$(document).ready(function(){
    $('.single-item').slick();
});

const burger = document.querySelector('.hamburger');

burger.addEventListener('click', function(){
    burger.classList.toggle('is-active')
})

