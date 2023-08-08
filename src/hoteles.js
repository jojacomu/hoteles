import { consultarHoteles } from "./apihotels.js";
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

async function mostrarHoteles () {
    try{
        const respuesta1 = await getDatos();
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
    } catch (err) {
        console.log(err.message)
    }
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

// *******************************************Filtro por cuartos ************************************

// const sizesSelect = document.getElementById('sizes');
// // Función para cargar hoteles por cuartos desde la API
// function loadHotelsBySize(size) {
//     if(size === "All") {
//         fetch(`https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels`)
//             .then(response => response.json())
//             .then(data => {
//             // Limpiar la lista de hoteles antes de agregar nuevos elementos
//             sectionHotels.innerHTML = '';
//            // Agregar hoteles a la lista
//                 data.forEach((hotel) => {
//                     const cardHotel = document.createElement("div");
//                     cardHotel.className = "card";
//                     cardHotel.innerHTML = `
//                         <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
//                         <h2>${hotel.name}</h2>
//                         <div class="detallesCard">
//                             <p>País: ${hotel.country}</p>
//                             <div class="textoCard">
//                                 <p>Rooms: ${hotel.rooms}</p>
//                                 <p>Price: ${hotel.price}</p>
//                                 <div>
//                                     <button class="hotel-bookit clear">Book it!</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <!-- Agregar más detalles del hotel si es necesario -->
//                     `;
//                 sectionHotels.appendChild(cardHotel);
//                 });
//             })
//     } if(size === "Small") {        
//         fetch(`https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels`)
//             .then(response => response.json())
//             .then(data => {
//             const filteredHotels = data.filter(hotel => hotel.rooms >= 0 && hotel.rooms <= 10);
//             // Limpiar la lista de hoteles antes de agregar nuevos elementos
//             sectionHotels.innerHTML = '';
//             // Agregar hoteles a la lista
//             filteredHotels.forEach((hotel) => {
//                     const cardHotel = document.createElement("div");
//                     cardHotel.className = "card";
//                     cardHotel.innerHTML = `
//                         <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
//                         <h2>${hotel.name}</h2>
//                         <div class="detallesCard">
//                             <p>País: ${hotel.country}</p>
//                             <div class="textoCard">
//                                 <p>Rooms: ${hotel.rooms}</p>
//                                 <p>Price: ${hotel.price}</p>
//                                 <div>
//                                     <button class="hotel-bookit clear">Book it!</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <!-- Agregar más detalles del hotel si es necesario -->
//                     `;
//                     sectionHotels.appendChild(cardHotel);
//                 });
//             })
//             .catch(error => {
//                 console.error('Error al cargar hoteles:', error);
//             });

//     } if(size === "Medium") {
//         fetch(`https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels`)
//             .then(response => response.json())
//             .then(data => {
//             // Limpiar la lista de hoteles antes de agregar nuevos elementos
//             const filteredHotels = data.filter(hotel => hotel.rooms >= 0 && hotel.rooms <= 10);
//             sectionHotels.innerHTML = '';
//             // Agregar hoteles a la lista
//             filteredHotels.forEach((hotel) => {
//                     const cardHotel = document.createElement("div");
//                     cardHotel.className = "card";
//                     cardHotel.innerHTML = `
//                         <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
//                         <h2>${hotel.name}</h2>
//                         <div class="detallesCard">
//                             <p>País: ${hotel.country}</p>
//                             <div class="textoCard">
//                                 <p>Rooms: ${hotel.rooms}</p>
//                                 <p>Price: ${hotel.price}</p>
//                                 <div>
//                                     <button class="hotel-bookit clear">Book it!</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <!-- Agregar más detalles del hotel si es necesario -->
//                     `;
//                     sectionHotels.appendChild(cardHotel);
//                 });
//             })
//             .catch(error => {
//                 console.error('Error al cargar hoteles:', error);
//             });
//     } if(size === "Large") {
//         fetch(`https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels`)
//             .then(response => response.json())
//             .then(data => {
//             const filteredHotels = data.filter(hotel => hotel.rooms >= 20 && hotel.rooms <= undefined);
//             // Limpiar la lista de hoteles antes de agregar nuevos elementos
//             sectionHotels.innerHTML = '';
//             // Agregar hoteles a la lista
//             filteredHotels.forEach((hotel) => {
//                     const cardHotel = document.createElement("div");
//                     cardHotel.className = "card";
//                     cardHotel.innerHTML = `
//                         <img src="${hotel.photo}" alt="${hotel.name}" class="hotel-image" />
//                         <h2>${hotel.name}</h2>
//                         <div class="detallesCard">
//                             <p>País: ${hotel.country}</p>
//                             <div class="textoCard">
//                                 <p>Rooms: ${hotel.rooms}</p>
//                                 <p>Price: ${hotel.price}</p>
//                                 <div>
//                                     <button class="hotel-bookit clear">Book it!</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <!-- Agregar más detalles del hotel si es necesario -->
//                     `;
//                     sectionHotels.appendChild(cardHotel);
//                 });
//             })
//             .catch(error => {
//                 console.error('Error al cargar hoteles:', error);
//             });
//     } else {
//         alert('Por favor, selecciona un tamaño');
//         }
// }

// // Event listener para detectar cambios en la selección de número de habitaciones
// sizesSelect.addEventListener('change', function() {
//     const selectedSize = sizesSelect.value;
//     loadHotelsBySize(selectedSize);
// })