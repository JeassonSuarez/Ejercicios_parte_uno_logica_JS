
let palInversa 
let palabra

const traer = () =>{
    
    palInversa = undefined
    palabra = document.getElementById("texto").value
    palabra=palabra.toLowerCase()
    validar(palabra)
    window.alert(palabra)
}

const validar = (texto="") =>
    (!texto)
        ?window.alert("Debe introducir un texto")
        :palin(palabra)

const invertirPal = (palabra) =>{

    for (let i = palabra.length; i>=0; i--) {
        
        if(palInversa===undefined){
            palInversa = palabra.charAt(i)
        }else{
            palInversa += palabra.charAt(i)
        }

    }

    return palInversa

}

const palin = (palabra) =>
    (invertirPal(palabra) === palabra)
        ? document.getElementById("Palindroma").value = "True"
        : document.getElementById("Palindroma").value = "False"
