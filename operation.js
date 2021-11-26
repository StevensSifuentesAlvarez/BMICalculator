var height = document.getElementById("inputHeight");
var weight = document.getElementById("inputWeight");
var calculate = document.getElementById("calculate");

var containerCard = document.querySelector(".container-card");
var cardContent = document.querySelector(".card-content");

var result;

var data = {
    categoria: ["Bajo peso", "Normal", "Sobrepeso", "Obesidad I", "Obesidad II", "Obesidad III"],
    src: ["./img/Bajo", "./img/normal.png", "./img/sobrepeso.png", "./img/obesidadOne.png","./img/obesidadTwo.png", "./img/obesidadThree.png"], 
    msj: ["Usted debería mejorar su nutrición para que no seas propenso a enfermedades",
        "Mantener un peso saludable puede reducir el riesgo de enfermedades crónicas asociadas al sobrepeso y la obesidad.",
        "Usted tienen un mayor riesgo de afecciones crónicas, tales como hipertensión arterial, diabetes y colesterol alto."
    ]
}


calculate.addEventListener("click", calcularPeso);

function calcularPeso() {
    if (height.value == "" && weight.value == "") {
        alert("Campos vacios.")
    } else {
        result = parseFloat(weight.value / Math.pow(height.value, 2)).toFixed(2);
        if (result < 18.5) {
            crearElemento(data.categoria[0], data.src[0], data.msj[0]);
            document.querySelector(".indicator1").className+= " colorear-bajo";
        } else if (result >= 18.5 && result <= 24.9) {
            crearElemento(data.categoria[1], data.src[1], data.msj[1]);
            document.querySelector(".indicator2").className+= " colorear-normal";
        } else if (result >= 25 && result <= 29.9) {
            crearElemento(data.categoria[2], data.src[2], data.msj[2]);
            document.querySelector(".indicator3").className+= " colorear-sobre";
        } else if (result >= 30 && result <= 34.9) {
            crearElemento(data.categoria[3], data.src[3], data.msj[2]);
            document.querySelector(".indicator4").className+= " colorear-obesidad-1";
        } else if (result >= 35 && result <= 39.9) {
            crearElemento(data.categoria[4], data.src[4], data.msj[2]);
            document.querySelector(".indicator5").className+= " colorear-obesidad-2";
        } else {
            crearElemento(data.categoria[5], data.src[5], data.msj[2]);
            document.querySelector(".indicator6").className+= " colorear-obesidad-3";
        }
    }
}

function crearElemento(categoria, source, mensajeRiesgo) {
    let peso = document.createElement("p")
    peso.innerHTML = "El peso ingresado es: "+weight.value+" kg";

    let estatura = document.createElement("p");
    estatura.innerHTML = "La estaura ingresada es: "+height.value+" m";

    let resultado = document.createElement("p");
    resultado.innerHTML = "<br>Su IMC es "+result+", lo que indica que su peso está en la categoria "+categoria+" para adultos de su misma estatura.";

    let imagen = document.createElement("img");
    imagen.src = source;

    let msj = document.createElement("p");
    msj.innerHTML = mensajeRiesgo;

    let divResultados = document.createElement("div");
    divResultados.append(peso, estatura, resultado, imagen, msj);

    let button = document.createElement("button");
    button.innerHTML = "Volver a calcular";
    button.className = "button-design";
    button.setAttribute("onclick", "location.reload()");

    let divButton = document.createElement("div");
    divButton.appendChild(button);

    let container = document.createElement("div");
    container.append(divResultados, divButton);

    let contenedor = document.createElement("div");
    contenedor.className = "card-content pd-cardTwo card-content-two";
    contenedor.appendChild(container);

    containerCard.replaceChild(contenedor, cardContent);
}


