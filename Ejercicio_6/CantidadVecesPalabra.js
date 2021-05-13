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

    palRep(document.getElementById("texto").value,document.getElementById("palRepetida").value)

    arreglo = texto.split(" ")

    for (let i = 0; i <= arreglo.length; i++)
        (arreglo[i] === palabra)
            ?contador++
            :contador=contador
    
    return contador

    
}




//metodo profe jon 

const palRep = (texto, palabra) =>{

    let cont = 0
    let i = 0
    while (i!==-1) {
        i = texto.indexOf(palabra, i)
        if (i!==-1) {
            i++
            cont++
        }
    }
    
    console.info(`El numero de veces que aparece la palabra ${palabra} es ${cont}`)

}
