/* ########## SHOW MENU ########## */
const showMenu = (navbarId, toggleId, contentId) => {
  const navbar = document.getElementById(navbarId);
  const toggle = document.getElementById(toggleId);
  const content = document.getElementById(contentId);

  if (toggle && navbar) {
    toggle.addEventListener("click", () => {
      navbar.classList.toggle("show");
      toggle.classList.toggle("rotate");
      content.classList.toggle("expander");
    });
  }
};

showMenu("sidebar", "nav-toggle", "content");

/* ########## MENU ACTIVE COLOR ########## */
const menuOption = document.querySelectorAll(".nav__link");

function activeColor() {
  menuOption.forEach((op) => op.classList.remove("active"));
  this.classList.add("active");
}

menuOption.forEach((o) => o.addEventListener("click", activeColor));
