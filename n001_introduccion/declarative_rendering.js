/**
 * Primero instancias Vue en una variable en este caso es app
 * Mira bien la estructura de la instancia Vue({}) Quiere
 * decir que es un objeto o clase que le mandas un parámetro
 * en JSON "{}"
 * Ya pues entonces como es un JSON posee diversos parámetros
 * con palabras reservadas en este caso es:
 * "el" y "data". Chueca el ejemplo:
 */
var app = new Vue({
    el: '#app', //Significa q trabajaras con todo el DOM q contenga la etiqueta con el id "app"
    data:{ //Data es un json donde es para declarar variables
        message: 'Hello babys!', //Este es un ejemplo de declarar variable tipo string
        message2: "Hola muchachos esto se verá tambien como un atributo tittle"
    }
})

/**
 * Como Vue es un objeto es decir que lo q tenga data 
 * son atributos de ese objeto y para llamarlo sería
 * app.message. checa el ejemplo.
 */
console.log(app.message);//a esto se le llama interpolación no lo olvides huevón! xD! 
//app.message = Hello babys 2! :v 