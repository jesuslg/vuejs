
/**
 * Si no sabes ingles o no sabes usar el traductor :v,
 * esto es para manejar las entradas de usuario osea los inputs.
 */

 var app5 = new Vue({
    el: "#app5",
    data: {
        /**
         * Acuérdate que acá pones toooodas las variables que usarás :D. 
         */
        mensajito: "Aprende Vue o te saco la m...",
        mensaje2: " "
    },
    /**
     * Acá te muestro un atributo nuevo y es el "methods" donde tambien es un
     * json donde puedes poner tooooodas las funciones que quieras usar
     */
    methods: {
        mensajeAlReves: function(){
            this.mensajito = this.mensajito.split('').reverse().join('');
        },
    }
 });