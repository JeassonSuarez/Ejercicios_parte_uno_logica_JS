let texto 
let patron 

const traer = () =>{
    texto = document.getElementById("texto").value
    patron = document.getElementById("patron").value

    document.getElementById("textoNuevo").value = validar(texto, patron)
}

const validar = (texto = "", patron = "") =>
    (!texto)
        ?window.alert("Debe ingresar un texto")
        :(!patron)
            ?window.alert("Debe ingresar un patron")
            :eliminarPatron(texto, patron)

const eliminarPatron = (texto, patron) =>{
    return texto.replace(new RegExp(patron, "ig"), "")
}