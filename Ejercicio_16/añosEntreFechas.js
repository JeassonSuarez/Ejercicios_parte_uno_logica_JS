let hoy = new Date()

const traer = () => {
    fecha = new Date(document.getElementById("fecha").value)
    validar(fecha)
}

const validar = (fecha) => {
    if(!(Date.parse(fecha))){
        window.alert("Seleccione una fecha")
    }

    if (fecha > hoy) {
        console.log("La fecha debe ser anterior a la fecha actual")
    }

    calcularAnios(fecha)
}

const calcularAnios = (fecha) =>{

    let resta = hoy.getTime() - fecha.getTime()

    console.log(Math.floor(resta/(1000*60*60*24*365)))


}
    