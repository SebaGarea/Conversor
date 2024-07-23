function convertirTemperatura() {
    let temperatura = parseFloat(
        document.getElementById("inputTemperatura").value);
    let unidadInicial = document.getElementById("unidadInicial").value;
    let unidadFinal = document.getElementById("unidadFinal").value;

    if (isNaN(temperatura)){
        Swal.fire({
            title:"ERROR",
            text:"Por favor, ingrese un número válido.",
            imageUrl:"https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_640.png",
            confirmButtonText: "OK",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image",
            customClass:{
                popup:"sweet-alert-error"
            }
        })
    // }

    // if (isNaN(temperatura)) {
    //     document.getElementById("resultado").innerText =
    //         "Por favor, ingrese un número válido.";
        return;
    }

    let resultado;

    if (unidadInicial === "celsius") {
        if (unidadFinal === "fahrenheit") {
            resultado = (temperatura * 9) / 5 + 32;
        } else if (unidadFinal === "kelvin") {
            resultado = temperatura + 273.15;
        } else {
            resultado = temperatura;
        }
    } else if (unidadInicial === "fahrenheit") {
        if (unidadFinal === "celsius") {
            resultado = ((temperatura - 32) * 5) / 9;
        } else if (unidadFinal === "kelvin") {
            resultado = ((temperatura - 32) * 5) / 9 + 273.15;
        } else {
            resultado = temperatura;
        }
    } else if (unidadInicial === "kelvin") {
        if (unidadFinal === "celsius") {
            resultado = temperatura - 273.15;
        } else if (unidadFinal === "fahrenheit") {
            resultado = (temperatura * 9) / 5 - 459.67;
        } else {
            resultado = temperatura;
        }
    }

    let conversionTexto = `${temperatura.toFixed(2)} grados ${unidadInicial.charAt(0).toUpperCase() + unidadInicial.slice(1)} son ${resultado.toFixed(2)} grados ${unidadFinal.charAt(0).toUpperCase() + unidadFinal.slice(1)}.`;
    
    document.getElementById("resultado").innerHTML = conversionTexto;

    let historial = document.getElementById('historial');
    let listaHistorial = document.createElement('li');
    listaHistorial.className="listaHistorial";
    listaHistorial.innerText = conversionTexto;

    historial.appendChild(listaHistorial);
}



