import { consultarHoteles } from "./apihotels.js";
// import { hotelesByCountry } from "./apihotels.js";
function getFlagCountryUrl(country) {
    const flagCountry = `./imgs/${country}-flag.png`;
    return flagCountry;
}
  // cambio de número a símbolo
function priceText(price) {
    return "$".repeat(price);
}

const sectionHotels = document.querySelector(".hotels-container");

const datos = consultarHoteles ()
const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error ('No hay hoteles para mostrar'));
        }
        setTimeout(() => {
            resolve(datos);
        }, 0);
    });
}

async function mostrarHoteles() {
    try{
        const respuesta = await getDatos();
        const data = await respuesta.json();
        // console.log(data);
        sectionHotels.innerHTML = "";
        informacionHoteles(data);
        } catch (err) {
        console.log(err.message)
    }
}

function informacionHoteles(data) {
    data.forEach((hotel) => {
        const cardHotel = document.createElement("div");
        cardHotel.className = "card";
        cardHotel.innerHTML = `
            <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
            <h2>${hotel.name}</h2>
            <div class="detallesCard">
                <div class="descripcion">
                    <div class="pais">
                    <p>País: ${hotel.country}</p>
                    <img src="${getFlagCountryUrl(hotel.country)}" class="flag" alt="${hotel.country}" />
                    </div>
                    <div class="textoCard">
                    <p>Rooms: ${hotel.rooms}</p>
                    <p>Price: ${priceText(hotel.price)}</p>
                    </div>
                </div>
                <div class="bookit">
                <button class="button-bookit">Book it!</button>
                </div>
            </div>
            <!-- Agregar más detalles del hotel si es necesario -->
        `;
        sectionHotels.appendChild(cardHotel);
        });
}

mostrarHoteles();

// *******************************************Filtro por país ************************************
const countrySelect = document.getElementById('country');

// Función para cargar hoteles por país desde la API
function loadHotelsByCountry(country) {
    if(country === "All") {
        fetch(`https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels`)
        .then(response => response.json())
        .then(data => {
            // Limpiar la lista de hoteles antes de agregar nuevos elementos
            sectionHotels.innerHTML = '';

            // Agregar hoteles a la lista
            
            data.forEach((hotel) => {
                const cardHotel = document.createElement("div");
                cardHotel.className = "card";
                cardHotel.innerHTML = `
                    <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
                    <h2>${hotel.name}</h2>
                    <div class="detallesCard">
                        <p>País: ${hotel.country}</p>
                        <img src="${getFlagCountryUrl(hotel.country)}" class="flag" alt="${hotel.country}"
                        <div class="textoCard">
                            <p>Rooms: ${hotel.rooms}</p>
                            <p>Price: ${priceText(hotel.price)}</p>
                            <div>
                                <button class="hotel-bookit clear">Book it!</button>
                            </div>
                        </div>
                    </div>
                    <!-- Agregar más detalles del hotel si es necesario -->
                `;
                sectionHotels.appendChild(cardHotel);
            });
        })
    } else {
        fetch(`https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels?country=${country}`)
            .then(response => response.json())
            .then(data => {
                // Limpiar la lista de hoteles antes de agregar nuevos elementos
                sectionHotels.innerHTML = '';

                // Agregar hoteles a la lista
                data.forEach((hotel) => {
                    const cardHotel = document.createElement("div");
                    cardHotel.className = "card";
                    cardHotel.innerHTML = `
                        <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
                        <h2>${hotel.name}</h2>
                        <div class="detallesCard">
                            <p>País: ${hotel.country}</p>
                            <img src="${getFlagCountryUrl(hotel.country)}" class="flag" alt="${hotel.country}
                            <div class="textoCard">
                                <p>Rooms: ${hotel.rooms}</p>
                                <p>Price: ${priceText(hotel.price)}</p>
                                <div>
                                    <button class="hotel-bookit clear">Book it!</button>
                                </div>
                            </div>
                        </div>
                        <!-- Agregar más detalles del hotel si es necesario -->
                    `;
                    sectionHotels.appendChild(cardHotel);
                });
            })
            .catch(error => {
        console.error('Error al cargar hoteles:', error);
        });
    }
}

// Event listener para detectar cambios en la selección de país
countrySelect.addEventListener('change', function() {
    const selectedCountry = countrySelect.value;
    loadHotelsByCountry(selectedCountry);
});

// *******************************************Filtro por precio ************************************

const priceSelect = document.getElementById('prices');

