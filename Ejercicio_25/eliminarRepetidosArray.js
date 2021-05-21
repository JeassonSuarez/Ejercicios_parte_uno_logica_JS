let arreglo
let esArreglo
const traer = () => {
    esArreglo = 0
    arreglo = document.getElementById("arreglo").value.split(",")
    validar(arreglo)
}

const validar = (arreglo) => {
    for (const valor of arreglo) {
        if (valor === "") {
            esArreglo = 0
        }else{
            esArreglo++
        }
    }

    if (esArreglo === arreglo.length) {
        //console.log(arreglo);
        arreglo2 = arreglo
        validarRepeticion(arreglo)
        
    }else{
        alert("Debe ingresar un arreglo")
    }
}

const validarRepeticion = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo);
        for (let j = i+1; j < arreglo.length; j++) {
            //console.log(arreglo[i], arreglo[j])
            if (arreglo[j] === arreglo[i]) {
                //console.log(`El valor ${arreglo[i]} es igual a${arreglo[j]}`);
                EliminarRepetidos(arreglo, j)
                break
            }
        }        
    }
    document.getElementById("sinRepetidos").value = arreglo 
}

const EliminarRepetidos = (arreglo, indexRep) =>{
    arreglo.splice(indexRep, 1)
    validarRepeticion(arreglo)
    //console.log(arreglo)
}