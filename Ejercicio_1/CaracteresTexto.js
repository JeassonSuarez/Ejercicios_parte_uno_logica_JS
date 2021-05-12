
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

