let valor = 0
let descuento = 0 

const traer = () => {
    valor = document.getElementById("numero").value
    descuento = document.getElementById("descuento").value
    console.log(document.getElementById("numero").value)
    Validar(valor, descuento)
}

const Validar = (valor, descuento) => 
    (!valor)
        ?window.alert("Debe ingresar un valor inicial")
        :(!descuento)
            ?window.alert("Debe ingresar un descuento")
            :(valor < 0)
                ?window.alert("El valor inicial debe ser positivo")
                :(valor < valor*(descuento/100))
                    ?window.alert("El descuento no puede ser mayor a 100%")
                    :(descuento < 0)
                        ?window.alert("El decuento debe ser un valor positivo")
                        :document.getElementById("nValor").value = calcularDes(valor, descuento)
        
const calcularDes = (valor, descuento) => {

    return valor-(valor*(descuento/100))

}