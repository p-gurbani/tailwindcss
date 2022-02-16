const toggle = document.querySelector("#menuToggle");
const menu = document.querySelector("#menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
