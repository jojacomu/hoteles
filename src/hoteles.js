import { consultarHoteles } from "./apihotels.js";
const main = document.querySelector(".hotels-container");
const respuesta2 = await consultarHoteles();
const data = await respuesta2.json();
console.log(data);
main.innerHTML = "";
data.forEach((hotel) => {
    const cardHotel = document.createElement("div");
    cardHotel.className = "card";
    main.appendChild(cardHotel);
    const imagenHotel = document.createElement("img");
    imagenHotel.setAttribute("src", hotel.photo);
    imagenHotel.setAttribute("alt", hotel.name);
    imagenHotel.className = "hotel-image";
    cardHotel.appendChild(imagenHotel);
    const nombreHotel = document.createElement("h2");
    nombreHotel.innerText = hotel.name;
    nombreHotel.className = "hotel-name";
    cardHotel.appendChild(nombreHotel);
    const textoPais = document.createElement("span");
    textoPais.innerHTML = "Pais"
    textoPais.className = "paises";
    cardHotel.appendChild(textoPais);
    const paisHotel = document.createElement("p");
    paisHotel.innerText = hotel.country;
    paisHotel.className = "hotel-pais";
    cardHotel.appendChild(paisHotel);
    const textoRooms = document.createElement("span");
    textoRooms.innerHTML = "Rooms"
    textoRooms.className = "rooms";
    cardHotel.appendChild(textoRooms);
    const roomsHotel = document.createElement("p");
    roomsHotel.innerText = hotel.rooms;
    roomsHotel.className = "hotel-rooms";
    cardHotel.appendChild(roomsHotel);
});

// Llamamos a la función para mostrar las publicaciones cuando la página se cargue
window.onload = consultarHoteles;