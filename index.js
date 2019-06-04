let palabraElegida, letraElegida, vidas;
let guiones = [];
let letrasErroneas = [];

$(document).ready(function () {
    
    $('#iniciar').click(function () {
        iniciarJuego();
    });
    $('#botonEnviar').click(function () {
        letraElegida = $('#letraIngresar').val();
        letraElegida = normalizarPalabras(letraElegida);
        chequearLetraIngresada(letraElegida);
    });

});

const palabraAlAzar = function () {
    var aleatorio = Math.floor(Math.random() * (listado.length));
    var palabra = listado[aleatorio];
    return palabra;
}

const iniciarJuego = function () {
    palabraElegida = palabraAlAzar();
    console.log(palabraElegida);
    palabraElegida = normalizarPalabras(palabraElegida);
    separarPalabraEnGuionesInicial(palabraElegida);
}

const normalizarPalabras = function (palabra) {

    palabraElegida = palabra.toUpperCase();
    let caracteres = {
        "á": "a",
        "é": "e",
        "í": "i",
        "ó": "o",
        "ú": "u",
        "Á": "A",
        "É": "E",
        "Í": "I",
        "Ó": "O",
        "Ú": "U"
    }

    let expresion = /[áéíóúÁÉÍÓÚ"]/; // Declaro la expresion regular

    let palabraResultado = palabraElegida.replace(expresion, function (e) { // Busca en la cadena lo que coincida en la expr.regular, reemplaza y asigno a una variable
        
        return caracteres[e];
    });

    return palabraResultado;

}



const separarPalabraEnGuionesInicial = function(palabra) {   
    for (let i = 0; i < palabra.length; i++) {
        guiones[i] = " __ ";
    }
    colocarLetras(guiones);
}

const colocarLetras = function(palabra) {
    // guiones[posicion] = caracter; 
    $('#contextoPalabra').html(palabra.join(" "));
    // $('#contextoPalabra').html(guiones.join(" "));
}


const chequearLetraIngresada = function (letra) {
    for (let  i= 0; i < palabraElegida.length; i++) {
        
        // if (palabraElegida.indexOf('letra') === -1) {
        if (palabraElegida[i] === letra) {
            guiones[i] = letra;
            colocarLetras(guiones);
        } else {
            console.log('letra Incorrecta');
        }

    }    

}




// const separarPalabrasEnDivs = function (palabra) {

//     let cantLetras = palabra.length;

//     for (let i = 0; i < cantLetras; i++) {
//         $('#contextoPalabra').append('<div class="guiones" id="' + i +'"></div>');
//         // $('#contextoPalabra').append('<div class="guiones" id="' + i +'">'+palabraElegida[i]+'</div>');
//     }

// }

// function chequearLetraIngresada(letra) {
//     var indexes = [], i;
//     for(i = 0; i < palabraElegida.length; i++)
//     if (palabraElegida[i] === letra)
//         indexes.push(i);
//     return indexes;
// }