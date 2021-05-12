let texto
let palabra
let contador 

const traer = () =>{
    contador = 0
    texto = document.getElementById("texto").value
    palabra = document.getElementById("palRepetida").value

    validar(texto, palabra)
}

const validar = (texto = "", palabra = "") => 
    (!texto)
        ?window.alert("Debe ingresar el texto")
        :(!palabra)
            ?window.alert("Debe ingresar la palabra repetida")
            :document.getElementById("cantidadRep").value = contarPalabras(texto, palabra)




const contarPalabras = (texto, palabra) => {

    arreglo = texto.split(" ")

    for (let i = 0; i <= arreglo.length; i++)
        (arreglo[i] === palabra)
            ?contador++
            :contador=contador
    
    return contador

}