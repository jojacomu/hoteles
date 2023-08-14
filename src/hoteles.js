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
        console.log(data);
        sectionHotels.innerHTML = "";
        informacionHoteles(data);
        return data;
        } catch (err) {
        console.log('Error al cargar hoteles:', err)
    }
}
mostrarHoteles();

// *******************************************Filtro por país ************************************
const countrySelect = document.getElementById('country');
// Event listener para detectar cambios en la selección de país
countrySelect.addEventListener('change', function() {
    const selectedCountry = countrySelect.value;
    loadHotelsByCountry(selectedCountry);
    console.log(selectedCountry);
});


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
            })
            .catch(error => {
        console.error('Error al cargar hoteles:', error);
        });
    }
}

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
const respuesta = await consultarHoteles();
const data = await respuesta.json();
// Filtro de datos por fecha
const dateDeparture = document.getElementById("departure");
const dateReturntrip = document.getElementById("returntrip");
const today = new Date();
function zerodate(dateZero) {
    const converText = "" + dateZero;
    if (converText.length === 1) {
    return "0" + dateZero;
    } else {
    return dateZero;
    }
}
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const dateDepartureHotels = year + "-" + zerodate(month) + "-" + zerodate(day);
const dateReturntripHotels =
    year + "-" + zerodate(month) + "-" + zerodate(day + 1);
dateDeparture.setAttribute("min", dateDepartureHotels);
dateReturntrip.setAttribute("min", dateReturntripHotels);
dateDeparture.addEventListener("change", () => {
    const parts = dateDeparture.value.split("-");
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const day = parseInt(parts[2]);
    console.log(day)
    const finalDate = year + "-" + zerodate(month) + "-" + zerodate(day+1);
    dateReturntrip.setAttribute("min", finalDate);
});
function isHotelAvailable(hotel, differenceInMilliseconds) {
    const availabilityFrom = hotel.availabilityFrom;
    const availabilityTo = hotel.availabilityTo;
    const availabilityDifference = availabilityTo - availabilityFrom;
    return (
    availabilityDifference >= differenceInMilliseconds
    )   
}
let dateReturntripSelected = false;
function calculateDifferenceDays() {
    const currentDateIni = new Date();
    currentDateIni.setHours(0, 0, 0, 0);
    console.log(currentDateIni);
    const currentDateMilliseconds = currentDateIni.getTime();
    console.log(currentDateMilliseconds);
    const optionCheckInIni = new Date(dateDeparture.value + " 00:00:00");
    console.log(optionCheckInIni);
    optionCheckInIni.setHours(0, 0, 0, 0);
    const optionCheckIn = optionCheckInIni.getTime();
    console.log(optionCheckInIni);
    if (!dateReturntripSelected) {
    return;
    }
    const optionCheckOut = new Date(dateReturntrip.value);
    console.log(optionCheckOut)
    const resultCheckIn = optionCheckIn ;
    const millisecondsDate = optionCheckOut - optionCheckIn;
    const millisecondsInADay = 24 * 60 * 60 * 1000; // 86,400,000
    const differenceInMilliseconds =
        Math.round(millisecondsDate / millisecondsInADay) * millisecondsInADay;
    console.log(differenceInMilliseconds)
    
    console.log(mostrarHoteles());
    const hotelesDisponibles = data.filter((hotel) => {
    return isHotelAvailable(hotel, differenceInMilliseconds);
    });
    console.log(hotelesDisponibles);
    sectionHotels.innerHTML = "";
    if (hotelesDisponibles.length > 0) {
    informacionHoteles(hotelesDisponibles);
    } else {
    sectionHotels.innerHTML = "¡lo siento! No hay hoteles disponibles para este rango de fechas.";
    sectionHotels.style.color = "red";
    }
}

dateDeparture.value = "";
dateReturntrip.value = "";
dateDeparture.addEventListener("change", calculateDifferenceDays);
dateReturntrip.addEventListener("change", function () {
    dateReturntripSelected = true;
    calculateDifferenceDays();
});

// ******************************************* Clear ************************************

const buttonConsulta = document.getElementById("clear");
const main = document.querySelector(".hotels-container");
buttonConsulta.addEventListener("click", async () => {
    const respuesta2 = await consultarHoteles();
    const data = await respuesta2.json();
    console.log(data);
    main.innerHTML = "";
    informacionHoteles(data);
});