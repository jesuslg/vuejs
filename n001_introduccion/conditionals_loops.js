var app3 = new Vue({
    el: "#app3",
    data: {
        seen: true, //boolean
        frutas: ['manzana', 'pera', 'plátano', 'papaya'], //array
        colores: [
            {sintaxis: "red", code: "#E02A2A"},
            {sintaxis: "blue", code: "#1316D3"}
        ] //acuérdate que tamb puede ser un array puede contener JSON
    }
})
/**
 * El "seen" como es una variable puede ser string, boolean o numérico
 * si usas la consola y haces esto epp3.seen = false , verás q gracias 
 * a la interpolación verás que es lo que sucede.
 * 
 * Por otro lado ves que fruta es un array asi que ya sabes no seas gil! :v 
 */

