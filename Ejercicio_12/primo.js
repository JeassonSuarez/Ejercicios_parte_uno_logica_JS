let numero

const traer = () => {
    document.getElementById("primo").value = ""
    numero = document.getElementById("numero").value
    validar(numero)
}

const validar = (numero) =>

    (numero === 0)
        ?window.alert("El valor debe ser mayor a 1")
        :(!numero)
            ?window.alert("Ingrese un numero")    
            :(numero <= 1 )
                ?window.alert("El numero debe ser mayor a 1")
                :(parseInt(numero) !== parseFloat(numero))
                    ?window.alert("El numero debe ser un entero")
                    :document.getElementById("primo").value = primo(parseInt(numero))

const primo =(numero) =>{
    let contador = 0
    for (let i = numero; i >= 1; i--) {

        if (numero%i === 0) {
            
            contador++

        }

    }

    if (contador === 2) {

        return `El numero ${numero} es primo`
        
    }

    return `El numero ${numero} no es primo`
}