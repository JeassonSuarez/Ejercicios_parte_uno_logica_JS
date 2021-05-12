
/*
1- con arrow function y operador ternario
*/

let text1 
let numCaracteres

const traerTexto = () =>{

    text1 = document.getElementById("texto").value
    return contarCaracteres(text1)

}
   
const contarCaracteres = function(texto){

    return texto.length

}

const devolverNumCaract = () => {

      document.getElementById("numCaracteres").value=traerTexto()

}

const contarCaracteres1 = (texto) =>
    (!texto)
        ?console.warn("No hay ningun caracter.")
        :console.info(`El numero de caracetes de "${texto}" es ${texto.length} caracteres.`)

contarCaracteres1(text1)

/*
2- Mostrar tantos caracteres como indique el usuario
*/

let text2="Hola Mundo";
let caracteresAMostrar = 4;

const mostrarCaracteres=function(texto, cantidad){
    
    if (caracteresAMostrar>text2.length) {

        console.log("El numero de caracteres indicado supera el total de caracteres de la cadena.");

    } else {

        let mostrar;

        for (let i = 0; i < caracteresAMostrar; i++) {
            
            if (mostrar===undefined) {

                mostrar = text2.charAt(i);

            }else{

                mostrar += text2.charAt(i);

            }

        }

        console.log(mostrar);

    }
        
}

mostrarCaracteres(text2, caracteresAMostrar);

/*
3- Programa una función que dada una String te devuelva un 
Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

let texto3 = "hola que tal";
let carac = " ";


const entregarArreglo = function(texto, caracterSep){
    
    console.log(texto.split(caracterSep));
  
}

entregarArreglo(texto3, carac);

/*
4- Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo 
Hola Mundo Hola Mundo.
*/

//versio 1

let texto4 = "Hola Mundo";
let vecesRepetido = 4;

const multiplicarTexto = function(texto, numVeces){

    
    console.log(texto4.repeat(numVeces));

    console.log(texto4);

}

multiplicarTexto(texto4, vecesRepetido);

//fin version 1


// version 2
const multi = function(texto, num){
    
    let arreglo = [];
    
    for (let i = 1; i <= num; i++) {
        
        arreglo.push(texto);
        
    }

    console.log(arreglo.join(" "));
}

multi(texto4, vecesRepetido);

// fin version 2
