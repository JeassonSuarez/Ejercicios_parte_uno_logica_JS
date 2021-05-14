let numero 
let fac = 1
const traer = () =>{
    fac = 1
    numero = document.getElementById("numero").value
    numero = parseInt(numero)
    validar(numero)
}

const validar = (numero) =>
    (numero < 0)
        ?window.alert("Debe ingresar un numero")
        :document.getElementById("factorial").value = factorial(numero)   
    
const factorial = (numero) =>{
    if (numero === 0) {
        return 1
    }else{
    
        for (let i = numero; i >= 1; i--) {
            
            fac = i*fac 
            
        }
        
        return fac
    }
  
}