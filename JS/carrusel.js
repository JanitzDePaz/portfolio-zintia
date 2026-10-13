document.addEventListener("DOMContentLoaded", () => {
  const botonesCarrusel = document.querySelectorAll(".btn-carrusel");

  botonesCarrusel.forEach((boton) => {
    boton.addEventListener("click", () => {
      const direccion = parseInt(boton.getAttribute("data-direccion"));
      const contenedorCarrusel = boton.closest(".carrusel-botones");
      const track = contenedorCarrusel.querySelector(".carrusel-track");

      if (track) {
        const anchoImagen = track.querySelector("img").clientWidth + 15;
        track.scrollBy({
          left: anchoImagen * direccion,
          behavior: "smooth"
        });
      }
    });
  });
});