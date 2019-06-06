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
        $('#letraIngresar').val('');
        chequearVidas();
    });

});

const chequearVidas = function () {

    if (vidas === 0) {
        console.log('perdiste');
    }else{
        if (guiones.indexOf(" __ ") === -1){
            console.log("Ganaste"); 
        }
    }
    
}


const palabraAlAzar = function () {
    var aleatorio = Math.floor(Math.random() * (listado.length));
    var palabra = listado[aleatorio];
    return palabra;
}

const iniciarJuego = function () {
    guiones = [];
    palabraElegida = palabraAlAzar();
    console.log(palabraElegida);
    palabraElegida = normalizarPalabras(palabraElegida);
    separarPalabraEnGuionesInicial(palabraElegida);
    vidas = palabraElegida.length + 1;
    $('#vidas').html(vidas);
}

const normalizarPalabras = function (palabraOLetra) {

    let texto = palabraOLetra.toUpperCase();
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

    let palabraResultado = texto.replace(expresion, function (e) { // Busca en la cadena lo que coincida en la expr.regular, reemplaza y asigno a una variable
        
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
    if (palabraElegida.indexOf(letra) === -1) {
        vidas--;
        $('#vidas').html(vidas);
        letrasErroneas.push(letra);
        $("#letrasErroneas").html(letrasErroneas.join("-"));
    }else{

        for (let  i= 0; i < palabraElegida.length; i++) {
            
            if (palabraElegida[i] === letra) {
                guiones[i] = letra;
                colocarLetras(guiones);
            } 

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