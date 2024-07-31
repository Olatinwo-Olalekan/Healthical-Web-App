"use strict";

//Making the 'learn more' button log to the cpnsole when clicked

const learnMore = document.getElementById("learnButton");

learnMore.addEventListener("click", function () {
  console.log("Button Clicked...");
});

//Hamburger menu
const hamburger = document.getElementById('hamburger')
const links = document.getElementById('links')
const closeBtn = document.getElementById('closeButton')

function openMenu () {
  links.classList.remove('hidden')
}

function closeMenu () {
  links.classList.add('hidden')
}

hamburger.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)