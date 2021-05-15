let numero

const traer = () => {
    document.getElementById("validacion").value = ""
    numero = document.getElementById("numero").value
    validar(numero)
}

const validar = (numero) => 
    (numero === "")
        ?window.alert("Debe ingresar un numero")
        :(parseInt(numero) !== parseFloat(numero))
            ?window.alert("El numero debe ser entero")
            :document.getElementById("validacion").value = parOImpar (parseInt(numero))

    
const parOImpar = (numero) => {
    if (numero%2 === 0) {

        return `El numero ${numero} es par`
        
    }

    if (numero%2 !== 0) {

        return `El numero ${numero} es impar`
        
    }
}