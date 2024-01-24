if (!JSON.parse(localStorage.getItem('logged'))) {
    window.location.href = "index.html";
}

function cerrarSesion() {
    localStorage.removeItem("logged");
    window.location.href = "/index.html";
}

const url = "https://639a535a3a5fbccb5264b073.mockapi.io/jugadores"
let body = document.body;
let section = document.querySelector("section")

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let jugadores = data.map(jugador =>
            `<div class="col-12 col-sm-6 col-lg-4 p-2 float-start">
            <div class="card">
            <div class="imagen-wrapper">
                <img class="card-img-top" src="https://julioavantt.github.io/guayerd-project-images/img/${jugador.dorsal}.jpg" >
                <strong class="dorsal">${jugador.dorsal}</strong>
                <div class="card-body">
                    <h5 class="card-title">${jugador.name}</h5>
                    <p class="card-text">Edad: ${jugador.edad}</p>
                    <p class="card-text">Posición: ${jugador.posicion}</p>
                    <p class="card-text">Peso: ${jugador['stats-fisico'].peso}</p>
                    <p class="card-text">Altura: ${jugador['stats-fisico'].altura}</p>
                    <p class="card-text">Equipo actual: ${jugador['equipo-actual']}</p>
                    <p class="card-text">Fecha de nacimiento: ${jugador['fecha-nacimiento']}</p>
                </div>
                </div>  
            </div>
        </div>`)
        section.innerHTML = jugadores.join().replaceAll(",", "");
    })


