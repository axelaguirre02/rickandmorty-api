const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
let pagina = 1;

btnSiguiente.addEventListener("click", () => {
  if (pagina <= 42) {
    pagina += 1;
    mostrarPersonajes();
  }
});

btnAnterior.addEventListener("click", () => {
  if (pagina >= 1) {
    pagina -= 1;
    mostrarPersonajes();
  }
});

async function mostrarPersonajes() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${pagina}`
    );

    if (response.ok) {
      const data = await response.json();

      let personajes = "";
      data.results.forEach((personaje) => {
        personajes += `
        <div class="personaje">
          <img class="imagen" src="${personaje.image}" alt="${personaje.name}">
          <h3 class="nombre">${personaje.name}</h3>
          <p>${personaje.status}</p>
        </div>
        `;
      });

      document.getElementById("contenedor").innerHTML = personajes;
    } else {
      alert("Error al obtener los personajes.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

mostrarPersonajes();
