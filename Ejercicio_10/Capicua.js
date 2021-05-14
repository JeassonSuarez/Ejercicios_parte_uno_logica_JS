let numero

const traer = () =>{
    numero = document.getElementById("numero").value
    numero = parseInt(numero)
    validar(numero)
}

const validar = (numero) =>
    (!numero)
        ?window.alert("Debe ingresar un numero")
        :document.getElementById("capicua").value = capicua(numero)

const capicua = (numero) => {
    let numeroRev = parseInt(String(numero).split("").reverse().join(""))
    console.log(numeroRev)
    if (numeroRev === numero) {
        return (`El numero ${numero} es capicua`)
    }else{
        return(`El numero ${numero} no es capicua`)
    }
}