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
    textoBookit.innerText = "Book it!";
    textoBookit.className = "button-bookit";
    bookit.appendChild(textoBookit);
});

// *******************************************Filtro Argentina ************************************
function obtenerHotelesEnArgentina() {
    const url = 'https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels';

    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
    })
    .then(data => {
        // Filtramos los objetos que tienen "country" con el valor "Argentina"
        const hotelesEnArgentina = data.filter(hotel => hotel.country === 'Argentina');
        // Mostramos la información de los hoteles en la página
        mostrarHoteles(hotelesEnArgentina);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

function mostrarHoteles(hoteles) {
    // Obtener el elemento donde se mostrará la información
    const sectionHotels = document.querySelector(".hotels-container");

    // Limpiar el contenido previo
    sectionHotels.innerHTML = '';

    // Mostrar cada hotel en la página
    hoteles.forEach(hotel => {
    const cardHotel = document.createElement("div");
    cardHotel.className = "card";
    cardHotel.innerHTML = `
        <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
        <h2>${hotel.name}</h2>
        <p>País: ${hotel.country}</p>
        <p>Rooms: ${hotel.rooms}</p>
        <p>Price: ${hotel.price}</p>
        <!-- Agregar más detalles del hotel si es necesario -->
`;
    sectionHotels.appendChild(cardHotel);
    });
}

  // Llamar a la función para obtener hoteles en Argentina al cargar la página
obtenerHotelesEnArgentina();

// *******************************************Borrar filtros************************************

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