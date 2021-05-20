let arreglo
let esArreglo

const traer = () => {
    esArreglo = 0
    document.getElementById("menormayor").value = null
    document.getElementById("mayormenor").value = null
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
        ordenarmenormayor(arreglo)
        ordenarMayorMenor(arreglo)
    }else{
        alert("El arreglo ingresado no cumple con el formato")
    }
}

const ordenarmenormayor = (arreglo) => {
    let menormayor = arreglo 
    menormayor.sort(function(a, b){return a-b})
    document.getElementById("menormayor").value = menormayor
}

const ordenarMayorMenor = (arreglo) =>{
    let mayormenor  = arreglo
    mayormenor.sort(function(a, b){return b-a})
    document.getElementById("mayormenor").value =mayormenor
}