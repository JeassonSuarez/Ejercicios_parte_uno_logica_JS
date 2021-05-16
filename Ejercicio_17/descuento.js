let valor
let descuento

const traer = () => {
    valor = parseFloat(document.getElementById("numero").value)
    descuento = parseFloat(document.getElementById("descuento").value)
    
    Validar(valor, descuento)
}

const Validar = (valor, descuento) => 
    (valor < 0)
        ?window.alert("El valor inicial debe ser positivo")
        :(valor < valor*(descuento/100))
            ?window.alert("El descuento no puede ser mayor a 100%")
            :(descuento < 0)
                ?window.alert("El decuento debe ser un valor positivo")
                :document.getElementById("nValor").value = calcularDes(valor, descuento)
    
const calcularDes = (valor, descuento) => {

    return valor-(valor*(descuento/100))

}