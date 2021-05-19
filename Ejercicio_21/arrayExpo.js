let arreglo 

const traer = () =>{
    //document.getElementById("aCuadrado").value = null
    arreglo = document.getElementById("arreglo").value.split(",")
    potencia = document.getElementById("potencia").value
    validar(arreglo, potencia)

}

const validar = (arreglo = "", potencia = 0) =>{
    let esArreglo = 0
    
    for (let i = 0; i < arreglo.length; i++) {
    
        if (arreglo[i]==="") {
            esArreglo = 0
            //console.log("1");
        }else if (isNaN(Math.pow(arreglo[i], potencia))) {
            esArreglo = 0
            //console.log("2");
        }else{
            for (let j = 0; j < arreglo[i].length; j++) {
                if((/()/.test(arreglo[i].charAt(j)))){
                    //console.log(arreglo[i].charAt(j));
                    if (arreglo[i].charAt(j)=== " ") {
                        esArreglo--
                    }else{
                        esArreglo++
                    }
                    //console.log("3");
                }
            }
        }
        //console.log(typeof arreglo[i], esArreglo, arreglo.length)
        
    }

    if (esArreglo !== arreglo.length) {
        alert("Un valor digitado no es numero")
    }else if (esArreglo === arreglo.length) {
        document.getElementById("aCuadrado").value = elevarArreglo(arreglo, potencia)
    }
    
    
}

const elevarArreglo = (arreglo = "", potencia = 0) => {
    
    let arreglo2 = new Array()
    
    for (let i = 0; i < arreglo.length; i++) {

        arreglo2.push(Math.pow(arreglo[i], potencia))

    }

    return arreglo2.join(",")
    
}