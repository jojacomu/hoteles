export function consultarHoteles() {
    return fetch(
    "https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels"
    );
}

export function obtenerHotelesEnArgentina() {
    const url = 'https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels';

    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
    })
    .then(data => {
    // Filtramos los objetos que tengan la clave "country" con el valor "Argentina"
    const hotelesEnArgentina = data.filter(hotel => hotel.country === 'Argentina');
    // Aquí puedes hacer lo que desees con los datos filtrados, por ejemplo, imprimirlos en la consola
    console.log(hotelesEnArgentina);
    })
    .catch(error => {
    console.error('Error:', error);
    });
}
