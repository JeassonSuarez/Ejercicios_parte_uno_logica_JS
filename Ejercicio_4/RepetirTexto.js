/*
4- Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo 
Hola Mundo Hola Mundo.
*/

//versio 1

let texto
let vecesRepetido 

const traer = () =>{

    texto = document.getElementById("texto").value
    vecesRepetido = document.getElementById("numVeces").value

    document.getElementById("repetido").value = multi(texto, vecesRepetido)

}

const multiplicarTexto = function(texto, numVeces){

    
    return (texto.repeat(numVeces));

    console.log(texto);

}


//fin version 1


// version 2
const multi = function(texto, num){
    
    let arreglo = [];
    
    for (let i = 1; i <= num; i++) {
        
        arreglo.push(texto);
        
    }

    return (arreglo.join(" "));
}



// fin version 2