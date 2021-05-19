let arreglo
let esArreglo 

const arreglos = {
    arregloPares : 0,
    arregloImpares : 0
}

const traer = () => {
    esArreglo=0
    arreglos.arregloPares = new Array()
    arreglos.arregloImpares = new Array()
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
       
        PeI(arreglo)
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
    document.getElementById("objeto").value = `{ Arreglo de pares: [ ${arreglos.arregloPares} ] , Arreglo de impares: [ ${arreglos.arregloImpares} ] }` 
}

// aplicando el metodo de los arreglos filte, dando una condicion

const PeI = (arreglo) =>{
    const pei = {
        pares: arreglo.filter(valor => valor%2 === 0),
        impares: arreglo.filter(valor => valor%2 !== 0)
    }
    console.log(pei);
}


