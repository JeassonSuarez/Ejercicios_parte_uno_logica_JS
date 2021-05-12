/*
2- Mostrar tantos caracteres como indique el usuario
*/

let texto
let numCar
let mostrar

const traerTexto = ()=>{
    mostrar=undefined
    texto = document.getElementById("texto").value
    numCar = document.getElementById("numCar").value
    if (numCar>texto.length || numCar<0) {

        window.alert("El numero de caracteres indicado supera el total de caracteres de la cadena.");

    } else {
        
        document.getElementById("textoRecortado").value = mostrarCaracteres(texto, numCar)
    
    }

}

const mostrarCaracteres=function(texto, numCar){
    
    for (let i = 0; i < numCar; i++) {
            
        if (mostrar===undefined) {

        mostrar = texto.charAt(i)

        }else{

            mostrar += texto.charAt(i)

        }

    }   

    return mostrar

}
