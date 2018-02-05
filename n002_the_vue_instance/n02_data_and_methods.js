
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
// vm.b = 'h1';
// console.log(vm.b);
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
 var obj = {
     foo: 'bar'
 }
// Object.freeze(obj); //Esto lo que hace es freezear es decir congela las propiedades de tu objeto
                    //es decir q no puedes agregar más, no puedes editarlo ni nada.
//Prueba 1
// new Vue({
//     el: '#appmini',
//     data (){
//         return obj;
//     }
// })
//Prueba 2
new Vue({
    el: '#appmini',
    data () {
      return {
        obj
      }
    }
  })
/**
 * Si quieres intenta reasignar y verás q no podrás
 */
// obj.b = 49
// obj.foo = 100
console.log(obj.foo);

//para el appmini 2
var example = {a:1}
var vuem = new Vue({
  el: "#appmini2",
  data: example
})

console.log(vuem.$data) // es igual a la example
console.log(vuem.$el) // capturas el DOM document.getElementById('example'); 
vuem.$watch('a', function(newV, oldVal){
  // console.log(`Nuevo : ${newV} - Viejo: ${oldVal}`);
  console.log(oldVal);
})
//Con este ultimo $watch es cuando se manipula valores 
//y la misma lógica en si va en el html y aca hago lo q quiera dentro de la funcion
