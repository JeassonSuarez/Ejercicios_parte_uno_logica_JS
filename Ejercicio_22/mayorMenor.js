let arreglo
let mayor=0 
let menor=0
let esNumeros
const traer = () =>{
    esNumeros = 0
    arreglo = document.getElementById("arreglo").value
    validar(arreglo.split(","))
}

const validar = (arreglo) =>{
    for (const valor of arreglo) {
        //console.log(valor);
        if (isNaN(valor*valor) || /\s/g.test(valor) || valor === "") {
            esNumeros = 1
        }else{
            console.log("f");
            esNumeros++
        }
    }  
    if (esNumeros === arreglo.length) {
        //console.log(`es ${esNumeros}`);
        document.getElementById("mayor").value = mayorValor(arreglo)
        document.getElementById("menor").value = menorValor(arreglo)
    }else{
        //onsole.log(`no es ${esNumeros}`);
        alert("No coincide con formato de arreglo de numeros")
    }
}

const mayorValor = (arreglo) =>{
    mayor = arreglo[0]
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i]=parseFloat(arreglo[i])
        //console.log(typeof arreglo[i], arreglo[i]);
        if (mayor >= arreglo[i] ) {
            mayor = mayor
        }else{
            mayor = arreglo[i]
        }
    }
    return mayor
}

const menorValor = (arreglo) =>{
    menor = arreglo[0]
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i]=parseFloat(arreglo[i])
        //console.log(typeof arreglo[i], arreglo[i]);
        if (menor <= arreglo[i] ) {
            menor = menor
        }else{
            menor = arreglo[i]
        }
    }
    return menor
}
