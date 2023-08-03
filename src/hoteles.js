import { consultarHoteles } from "./apihotels.js";
const sectionHotels = document.querySelector(".hotels-container");
const respuesta1 = await consultarHoteles();
const data = await respuesta1.json();
console.log(data);
sectionHotels.innerHTML = "";
data.forEach((hotel) => {
        const cardHotel = document.createElement("div");
    cardHotel.className = "card";
    cardHotel.innerHTML = `
        <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
        <h2>${hotel.name}</h2>
        <div class="detallesCard">
            <p>País: ${hotel.country}</p>
            <div class="textoCard">
                <p>Rooms: ${hotel.rooms}</p>
                <p>Price: ${hotel.price}</p>
                <div>
                    <button class="hotel-bookit clear">Book it!</button>
                </div>
            </div>
        </div>
        <!-- Agregar más detalles del hotel si es necesario -->
    `;
    sectionHotels.appendChild(cardHotel);
});

// *******************************************Filtro por país ************************************
function pais() {
    const selectCountry = document.getElementById("country");
    selectCountry.addEventListener("change", (event)=>{
    // La función se ejecutará cuando el usuario seleccione una opción
        const countrySelected = event.target.value;
        console.log('Opción seleccionada:', countrySelected);
            return countrySelected;
    // Aquí puedes realizar acciones adicionales según el valor seleccionado
})
}
const respuesta3 = pais();
console.log(respuesta3)

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
        // function mostrarHoteles(hoteles) {
        //     // Obtener el elemento donde se mostrará la información
        //     const sectionHotels = document.querySelector(".hotels-container");
        
        //     // Limpiar el contenido previo
        //     sectionHotels.innerHTML = '';
        
        //     // Mostrar cada hotel en la página
        //     hoteles.forEach(hotel => {
        //     const cardHotel = document.createElement("div");
        //     cardHotel.className = "card";
        //     cardHotel.innerHTML = `
        //         <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
        //         <h2>${hotel.name}</h2>
        //         <div class="detallesCard">
        //             <p>País: ${hotel.country}</p>
        //             <div class="textoCard">
        //                 <p>Rooms: ${hotel.rooms}</p>
        //                 <p>Price: ${hotel.price}</p>
        //                 <div>
        //                     <button class="hotel-bookit clear">Book it!</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <!-- Agregar más detalles del hotel si es necesario -->
        //     `;
        //     sectionHotels.appendChild(cardHotel);
        //     });
        // }
        // // Filtramos los objetos que tienen "country" con el valor "Argentina"
        // if(respuesta3 === 'Argentina') {
        //     const hotelesEnArgentina = data.filter(hotel => hotel.country === 'Argentina');
        //     mostrarHoteles(hotelesEnArgentina);
        // } if(respuesta3 === 'Brasil') {
        //     const hotelesEnBrasil = data.filter(hotel => hotel.country === 'Brasil');
        //     mostrarHoteles(hotelesEnBrasil);
        // } if(respuesta3 === 'Chile') {
        //     const hotelesEnBrasil = data.filter(hotel => hotel.country === 'Chile');
        //     mostrarHoteles(hotelesEnChile);
        // } if(respuesta3 === 'Uruguay') {
        //     const hotelesEnBrasil = data.filter(hotel => hotel.country === 'Uruguay');
        //     mostrarHoteles(hotelesEnUruguay);
        // } else {
        //     alert(`No hay ningún hotel disponible para ${respuesta3}`);
        // }
        const hotelesEnArgentina = data.filter(hotel => hotel.country === 'Argentina');
        const hotelesEnBrasil = data.filter(hotel => hotel.country === 'Brasil');
        const hotelesEnChile = data.filter(hotel => hotel.country === 'Chile');
        const hotelesEnUruguay = data.filter(hotel => hotel.country === 'Uruguay');

        // Array con los filtros por país
        const hotelsByCountry = [hotelesEnArgentina, hotelesEnBrasil, hotelesEnChile,hotelesEnUruguay] 
        // console.log(hotelsByCountry)
        
        // Mostramos la información de los hoteles en la página
        
        mostrarHoteles(hotelesEnArgentina);
        // mostrarHoteles(hotelesEnBrasil);
        // mostrarHoteles(hotelesEnChile);
        // mostrarHoteles(hotelesEnUruguay);
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
        <div class="detallesCard">
            <p>País: ${hotel.country}</p>
            <div class="textoCard">
                <p>Rooms: ${hotel.rooms}</p>
                <p>Price: ${hotel.price}</p>
                <div>
                    <button class="hotel-bookit clear">Book it!</button>
                </div>
            </div>
        </div>
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
    cardHotel.innerHTML = `
        <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
        <h2>${hotel.name}</h2>
        <div class="detallesCard">
            <p>País: ${hotel.country}</p>
            <div class="textoCard">
                <p>Rooms: ${hotel.rooms}</p>
                <p>Price: ${hotel.price}</p>
                <div>
                    <button class="hotel-bookit clear">Book it!</button>
                </div>
            </div>
        </div>
        <!-- Agregar más detalles del hotel si es necesario -->
    `;
    sectionHotels.appendChild(cardHotel);
        });
});