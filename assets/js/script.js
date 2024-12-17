// Handle toggle menu click.

function showMenu() {
  const mainMenu = document.querySelector("#main-menu");
  mainMenu.style.display = "flex";
}

function closeMenu() {
  const mainMenu = document.querySelector("#main-menu");
  mainMenu.style.display = "none";
}

// handle popup
document.getElementById("close-btn").addEventListener("click", (e) => {
  document.getElementById("popup").classList.add("hide");
});

setTimeout(() => {
  document.getElementById("popup").classList.add("show");
}, 4000);
