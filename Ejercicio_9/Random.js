let min 
let max

const traer = () =>{
    min = parseInt(document.getElementById("min").value)
    max = parseInt(document.getElementById("max").value)
    validar(min, max)
}

const validar = (min , max) =>
    (min >= max)
        ?window.alert("El minimo no puede ser mayor que el maximo")
        :(min === "")
            ?window.alert("Digite el valor minimo")
            :(max === "")
                ?window.alert("Digite el valor maximo")
                :document.getElementById("aleatorio").value =Math.floor((Math.random()*(max-min))+min)
