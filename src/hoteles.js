import { consultarHoteles } from "./apihotels.js";

const respuesta = await consultarHoteles();
const data = await respuesta.json();
const datos = consultarHoteles();

const dateDeparture = document.getElementById("departure");
const dateReturntrip = document.getElementById("returntrip");

const countrySelect = document.getElementById("country");

const priceSelect = document.getElementById("prices");

const buttonConsulta = document.getElementById("clear");
const sectionHotels = document.querySelector(".hotels-container");

// Función para cargar las banderas

function getFlagCountryUrl(country) {
    const flagCountry = `./imgs/${country}-flags.png`;
    return flagCountry;
}

// Función para cambia precio de número a símbolo

function priceText(price) {
    return "$".repeat(price);
}

// Función para presentar la información de hoteles

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
                    <img src="${getFlagCountryUrl(
                        hotel.country
                    )}" class="flag" alt="${hotel.country}" />
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

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error("No hay hoteles para mostrar"));
        }
        setTimeout(() => {
            resolve(datos);
        }, 0);
    });
};

async function mostrarHoteles() {
    try {
        const respuesta = await getDatos();
        const data = await respuesta.json();
        console.log(data);
        sectionHotels.innerHTML = "";
        informacionHoteles(data);
        return data;
    } catch (err) {
        console.log("Error al cargar hoteles:", err);
    }
}
mostrarHoteles();

// *******************************************Filtros ************************************

// Event listener para detectar cambios en la selección de país
countrySelect.addEventListener("change", function () {
    const selectedCountry = countrySelect.value;
    loadHotelsByCountry(selectedCountry);
    console.log(selectedCountry);
});

// Event listener para capturar selección de fechas

dateReturntrip.addEventListener("change", function () {
    dateReturntripSelected = true;
    calculateDifferenceDays();
});

// Event listener para detectar cambios en la selección de precios
priceSelect.addEventListener("change", function () {
    const selectedPrice = priceSelect.value;
    loadHotelsByPrice(selectedPrice);
});

