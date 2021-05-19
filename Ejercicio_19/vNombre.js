let nombre
let esNombre = false
const traer = () => {
    nombre = document.getElementById("nombre").value
    validarIngreso(nombre)
}

const validarIngreso = (nombre = "") =>
    (!nombre)
        ?window.alert(`Debe ingresar un nombre`)
        :(parseFloat(nombre))
            ?alert("Los numeros no tienen formato de nombre")
            :document.getElementById("respuesta").value = validarNombre(nombre)

const validarNombre = (nombre = "") => {

    let cont = 0
    let cont2 = 0
    nombre = nombre.split("")

    for (let i = 0; i < nombre.length; i++) {
       
        //console.log(nombre[i])
        
        if (/[a-z0-9 ]/i.test(nombre[i])) {
            cont++
            //console.log(cont, nombre.length)
            if (cont === nombre.length) {
                esNombre = true
            }else{
                esNombre = false
            }
        }else{
            esNombre = false
        }

        if (/( )/.test(nombre[i])) {
            cont2++
            if (cont2 === nombre.length) {
                esNombre = false
            }
        }

        
    }
    
    nombre = nombre.join("")

    if (esNombre === true) {
        return `El nombre (${nombre}) si tiene formato correcto`
    } else {
        return `El nombre (${nombre}) no tiene un formato correcto`
    }

}
