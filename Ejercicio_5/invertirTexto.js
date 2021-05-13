let texto 

const traer = () => {
    
    texto = document.getElementById("texto").value
    invertirTexto1(texto)
    validacion(texto)
    
}

const validacion = (texto) => 
    (!texto)
        ?window.alert("Debe ingresar un texto")
        :document.getElementById("textoInv").value = invertirTexto(texto)

const invertirTexto = (texto) => {
    
    let mostrar
    
    for (let i = texto.length; i >= 0; i--) {
        
        if (mostrar===undefined) {

                mostrar = texto.charAt(i)
    
            }else{
    
                mostrar += texto.charAt(i)
    
            }
        
    }
    
    return mostrar 

}


/* forma profe jonmircha*/
const invertirTexto1 = (texto) =>{
    console.log(texto.split("").reverse().join(""))
}


