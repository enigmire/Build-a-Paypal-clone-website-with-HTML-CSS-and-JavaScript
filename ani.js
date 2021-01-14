const dropDownBtn = document.querySelector('.header-bar');
const dropDownMenu = document.querySelector('.dropdown-container');
const header = document.querySelector('.header');
const removeDropDown = document.querySelector('.fa-close');

dropDownBtn.addEventListener('mouseover', function () {
  dropDownMenu.style.display = 'block';
  // dropDownBtn.style.borderBottom = '3px solid white';
  dropDownBtn.classList.toggle('open');
})

removeDropDown.addEventListener('click', function () {
  dropDownMenu.style.display = 'none';
  dropDownBtn.classList.remove('open');


})

dropDownMenu.addEventListener('mouseleave', function () {
  dropDownMenu.style.display = 'none';
  dropDownBtn.classList.remove('open');

})
