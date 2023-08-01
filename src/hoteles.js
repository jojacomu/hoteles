import { consultarHoteles } from "./apihotels.js";
const sectionHotels = document.querySelector(".hotels-container");
const respuesta1 = await consultarHoteles();
const data = await respuesta1.json();
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
    textoRooms.innerText = "rooms"
    textoRooms.className = "rooms";
    textoCard.appendChild(textoRooms);
    
    const priceHotel = document.createElement("p");
    priceHotel.innerText = hotel.price;
    priceHotel.className = "hotel-price";
    textoCard.appendChild(priceHotel);
    
    const bookit = document.createElement("button");
    bookit.className = "hotel-bookit clear";
    cardHotel.appendChild(bookit);
    const textoBookit = document.createElement("p");
    textoBookit.innerText = "Book it!"
    textoBookit.className = "button-bookit";
    bookit.appendChild(textoBookit);
});

// Filtro por país

import { obtenerHotelesEnArgentina } from "./apihotels.js";
const selectedCountry = document.getElementById("country");
selectedCountry.addEventListener('change', (event) => {
    const valorSeleccionado = event.target.value;
    console.log('Opción seleccionada:', valorSeleccionado);
    async () => {
        const respuesta3 = await obtenerHotelesEnArgentina();
        const data3 = await respuesta3.json();
        console.log(data3);
        }
});

// const hotelsArgentina = document.querySelector(".hotels-container");
// selectedArgentina.addEventListener("change", async () => {
// const respuesta3 = await obtenerHotelesEnArgentina();
// const data3 = await respuesta3.json();
// console.log(data3);
// hotelsArgentina.innerHTML = "";
// data3.forEach((hotel) => {
//     const cardHotel = document.createElement("div");
//     cardHotel.className = "card";
//     sectionHotels.appendChild(cardHotel);
//     const imagenHotel = document.createElement("img");
//     imagenHotel.setAttribute("src", hotel.photo);
//     imagenHotel.setAttribute("alt", hotel.name);
//     imagenHotel.className = "hotel-image";
//     cardHotel.appendChild(imagenHotel);
//     const nombreHotel = document.createElement("h2");
//     nombreHotel.innerText = hotel.name;
//     nombreHotel.className = "hotel-name";
//     cardHotel.appendChild(nombreHotel);
//     const paisHotel = document.createElement("p");
//     paisHotel.innerText = hotel.country;
//     paisHotel.className = "hotel-pais";
//     cardHotel.appendChild(paisHotel);
//     const textoCard = document.createElement("div")
//     cardHotel.appendChild(textoCard);
//     textoCard.className = "textoCard"
//     const roomsHotel = document.createElement("p");
//     roomsHotel.innerText = hotel.rooms;
//     roomsHotel.className = "hotel-rooms";
//     textoCard.appendChild(roomsHotel);
//     const textoRooms = document.createElement("p");
//     textoRooms.innerText = "rooms"
//     textoRooms.className = "rooms";
//     textoCard.appendChild(textoRooms);
//     const priceHotel = document.createElement("p");
//     priceHotel.innerText = hotel.price;
//     priceHotel.className = "hotel-price";
//     textoCard.appendChild(priceHotel);
//     const bookit = document.createElement("button");
//     bookit.className = "hotel-bookit clear";
//     cardHotel.appendChild(bookit);
//     const textoBookit = document.createElement("p");
//     textoBookit.innerText = "Book it!"
//     textoBookit.className = "button-bookit";
//     bookit.appendChild(textoBookit);
//     });
// });

// Borrar filtros

const buttonConsulta = document.getElementById("clear");
const mainClear = document.querySelector(".hotels-container");
buttonConsulta.addEventListener("click", async () => {
    const respuesta2 = await consultarHoteles();
    const data2 = await respuesta2.json();
    console.log(data2);
    mainClear.innerHTML = "";
    data2.forEach((hotel) => {
        
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
        textoRooms.innerText = "rooms"
        textoRooms.className = "rooms";
        textoCard.appendChild(textoRooms);
        
        const priceHotel = document.createElement("p");
        priceHotel.innerText = hotel.price;
        priceHotel.className = "hotel-price";
        textoCard.appendChild(priceHotel);
        
        const bookit = document.createElement("button");
        bookit.className = "hotel-bookit clear";
        cardHotel.appendChild(bookit);
        const textoBookit = document.createElement("p");
        textoBookit.innerText = "Book it!"
        textoBookit.className = "button-bookit";
        bookit.appendChild(textoBookit);
        });
});