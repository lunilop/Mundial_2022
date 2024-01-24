if(!JSON.parse(localStorage.getItem('logged'))){
    window.location.href = "index.html";
}

const objetoMapa = [
    {
        jugador: "Qatar 2022",
        coordenada: [25.2841478, 51.4419568],
        ciudad: "World Cup",
    },
    {
        jugador: "Messi",
        coordenada: [-32.9520457, -60.766679],
        ciudad: "Rosario",
    },
    {
        jugador: "Di María",
        coordenada: [-32.9520457, -60.766679],
        ciudad: "Rosario",
    },
    {
        jugador: "Otamendi",
        coordenada: [-34.4718607, -58.6715832],
        ciudad: "El Talar",
    },
    {
        jugador: "Julián Álvarez",
        coordenada: [-31.6679028, -63.2032357],
        ciudad: "Calchín",
    },
    {
        jugador: "Dibu Martínez",
        coordenada: [-38.0174106, -57.6705734],
        ciudad: "Mar del Plata",
    },
];

// coordenadas donde se centra el mapa
let center = [25.2841478, 51.4419568];

// En la viariable map enviamos del mapa y el zoom inicial (12).
let map = L.map("map").setView(center, 13)

//mapa 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Ícono de Messi
let Icon = L.icon({
    iconUrl: "../img/messi.png",
    iconSize: [60, 60],
    iconAnchor: [22, 44],
    popupAnchor: [8, -41],
})

//ícono del mapa
let marker = L.marker(center, { icon: Icon }).addTo(map);

// pop up
marker.bindPopup("<b>Messi</b> <br> Los amo!").openPopup();

objetoMapa.forEach(player => {
    let option = document.createElement("option")
    const select = document.getElementById("select")
    select.appendChild(option)
    option.innerHTML = player.jugador
})

function changeMap() {
    const objeto = objetoMapa.find((item) => item.jugador === select.value);
    map.setView(new L.LatLng(...objeto.coordenada), 11);
    marker = L.marker(objeto.coordenada, { icon : Icon }).addTo(map);
    marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
}

function cerrarSesion() {
    localStorage.removeItem("logged");
    window.location.href = "/index.html";
}
