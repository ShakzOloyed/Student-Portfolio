const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuItems = document.querySelector(".nav-menu");

hamburgerIcon.addEventListener("click", (e) => {
  hamburgerIcon.classList.toggle("active");
  menuItems.classList.toggle("active");
  console.log("click");
});

// document.querySelector(".nav-links").forEach((n) =>
//   n.addEventListener("click", () => {
//     hamburgerIcon.classList.remove("active");
//     menuItems.classList.remove("active");
//   })
// );

// INPUT ANIMATION
