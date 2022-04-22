const burgerIcon = document.querySelector("#toggle-button");
const menuItems = document.querySelectorAll(".menu-items");


burgerIcon.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});
