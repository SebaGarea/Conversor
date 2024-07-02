function convertirCelsiusAFarenheit(numeroIngresado) {
    return (numeroIngresado * 9) / 5 + 32;
}

class Conversion {
    constructor(celsius) {
        this.celsius = celsius;
        this.fahrenheit = convertirCelsiusAFarenheit(celsius);
    }
}

const conversiones = [];

function actualizarHistorial() {
    const historialDiv = document.getElementById('historial');
    historialDiv.innerHTML = '';

    const elementos = conversiones.map(i => {
        const conversionTexto = ` ${i.celsius}°C   =>   ${i.fahrenheit}°F`;
        const p = document.createElement('p');
        p.textContent = conversionTexto;
        return p;
    });

    historialDiv.append(...elementos);
}


// function actualizarHistorial() {
//     const historialDiv = document.getElementById('historial');
//     historialDiv.innerHTML = '';

//     conversiones.forEach(i => {
//         const conversionTexto = ` ${i.celsius}°C   =>   ${i.fahrenheit}°F`;
//         const p = document.createElement('p');
//         p.textContent = conversionTexto;
//         historialDiv.appendChild(p);
//     });
// }

function inicioConvertidor() {
    let celsius = document.getElementById('celsiusInput').value;

    const esValido = celsius !== null && !isNaN(celsius) && celsius.trim() !== "";

    if (esValido) {
        celsius = parseFloat(celsius);
        const conversion = new Conversion(celsius);
        conversiones.push(conversion);

        console.log(`${conversion.celsius} grados Celsius son ${conversion.fahrenheit} grados Fahrenheit`);

        actualizarHistorial();
    } else {
        console.log("Por favor, ingresa un valor numérico correcto");
        alert("Por favor, ingresa un valor numérico correcto");
    }
}

document.getElementById('Btn-convertir').addEventListener('click', inicioConvertidor);

window.onload = function() {
    document.getElementById('celsiusInput').focus();
};