document.addEventListener("DOMContentLoaded", () => {
  const botonMenu = document.querySelector(".menu-hamburguesa");
  const navLinks = document.querySelector(".nav-links");

  if (botonMenu && navLinks) {
    botonMenu.addEventListener("click", () => {
      navLinks.classList.toggle("activo");
      botonMenu.classList.toggle("activo");
    });

    navLinks.querySelectorAll("a").forEach((enlace) => {
      enlace.addEventListener("click", () => {
        navLinks.classList.remove("activo");
        botonMenu.classList.remove("activo");
      });
    });
  }
});