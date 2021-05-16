let texto
let contVocal 
let contConso 
const traer = () =>{
    contVocal = 0
    contConso = 0
    texto = document.getElementById("texto").value.toLowerCase()
    console.log(texto)
    validar(texto)
}

const validar = (texto) =>
    (texto==="")
        ?window.alert("Debe ingresar un texto")
        :contarCaracteres(texto)

const contarCaracteres = (texto) => {

    texto=texto.split("")

    for (let i = 0; i < texto.length; i++ ) {
    
        if(/(a|e|i|o|u)/g.test(texto[i])){
            contVocal++
        }else if(/(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z)/g.test(texto[i])){
            contConso++
        }

    }

    document.getElementById("vocales").value = contVocal
    document.getElementById("consonantes").value = contConso

}