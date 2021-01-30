// Header navigation

const dropDownBtn = document.querySelector('.header-bar');
const dropDownMenu = document.querySelector('.dropdown-container');


dropDownBtn.addEventListener('mouseover', function () {
  dropDownMenu.style.display = 'block';
  dropDownBtn.classList.toggle('open');
})

dropDownMenu.addEventListener('mouseleave', function () {
  dropDownMenu.style.display = 'none';
  dropDownBtn.classList.remove('open');

})

// Mobile navigation

const sideMenu = document.querySelector('.side-menu');
const menu = document.querySelector('.menu-btn');
const close = document.querySelector('.menu-close');
const innerClose = document.querySelector('.inner-close');

const innerBtn = document.querySelector('.innerlink-btn');
const innerLink = document.querySelector('.inner-links')

innerBtn.addEventListener('click', function () {
  innerLink.classList.toggle('active');
})
innerClose.addEventListener('click', function () {
  innerLink.classList.remove('active');
})

menu.addEventListener('click', function () {
  sideMenu.classList.toggle('active');
})
close.addEventListener('click', function () {
  sideMenu.classList.remove('active');
})



