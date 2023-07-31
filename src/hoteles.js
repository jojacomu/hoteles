import { consultarHoteles } from "./apihotels.js";
const sectionHotels = document.querySelector(".hotels-container");
const respuesta2 = await consultarHoteles();
const data = await respuesta2.json();
console.log(data);
sectionHotels.innerHTML = "";
data.forEach((hotel) => {
    const cardHotel = document.createElement("div");
    cardHotel.className = "card";
    sectionHotels.appendChild(cardHotel);
    const imagenHotel = document.createElement("img");
    imagenHotel.setAttribute("src", hotel.photo);
    imagenHotel.setAttribute("alt", hotel.name);
    imagenHotel.className = "hotel-image";
    cardHotel.appendChild(imagenHotel);
    const nombreHotel = document.createElement("h2");
    nombreHotel.innerText = hotel.name;
    nombreHotel.className = "hotel-name";
    cardHotel.appendChild(nombreHotel);
    const paisHotel = document.createElement("p");
    paisHotel.innerText = hotel.country;
    paisHotel.className = "hotel-pais";
    cardHotel.appendChild(paisHotel);
    const textoCard = document.createElement("div")
    cardHotel.appendChild(textoCard);
    textoCard.className = "textoCard"
    const roomsHotel = document.createElement("p");
    roomsHotel.innerText = hotel.rooms;
    roomsHotel.className = "hotel-rooms";
    textoCard.appendChild(roomsHotel);
    const textoRooms = document.createElement("p");
    textoRooms.innerHTML = "rooms"
    textoRooms.className = "rooms";
    textoCard.appendChild(textoRooms);
    const priceHotel = document.createElement("p");
    priceHotel.innerText = hotel.price;
    priceHotel.className = "hotel-price";
    cardHotel.appendChild(priceHotel);
});

// // Llamamos a la función para mostrar las publicaciones cuando la página se cargue
// window.onload = consultarHoteles;

// const filtroInput = document.getElementById('filtro-titulo');