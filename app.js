// const hamburgerIcon = document.querySelector(".hamburger-icon");
// const menuItems = document.querySelector(".nav-menu");

// console.log("Hello");

//   hamburgerIcon.addEventListener("click", (e) => {
//   hamburgerIcon.classList.toggle("active");
//   menuItems.classList.toggle("active");
//   hamburgerIcon.toggle('.block');

//   console.log("click")
  

// });

// document.querySelector(".nav-links").forEach (n => n.addEventListener("click", () => {
//   hamburgerIcon.classList.remove("active");
//   menuItems.classList.remove("active");

// }));

// INPUT ANIMATION
'use strict';


const ham = document.querySelector('.header .nav-menu .menu-list .hamburger-icon');
const mobile_menu = document.querySelector('.header .nav-menu .menu-list ul');
const menuItems = document.querySelectorAll('.header .nav-menu .menu-list ul li a');
const header = document.querySelector('.header .container .nav-menu');

ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});
// console.log(ham);

document.addEventListener('scroll', () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
})

menuItems.forEach((items) => {
    items.addEventListener('click', () => {
      ham.classList.toggle('active');
      mobile_menu.classList.toggle('active');

    });
}); 

// SKILLS TAB ///
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)

    tabContent.forEach(tabContents => {
      tabContents.classList.remove('skills_active')
    })
    target.classList.add('skills_active')

    tabs.forEach(tab => {
      tab.classList.remove('skills_active')
    })
    tab.classList.add('skills_active')
  });
})