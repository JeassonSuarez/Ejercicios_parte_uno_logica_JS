let id
let titulo
let director
let anioEstreno
let paises
let generos
let clasificacion


const traer = () => {

    id = document.getElementById("idPelicula").value
    titulo = document.getElementById("titulo").value
    director = document.getElementById("director").value
    anioEstreno = document.getElementById("anioEstreno").value
    paises = document.getElementById("paises").value
    generos = document.getElementById("generos").value
    calificacion = document.getElementById("calificacion").value
    pelicula.genAceptados()
    let peliculas = new pelicula(id, titulo, director, anioEstreno, paises, generos, calificacion)
    console.log(peliculas);
    if (peliculas.validarId() === true) {
        peliculas.mostrarFichaPelicula()
    }  

}

class pelicula {

    constructor(id, titulo, director, anioEstreno, paises, generos, calificacion){
        this.arreglo = new Array()
        this.generosAceptados = ["Action", "Adult", "Adventure", "Animation", "Biography", 
                                    "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", 
                                    "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", 
                                    "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", 
                                    "Sport", "Talk-Show", "Thriller", "War", "Western"]
        this.nombresAtributos = ["id","título","director","año de estreno","pais o paises",
                                    "genero o generos","calificacion"]
        this.arreglo.push(id)
        this.arreglo.push(titulo)
        this.arreglo.push(director)
        this.arreglo.push(anioEstreno)
        this.arreglo.push(paises)
        this.arreglo.push(generos)
        this.arreglo.push(calificacion)
        

    }

    static genAceptados() {

        let gA = ["Action", "Adult", "Adventure", "Animation", "Biography", 
        "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", 
        "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", 
        "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", 
        "Sport", "Talk-Show", "Thriller", "War", "Western"].join(", ")
        document.getElementById("generosAceptados").innerText = "Los generos aceptados son: " +gA
    }

    mostrarFichaPelicula(){
        
        document.getElementById("idf").innerText = this.arreglo[0]
        document.getElementById("titulof").innerText = this.arreglo[1]
        document.getElementById("directorf").innerText = this.arreglo[2]
        document.getElementById("anioEstrenof").innerText = this.arreglo[3]
        document.getElementById("paisf").innerText = this.arreglo[4]
        document.getElementById("generof").innerText = this.arreglo[5]
        document.getElementById("calificacionf").innerText = this.arreglo[6]

    }

