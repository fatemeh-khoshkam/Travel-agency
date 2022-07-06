'use strict';

/*** mobile menu ***/
const menu = document.querySelector('#menu');
const menuOpen = document.querySelector('#nav-open');
const menuClosed = menu.querySelector('#nav-close');
const menuOverlay = document.querySelector('.overlay');

menuClosed.addEventListener('click',()=>{
    toggleMenu();
})
menuOpen.addEventListener('click',()=>{
    toggleMenu();
})
menuOverlay.addEventListener('click',()=>{
    toggleMenu();
})

function toggleMenu(){
    menu.classList.toggle('nav_right--open');
    menuOverlay.classList.toggle('active');
}


/*** hero ***/
const heroImg = document.querySelector('#heroImg');
const heroCircleImg = document.querySelectorAll('.hero-circle img');


heroCircleImg.forEach( item =>{
    item.addEventListener('click',()=>{
        heroImg.src = item.src;
    })
})
