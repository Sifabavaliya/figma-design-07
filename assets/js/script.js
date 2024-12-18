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
  document.getElementById("popup").classList.remove("show");
  document.body.classList.remove("popup-open");
});

setTimeout(() => {
  document.getElementById("popup").classList.add("show");
  document.body.classList.add("popup-open");
}, 4000);

document.getElementById("dow-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");

  let isValid = true;

  if (email.value === "" || email.value === null) {
    document.getElementById("error").innerHTML =
      "Please enter a valid email address (e.g., name@example.com).";
    isValid = false;
  } else {
    document.getElementById("error").innerHTML = "";
    const link = document.createElement("a");
    link.href = "assets/pdf/mypdf.pdf"; // Change this to your PDF path
    link.download = "mypdf.pdf"; // Set the default file name
    link.click(); // Trigger the download
  }
});
