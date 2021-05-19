let arreglo
let esArreglo 

const arreglos = {
    arregloPares : new Array(),
    arregloImpares : new Array()
}

const traer = () => {
    esArreglo=0
    document.getElementById("pares").value = null
    document.getElementById("impares").value = null
    arreglo = document.getElementById("arreglo").value.split(",")

    validar(arreglo)

}



const validar = (arreglo) => {
    for (const valor of arreglo) {
        if (isNaN(valor*valor) || /( )/g.test(valor) || valor === "") {
            esArreglo = 0
        }else{
            esArreglo++
        }
    }

    if (esArreglo === arreglo.length) {
        llenarArreglosPeI(arreglo)
    }else{
        alert("El arreglo ingresado no cumple con el formato de numero")
    }
}

const llenarArreglosPeI = (arreglo) => {
        
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i]=parseFloat(arreglo[i])
        if (arreglo[i]%2 === 0) {
            arreglos.arregloPares.push(arreglo[i])
        }else{
            arreglos.arregloImpares.push(arreglo[i])
        }    
    }

    document.getElementById("pares").value = arreglos.arregloPares.join(",")
    document.getElementById("impares").value = arreglos.arregloImpares.join(",")
    console.log(arreglos)
}


