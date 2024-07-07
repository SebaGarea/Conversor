function convertirTemperatura() {
    let temperatura = parseFloat(
        document.getElementById("inputTemperatura").value
    );
    let unidadInicial = document.getElementById("unidadInicial").value;
    let unidadFinal = document.getElementById("unidadFinal").value;

    if (isNaN(temperatura)) {
        document.getElementById("resultado").innerText =
            "Por favor, ingrese un número válido.";
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

    let historial = document.createElement('li');
    historial.className="listaHistorial";
    historial.innerText = conversionTexto;
    document.getElementById("historial").appendChild(historial);
}
