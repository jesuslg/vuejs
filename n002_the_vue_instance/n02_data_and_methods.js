
/**
 * A ver ahora vamos a ver la data y los métodos lo que ves abajo es lo mismo que esto
 *     data:{ 
        datos: {a:1},
        }
    Solo que esta vez lo pone en una variable y la coloca en su data(palabra reservada)
 * 
 */

var datos = {a:1};
var vm = new Vue({
    el: "#apptotal",
    data: datos
})
//y asi lo pinta en la consola para acceder, algo simple en todo aspecto
console.log("---Ejemplo1---");
console.log(datos.a);
console.log("---Ejemplo2---");
//Otra forma de mostrar mira 
console.log(datos.a);
console.log(vm.a);
console.log(datos.a == vm.a); //Son las dos formas de interprearse o de obtener la variable "a"
console.log("---Ejemplo3---");
vm.a = 2; //reasignamos el valor de a que sea igual a 2
console.log(datos.a); //y con la otra forma lo pinto y verás que es igual papu
console.log("---Ejemplo4---");
datos.a = 3; // reasignamos de otra manera y que crees?
console.log(vm.a);// pues si de la otra forma para obtener mostró el dato cambiado
console.log("---Ejemplo5---");
vm.b = 'h1';
console.log(vm.b);
/**
 * 
 * Este ultimo ejemplo es bien interesante si uno pone de esta manera , esta bien
 * se ejecuta pero no es una propiedad reactiva debido a que no se ha instanciado
 * dentro de data (donde se ejecutan toooodas las variables) por eso vue te recomienda que en datos
 * podrias poner asi
 * datos = {
 *     a: 1,
 *     b: 0 //instancio como vacio numeral, debido a q lo usaré
 * //asi como este int puedes usarlo en varios
 *  newTodoText: '' , 
    hideCompletedTodos: false , 
    todos: [], 
    error: null
 * }
 */