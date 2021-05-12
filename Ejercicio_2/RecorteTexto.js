/*
2- Mostrar tantos caracteres como indique el usuario
*/

let texto
let numCar
let mostrar

const traerTexto = ()=>{
    mostrar = undefined
    texto = document.getElementById("texto").value
    numCar = document.getElementById("numCar").value
    window.alert(texto)
    recorte(texto, numCar, mostrar)
}

const recorte = (texto, numCar, mostrar) => 
  (numCar<0)
    ?window.alert("El numeri de caracteres indicado es negativo")
    :(numCar>texto.length)
       ?window.alert("El numero de caracteres indicado supera el total de caracteres de la cadena.")
       :(texto === "")
          ?window.alert("No se ha ingresado ningun texto")
          :document.getElementById("textoRecortado").value = mostrarCaracteres(texto, numCar)

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

/* se puede hacer uso del metodo slice(0, numero donde se quiere cortar la cadena)*/