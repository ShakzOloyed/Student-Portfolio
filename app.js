const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuItems = document.querySelectorAll(".nav-menu");

console.log("Hello");

  hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  menuItems.classList.toggle("active");

});

document.querySelector(".nav-links").forEach (n => n.addEventListener("click", () => {
  hamburgerIcon.classList.remove("active");
  menuItems.classList.remove("active");

}));