// Función para cargar hoteles por precio desde la API
function loadHotelsByPrice(price) {
    if(price === "All") {
        fetch(`https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels`)
        .then(response => response.json())
        .then(data => {
            // Limpiar la lista de hoteles antes de agregar nuevos elementos
            sectionHotels.innerHTML = '';

            // Agregar hoteles a la lista
            data.forEach((hotel) => {
                const cardHotel = document.createElement("div");
                cardHotel.className = "card";
                cardHotel.innerHTML = `
                    <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
                    <h2>${hotel.name}</h2>
                    <div class="detallesCard">
                        <p>País: ${hotel.country}</p>
                        <img src="${getFlagCountryUrl(hotel.country)}" class="flag" alt="${hotel.country}"
                        <div class="textoCard">
                            <p>Rooms: ${hotel.rooms}</p>
                            <p>Price: ${priceText(hotel.price)}</p>
                            <div>
                                <button class="hotel-bookit clear">Book it!</button>
                            </div>
                        </div>
                    </div>
                    <!-- Agregar más detalles del hotel si es necesario -->
                `;
                sectionHotels.appendChild(cardHotel);
            });
        })
    } else {
        fetch(`https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels?price=${price}`)
            .then(response => response.json())
            .then(data => {
                // Limpiar la lista de hoteles antes de agregar nuevos elementos
                sectionHotels.innerHTML = '';

                // Agregar hoteles a la lista
                data.forEach((hotel) => {
                    const cardHotel = document.createElement("div");
                    cardHotel.className = "card";
                    cardHotel.innerHTML = `
                        <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
                        <h2>${hotel.name}</h2>
                        <div class="detallesCard">
                            <p>País: ${hotel.country}</p>
                            <img src="${getFlagCountryUrl(hotel.country)}" class="flag" alt="${hotel.country}"
                            <div class="textoCard">
                                <p>Rooms: ${hotel.rooms}</p>
                                <p>Price: ${priceText(hotel.price)}</p>
                                <div>
                                    <button class="hotel-bookit clear">Book it!</button>
                                </div>
                            </div>
                        </div>
                        <!-- Agregar más detalles del hotel si es necesario -->
                    `;
                    sectionHotels.appendChild(cardHotel);
                });
            })
            .catch(error => {
        console.error('Error al cargar hoteles:', error);
        });
    }
}

// Event listener para detectar cambios en la selección de precios
priceSelect.addEventListener('change', function() {
    const selectedPrice = priceSelect.value;
    loadHotelsByPrice(selectedPrice);
});

// *******************************************Filtro por fechas salida y regreso ************************************

async function hotelesSalida() {
    try{
        const respuesta = await getDatos();
        const data = await respuesta.json();
        console.log(data);
        return data
        sectionHotels.innerHTML = "";
        informacionHoteles(data);
        } catch (error) {
            console.error('Error al obtener hoteles:', error);
            return [];
    }
}





// const departureDateInput = document.getElementById('departure');

// function loadHotelsDeparture(departureDate0) {
//     fetch(`https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(departureDate0);
//         const filteredHotels = data.filter(hotel => {
//             const availabilityFrom = new Date(hotel.availabilityFrom);
//             console.log(availabilityFrom)
//             return availabilityFrom >= departureDate0;
//         });
//         // Limpiar la lista de hoteles antes de agregar nuevos elementos
//         sectionHotels.innerHTML = '';

//         // Agregar hoteles a la lista
//         filteredHotels.forEach((hotel) => {
//             const cardHotel = document.createElement("div");
//             cardHotel.className = "card";
//             cardHotel.innerHTML = `
//                 <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
//                 <h2>${hotel.name}</h2>
//                 <div class="detallesCard">
//                     <p>País: ${hotel.country}</p>
//                     <img src="${getFlagCountryUrl(hotel.country)}" class="flag" alt="${hotel.country}";

//                     <div class="textoCard">
//                         <p>Rooms: ${hotel.rooms}</p>
//                         <p>Price: ${priceText(hotel.price)}</p>
//                         <div>
//                             <button class="hotel-bookit clear">Book it!</button>
//                         </div>
//                     </div>
//                 </div>
//                 <!-- Agregar más detalles del hotel si es necesario -->
//             `;
//             sectionHotels.appendChild(cardHotel);
//         });
//     });
// }


// departureDateInput.addEventListener('change', function() {
//     const departureDate0 = new Date(departureDateInput.value);
//     console.log("dato capturado " + departureDate0);
//     const departureDate = departureDate0.getTime();
//     console.log("salida " + departureDate0);
//     loadHotelsDeparture(departureDate0);
// });

// const returntripDateInput = document.getElementById('returntrip');
// function loadHotelsReturntrip(returntripDate) {
//     fetch(`https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels`)
//     .then(response => response.json())
//     .then(data => {
//         const filteredHotels1 = data.filter(hotel => {
//             const availabilityTo = new Date(hotel.availabilityTo);
//             console.log(availabilityTo >= returntripDate)
//             return availabilityTo >= returntripDate;
//         });
//         // Limpiar la lista de hoteles antes de agregar nuevos elementos
//         sectionHotels.innerHTML = '';

//         // Agregar hoteles a la lista
//         filteredHotels1.forEach((hotel) => {
//             const cardHotel = document.createElement("div");
//             cardHotel.className = "card";
//             cardHotel.innerHTML = `
//                 <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
//                 <h2>${hotel.name}</h2>
//                 <div class="detallesCard">
//                     <p>País: ${hotel.country}</p>
//                     <img src="${getFlagCountryUrl(hotel.country)}" class="flag" alt="${hotel.country}"
//                     <div class="textoCard">
//                         <p>Rooms: ${hotel.rooms}</p>
//                         <p>Price: ${getPriceText(hotel.price)}</p>
//                         <div>
//                             <button class="hotel-bookit clear">Book it!</button>
//                         </div>
//                     </div>
//                 </div>
//                 <!-- Agregar más detalles del hotel si es necesario -->
//             `;
//             sectionHotels.appendChild(cardHotel);
//         });
//     });
// }
// returntripDateInput.addEventListener('change', function() {
//     const returntripDate0 = new Date(returntripDateInput.value);
//     console.log("date capturada " + returntripDate0);
//     const returntripDate = returntripDate0.getTime();
//     console.log("regreso " + returntripDate);
//     loadHotelsReturntrip(returntripDate);
// });