let temperatura
let deGrados
let aGrados

const traer = () =>{

    temperatura = document.getElementById("temperatura").value
    deGrados = document.getElementById("deGrados").value
    aGrados = document.getElementById("aGrados").value
    
    validar(temperatura, deGrados, aGrados)

}

const validar = (temperatura, deGrados, aGrados) => 
    (!parseFloat(temperatura))
        ?window.alert(`Debe ingresar un numero`)
        :document.getElementById("conversion").value = convertir(temperatura, deGrados, aGrados)

const convertir = (temperatura,deGrados, aGrados) => {

    let conversion = ""

    if (deGrados === aGrados) {
        conversion = temperatura
    }

    if (deGrados === "Celsius" && aGrados === "Fahrenheit") {
        conversion = temperatura * 33.8
    }

    if (deGrados === "Celsius" && aGrados === "Kelvin") {
        conversion = temperatura *274.15
    }

    if (deGrados === "Fahrenheit" && aGrados === "Celsius") {
        conversion = temperatura * -17.2222222
    }

    if (deGrados === "Fahrenheit" && aGrados === "Kelvin") {
        conversion = temperatura * 255.927778
    }

    if (deGrados === "Kelvin" && aGrados === "Celsius") {
        conversion = temperatura * -272.15
    }

    if (deGrados === "Kelvin" && aGrados === "Fahrenheit") {
        conversion = temperatura * -457.87
    }

    return `${temperatura} grados ${deGrados} son equivalentes a ${conversion} grados ${aGrados}`

}