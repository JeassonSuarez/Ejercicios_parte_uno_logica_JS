let arreglo
let esArreglo
let promedio

const traer = () => {
    esArreglo = 0
    document.getElementById("promedio").value = null
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
        document.getElementById("promedio").value = calcularPromedio(arreglo)
    }else{
        alert("Debe ingresar un arreglo que cumpla con el formato")
    }
}

const calcularPromedio = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i]=parseFloat(arreglo[i])
    }
    promedio = arreglo.reduce((a, b) => { return a + b})/arreglo.length
    return promedio
}