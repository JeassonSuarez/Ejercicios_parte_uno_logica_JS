let numero 
let base
let bool=true

const traer = () =>{
    document.getElementById("conversion").value = ""
    numero = document.getElementById("numero").value
    base = document.getElementById("base").value

    validar(numero, base)
}

const validar = (numero, base) =>{
    if(parseInt(numero) !== parseFloat(numero)){
        window.alert(`Digite un valor sin decimales`)
    }else if(parseInt(base) === 2){
        numero = numero.split("")
        for (let i = 0; i < numero.length; i++) {
            if (parseInt(numero[i])>1 || parseInt(numero[i])<0) {
                window.alert(`El numero digitado no es binario`)
                bool = false
                break
            }else{
                bool = true
            }
        }

        if (bool === true) {
            numero = numero.join("")

            document.getElementById("conversion").value = convertir(numero, base)
        }
        

    }else if (parseInt(base)===10) {

        document.getElementById("conversion").value = convertir(numero, base)

    }else{
        window.alert("La base debe ser decimal o binaria")
    }

}

const convertir = (numero, base) =>{
    
    if (parseInt(base) === 2) {

        return `El numero ${numero} en decimal es ${parseInt(numero, 2)}`

    }else{
        
        return `El numero ${numero} en binario es ${parseInt(numero).toString(2)}`
    }

}