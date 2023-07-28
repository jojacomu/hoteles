import { consultarHoteles } from "./apihotels.js";

const buttonConsulta = document.getElementById("clear");
const main = document.querySelector(".hotels-container");

buttonConsulta.addEventListener("click", async () => {
    const respuesta = await consultarHoteles();
    const data = await respuesta.json();
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
        const paisHotel = document.createElement("p");
        paisHotel.innerText = hotel.country;
        paisHotel.className = "hotel-pais";
        cardHotel.appendChild(paisHotel);
        const roomsHotel = document.createElement("p");
        roomsHotel.innerText = hotel.rooms;
        roomsHotel.className = "hotel-rooms";
        cardHotel.appendChild(roomsHotel);
        });
});