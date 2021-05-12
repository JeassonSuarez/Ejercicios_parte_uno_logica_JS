/*
4- Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo 
Hola Mundo Hola Mundo.
*/

let texto
let vecesRepetido 

const traer = () =>{

    texto = document.getElementById("texto").value
    vecesRepetido = document.getElementById("numVeces").value
    verificaciones(texto, vecesRepetido)

}

const verificaciones = (texto, num) => 
    (!texto)
        ?window.alert("No ha ingresado ningun texto")
        :(Math.sign(num) === -1)
            ?window.alert("El numero de repeticiones no puede ser negativo")
            :(num === "")
                ?window.alert("El numero de repeticiones no esta definido")
                :document.getElementById("repetido").value = multi(texto, vecesRepetido)

const multi = function(texto, num){
    
    let arreglo = [];
    
    for (let i = 1; i <= num; i++) {
        
        arreglo.push(texto);
        
    }

    return (arreglo.join(" "));
}



// fin version 2

const multiplicarTexto = function(texto, numVeces){

    
    return (texto.repeat(numVeces));

    console.log(texto);

}