    validarId() {
        
        //Validacion, ningun campo quede vacio
        let coontCampoVacio = 0
        let contValidaciones = 0
        for (let i = 0; i < this.arreglo.length; i++) {
            if (this.arreglo[i] === "") {
                console.log(`El campo ${this.nombresAtributos[i]} de la película no puede estar vacio`);
                break
            }else{
                coontCampoVacio++
            }
        }
        //console.log(coontCampoVacio);
        if (coontCampoVacio === this.arreglo.length) {
            contValidaciones++
        }

        console.log(`Numero validaciones exitosas: ${contValidaciones}`);

//Validacion formato IMDB para el id

        let idFormatoIMDB = false
        if (this.arreglo[0].length < 9 ) {
            console.log("El id no debe tener menos de 9 caracteres");
        }else if (this.arreglo[0].length > 9) {
            console.log("El id no debe tener mas de 9 caracteres");
        }else{
            let contNumId = 0
            //this.arreglo[0] = this.arreglo[0].split("")
            for (let i = 2; i < this.arreglo[0].length; i++) {
                if (isNaN(this.arreglo[0].charAt(i)*this.arreglo[0].charAt(i)) || /( )/.test(this.arreglo[0].charAt(i))) {
                    contNumId = 0
                }else{
                    contNumId++
                }
            }
            if (/[a-z]/i.test(this.arreglo[0].charAt(0)) && /[a-z]/i.test(this.arreglo[0].charAt(1)) && contNumId === 7) {
                idFormatoIMDB = true
                //console.log(contNumId);
                //console.log(this.arreglo[0]);
            }else{
                console.log("El id no tiene formato IMDB");
            }
        }

        //console.log(idFormatoIMDB);
        if (idFormatoIMDB === true) {
            contValidaciones++
        }
    
        console.log(`Numero validaciones exitosas: ${contValidaciones}`);

//validar que el titulo no supere los 100 caracteres
        let ValidarTitulo = false
        let contValidosCar = 0
        //console.log(this.arreglo[1].length);
        if (this.arreglo[1].length > 100 ) {
            contValidosCar = -1
            console.log(`El título supera los 100 caracteres`);
        }else if (this.arreglo[1] === "") {
            contValidosCar =-1
            console.log("Debe ingresar un titulo");
        }else{
            for (let i = 0; i < this.arreglo[1].length; i++) {
                if (!(/[a-z0-9]|\s|[.]|[,]|[_-]/i.test(this.arreglo[1].charAt(i))) ) {
                    console.log("El título tiene caracteres extraños");
                    contValidosCar = -1
                }else{
                    contValidosCar++
                }
            }
        }
        

        if (contValidosCar === this.arreglo[1].length) {
            contValidaciones++
        }

        console.log(`Numero validaciones exitosas: ${contValidaciones}`);

//validar que el director no supere los 50 caracteres 
        let validarDirector = false
        let contcaracteres = 0
        //console.log(this.arreglo[2].length);
        if (this.arreglo[2].length > 50 ) {
            console.log(`El director supera los 50 caracteres`);
            contcaracteres = -1
        }else if (this.arreglo[2] === "") {
            console.log("Debe ingresar un nombre de director");
            contcaracteres = -1
        }
        for (let i = 0; i < this.arreglo[2].length; i++) {
            if (!(/[a-z0-9]|\s|[.]|[,]|[_-]/i.test(this.arreglo[2].charAt(i))) ) {
                console.log("El director tiene caracteres extraños");
                contcaracteres = -1
            }else{
                contcaracteres++
            }
        }

        if (contcaracteres === this.arreglo[2].length) {
            contValidaciones++
        }

        console.log(`Numero validaciones exitosas: ${contValidaciones}`);


//validar que el año sea un numero de 4 digitos y entero
        if (this.arreglo[3].length < 4 ) {
            console.log("El año no debe tener menos de 4 caracteres");
        }else if (this.arreglo[3].length > 4) {
            console.log("El año no debe tener mas de 4 caracteres");
        }else{
            let contNumAnio = 0
            for (let i = 0; i < this.arreglo[3].length; i++) {
                if (!(/[0-9]/.test(this.arreglo[3].charAt(i)))) {
                    contNumAnio = 0
                }else{
                    contNumAnio++
                }
            }

            if (contNumAnio !== this.arreglo[3].length) {
                console.log(`El campo ${this.arreglo[3]} no es un año`);
            }else{
                contValidaciones++
            }
        }

        console.log(`Numero validaciones exitosas: ${contValidaciones}`);


//validar ingreso de paises como arreglo
        this.arreglo[4] = this.arreglo[4].split(",")
        let contpais = 0
        
        for (let i = 0; i < this.arreglo[4].length; i++) {
            let esPais = 0
            if (this.arreglo[4][i] === "") {
                contpais = -1
            }
            for (let j = 0; j < this.arreglo[4][i].length; j++) {
                //console.log(this.arreglo[4][i].charAt(j));
                if (/[a-z]|[\u00E0-\u00FC]/i.test(this.arreglo[4][i].charAt(j))) {
                    esPais++
                }else{
                    esPais = 0
                }
            }
            if (esPais === this.arreglo[4][i].length) {
                
                contpais++
                //console.log("Es pais");
                //console.log(contpais);
            }else{
                contpais = -1
                console.log(`El valor ${this.arreglo[4][i]} no es un pais, contiene caracteres extraños`);
            }
        }

        if (contpais === this.arreglo[4].length) {
            contValidaciones++
        }

        console.log(`Numero validaciones exitosasddfsf: ${contValidaciones}`);


//validar ingreso de generos como arreglo
        this.arreglo[5] = this.arreglo[5].split(",")
        let contGeneroAceptado = 0
        let generoNoAceptado
        for (let i = 0; i < this.arreglo[5].length; i++) {
            let esGenero = 0
            for (let j = 0; j < this.arreglo[5][i].length; j++) {
                //console.log(this.arreglo[5][i].charAt(j));
                if (/[a-z]|[\u00E0-\u00FC]/i.test(this.arreglo[5][i].charAt(j))) {
                    esGenero++
                }else{
                    esGenero = 0
                }
            }
            
            if (esGenero === this.arreglo[5][i].length) {
                
                for (const generoAceptado of this.generosAceptados) {

                    //console.log(this.arreglo[5][i].toLowerCase() ,generoAceptado.toLowerCase());
                    if (this.arreglo[5][i].toLowerCase() === generoAceptado.toLowerCase()) {

                        contGeneroAceptado++
                        continue

                    }else{

                        generoNoAceptado = this.arreglo[5][i]
                        
                    }
                }
                //console.log(contGeneroAceptado);
                //console.log(this.arreglo[5].length)
                
            }else {
                console.log(`El valor ${this.arreglo[5][i]} no es un genero, contiene caracteres extraños`);
            }
        }
        if (contGeneroAceptado === this.arreglo[5].length) {
            //console.log("Los generos son aceptados");
            contValidaciones++
        }else{
            console.log(`"${generoNoAceptado}" no es un genero aceptado`);
        }

        console.log(`Numero validaciones exitosasddfsf: ${contValidaciones}`);


//Valida que la calificacion este entre 0-10 con un punto decimal 
        let escalificacion = false
        if (isNaN(this.arreglo[6]*this.arreglo[6]) || /( )/g.test(this.arreglo[6]) || this.arreglo[6]==="") {
            console.log("Debe ingresar un numero");
        }else{

            this.arreglo[6] = this.arreglo[6].split(".")
            //console.log(`fdsfas ${this.arreglo[6].length}`);
            if (this.arreglo[6].length === 1 && parseFloat(this.arreglo[6][0])>-1 && parseFloat(this.arreglo[6][0])<=10) {
                escalificacion =true
                //console.log("Numero sin decimal");
            }else if (this.arreglo[6].length === 2 && parseFloat(this.arreglo[6][0])>-1 && parseFloat(this.arreglo[6][0])<10 && parseFloat(this.arreglo[6][1])>0 && parseFloat(this.arreglo[6][1])<10) {
               // console.log("con decimal");
                escalificacion = true
            }else{
                console.log("No cumple formato ");
            }
        }

        if(escalificacion === true){
            contValidaciones++
        }

        console.log(`Numero validaciones exitosasddfsf: ${contValidaciones}`);

        if (contValidaciones === 8) {
            return(true)
        }else{
            return(false)
        }
    }

}

