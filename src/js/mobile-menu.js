let menuIcon = document.getElementById("burger-icon");
let mobileMenu = document.getElementById("mobile-menu");

let toggle = false;

function show() {
  mobileMenu.style.display = "flex";
  mobileMenu.classList.remove("animate__fadeOutRight");
  mobileMenu.classList.add("animate__fadeInRight");
}

function hide() {
  mobileMenu.classList.remove("animate__fadeInRight");
  mobileMenu.classList.add("animate__fadeOutRight");
}

function manage() {
  if (!toggle) {
    show();
  } else {
    hide();
  }

  toggle = !toggle;
}

function start() {
  mobileMenu.style.display = "none";
  menuIcon.value = false;
}

menuIcon.addEventListener("click", manage);

start();
