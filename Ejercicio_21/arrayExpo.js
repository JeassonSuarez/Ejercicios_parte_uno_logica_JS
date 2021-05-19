let arreglo 
let esArreglo
let esPotencia
const traer = () =>{
    esArreglo = 0
    document.getElementById("aCuadrado").value = null
    esPotencia =false
    //document.getElementById("aCuadrado").value = null
    arreglo = document.getElementById("arreglo").value.split(",")
    potencia = document.getElementById("potencia").value
    validar(arreglo, potencia)

}

const validar = (arreglo = "", potencia = 0) =>{
    for (const valor of arreglo) {
        if (isNaN(valor*valor) || /( )/g.test(valor) || valor === "") {
            esArreglo = 0  
        }else{
            esArreglo++
        }
    }

    if (isNaN(potencia*potencia) || /( )/g.test(potencia) || potencia === "") {
        esPotencia = false 
    }else{
        esPotencia = true
    }

    if (esArreglo === arreglo.length && esPotencia === true) {
        document.getElementById("aCuadrado").value = elevarArreglo(arreglo, potencia)
    }else{
        if (esArreglo !== arreglo.length) {
            alert("No coincide con el formato de un arreglo")
        }else{
            alert("El valor de potencia no es un numero")
        }
    }
}

const elevarArreglo = (arreglo = "", potencia = 0) => {
    
    let arreglo2 = new Array()
    
    for (let i = 0; i < arreglo.length; i++) {

        arreglo2.push(Math.pow(arreglo[i], potencia))

    }
    //cuadrado(arreglo, potencia)
    return arreglo2.join(",")
    
}


//metodo para realizar operaciones con valores de un array 

const cuadrado = (arreglo, potencia) =>{
   const arregloCuad = arreglo.map(elevacuadrado => Math.pow(elevacuadrado, potencia))
    console.log(arregloCuad);
}