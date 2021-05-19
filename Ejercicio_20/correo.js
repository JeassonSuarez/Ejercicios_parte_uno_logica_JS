let  correo

const traer = () =>{
    correo = document.getElementById("correo").value
    validar (correo)
}

const validar = (correo = "") =>{

    if (!correo) {
        alert("Debe ingresar un correo")
    }else{
        document.getElementById("respuesta").value = ValidarCorreo(correo)
    }

}

const ValidarCorreo = (correo = "") =>{
    correo = correo.split("")
    let contArroba = 0
    let contEspacio = 0
    let cont = 0
    let posArroba = 0
    let esCorreo = false
    let n = 0
    for (let i = 0; i < correo.length; i++) {
        if (/( )/.test(correo[i])) {

            contEspacio++
            
            if (contEspacio >0) {
                
                console.log("El direccion no puede tener espacios");

            }
            
        }

        if (/[a-z|0-9|@|_|.|+]/i.test(correo[i]) || /(-)/.test(correo[i])) {
            cont++
            console.log(cont, correo.length);
            if (/(@)/.test(correo[i])) {
                
                contArroba++
                posArroba = i

            }
        }
    }

    if (contArroba>1 && cont !== correo.length) {
                    
        console.log("El correo tiene mas de una @");
        esCorreo = false

    }else if (contArroba === 1 && cont === correo.length) {

        for (let i = posArroba; i < correo.length; i++) {
            
            if (correo[i] === "." && correo[posArroba+1] !== "." ) {
                
                esCorreo = true

            }else if (correo[posArroba+1] === "." ) {
                
                esCorreo = false

            }
            
        }

    }

    if (esCorreo === true) {
        return "La direccion ingresada si cuenta con un formato de Correo Electronico"
    }else{
        return "La direccion ingresada no cuenta con el formato de Correo Electronico"
    }
}
 
 /**
 expresion regular para validar mail /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
 */