// Función para cargar hoteles por país desde la API
function loadHotelsByCountry(country) {
    if (country === "All") {
        async function mostrarHoteles() {
            try {
                const respuesta = await getDatos();
                const data = await respuesta.json();
                console.log(data);
                sectionHotels.innerHTML = "";
                informacionHoteles(data);
                return data;
            } catch (err) {
                console.log("Error al cargar hoteles:", err);
            }
        }
        mostrarHoteles();
    } else {
        fetch(
            `https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels?country=${country}`
        )
            .then((response) => response.json())
            .then((data) => {
                // Limpiar la lista de hoteles antes de agregar nuevos elementos
                sectionHotels.innerHTML = "";

                // Agregar hoteles a la lista
                data.forEach((hotel) => {
                    const cardHotel = document.createElement("div");
                    cardHotel.className = "card";
                    cardHotel.innerHTML = `
                        <img src="${hotel.photo}" alt="${
                        hotel.name
                    }" class="hotel-image" />
                        <h2>${hotel.name}</h2>
                        <div class="detallesCard">
                            <div class="descripcion">
                                <div class="pais">
                                <p>País: ${hotel.country}</p>
                                <img src="${getFlagCountryUrl(
                                    hotel.country
                                )}" class="flag" alt="${hotel.country}" />
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
            .catch((error) => {
                console.error("Error al cargar hoteles:", error);
            });
    }
}

// ******************************************* Filtro por precio ************************************

// Función para cargar hoteles por precio desde la API
function loadHotelsByPrice(price) {
    if (price === "All") {
        fetch(
            `https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels`
        )
            .then((response) => response.json())
            .then((data) => {
                // Limpiar la lista de hoteles antes de agregar nuevos elementos
                sectionHotels.innerHTML = "";

                // Agregar hoteles a la lista
                data.forEach((hotel) => {
                    const cardHotel = document.createElement("div");
                    cardHotel.className = "card";
                    cardHotel.innerHTML = `
                    <img src="${hotel.photo}" alt="${
                        hotel.name
                    }" class="hotel-image" />
                    <h2>${hotel.name}</h2>
                    <div class="detallesCard">
                        <div class="descripcion">
                            <div class="pais">
                            <p>País: ${hotel.country}</p>
                            <img src="${getFlagCountryUrl(
                                hotel.country
                            )}" class="flag" alt="${hotel.country}" />
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
            });
    } else {
        fetch(
            `https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels?price=${price}`
        )
            .then((response) => response.json())
            .then((data) => {
                // Limpiar la lista de hoteles antes de agregar nuevos elementos
                sectionHotels.innerHTML = "";

                // Agregar hoteles a la lista
                data.forEach((hotel) => {
                    const cardHotel = document.createElement("div");
                    cardHotel.className = "card";
                    cardHotel.innerHTML = `
                        <img src="${hotel.photo}" alt="${
                        hotel.name
                    }" class="hotel-image" />
                        <h2>${hotel.name}</h2>
                        <div class="detallesCard">
                            <div class="descripcion">
                                <div class="pais">
                                <p>País: ${hotel.country}</p>
                                <img src="${getFlagCountryUrl(
                                    hotel.country
                                )}" class="flag" alt="${hotel.country}" />
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
            .catch((error) => {
                console.error("Error al cargar hoteles:", error);
            });
    }
}

// *******************************************Filtro por fechas salida y regreso ************************************
// Filtro de datos por fecha
const now = new Date();
function fechaCero(fechaCero) {
    const converText = "" + fechaCero;
    if (converText.length === 1) {
        return "0" + fechaCero;
    } else {
        return fechaCero;
    }
}
const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();
const dateDepartureHotels =
    year + "-" + fechaCero(month) + "-" + fechaCero(day);
const dateReturntripHotels =
    year + "-" + fechaCero(month) + "-" + fechaCero(day + 1);
dateDeparture.setAttribute("min", dateDepartureHotels);
dateReturntrip.setAttribute("min", dateReturntripHotels);
dateDeparture.addEventListener("change", () => {
    const parts = dateDeparture.value.split("-");
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const day = parseInt(parts[2]);
    console.log(day);
    const finalDate = year + "-" + fechaCero(month) + "-" + fechaCero(day + 1);
    dateReturntrip.setAttribute("min", finalDate);
});
function esHotelDisponible(hotel, differenceInMilliseconds) {
    const availabilityFrom = hotel.availabilityFrom;
    const availabilityTo = hotel.availabilityTo;
    const availabilityDifference = availabilityTo - availabilityFrom;
    return availabilityDifference >= differenceInMilliseconds;
}
let dateReturntripSelected = false;
function calculateDifferenceDays() {
    const currentDateIni = new Date();
    currentDateIni.setHours(0, 0, 0, 0);
    console.log(currentDateIni);
    const currentDateMilliseconds = currentDateIni.getTime();
    console.log(currentDateMilliseconds);
    const optionDepartureIni = new Date(dateDeparture.value + " 00:00:00");
    console.log(optionDepartureIni);
    optionDepartureIni.setHours(0, 0, 0, 0);
    const optionDeparture = optionDepartureIni.getTime();
    console.log(optionDepartureIni);
    if (!dateReturntripSelected) {
        return;
    }
    const optionReturntrip = new Date(dateReturntrip.value);
    console.log(optionReturntrip);
    const resultCheckIn = optionDeparture;
    const millisecondsDate = optionReturntrip - optionDeparture;
    const millisecondsInADay = 24 * 60 * 60 * 1000; // 86,400,000
    const differenceInMilliseconds =
        Math.round(millisecondsDate / millisecondsInADay) * millisecondsInADay;
    console.log(differenceInMilliseconds);

    console.log(mostrarHoteles());
    const hotelesDisponibles = data.filter((hotel) => {
        return esHotelDisponible(hotel, differenceInMilliseconds);
    });
    console.log(hotelesDisponibles);
    sectionHotels.innerHTML = "";
    if (hotelesDisponibles.length > 0) {
        informacionHoteles(hotelesDisponibles);
    } else {
        sectionHotels.innerHTML =
            "¡lo siento! No hay hoteles disponibles para este rango de fechas.";
        sectionHotels.style.color = "red";
    }
}

dateDeparture.value = "";
dateReturntrip.value = "";
dateDeparture.addEventListener("change", calculateDifferenceDays);

// ******************************************* Clear ************************************
buttonConsulta.addEventListener("click", async () => {
    const respuesta2 = await consultarHoteles();
    const data = await respuesta2.json();
    const countrySelect = document.getElementById("country");
    const priceSelect = document.getElementById("prices");
    const dateDeparture = document.getElementById("departure");
    const dateReturntrip = document.getElementById("returntrip");

    // Función para restablecer el campo select al valor predeterminado
    function resetearFiltros() {
        countrySelect.selectedIndex = 0; // Establece el índice seleccionado al primero
        priceSelect.selectedIndex = 0;
        dateDeparture.value = "";
        dateReturntrip.value = "";
    }

    // Llamar a la función para restablecer el filtro
    resetearFiltros();
    console.log(data);
    sectionHotels.innerHTML = "";
    informacionHoteles(data);
});
