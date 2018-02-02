/**
 * Esta parte es algo más avanzado y es el nucleo prácticamente de lo que
 * es Vue , y es trabajar por componentes, ya mas adelante te darás cuenta papu.
 */
/**
 * #1 usa el mmetodo component que tiene esta estructura:
 * Vue.component("el componente","{json donde pondras todo lo que usaras}");
 * OJO!!! Tiene que er en este orden xq sino te saldrá error debido a que
 * primero creas el componente para que lo busque app7, entiendes? xq si no creas
 * como fucking lo encontrará ps. A por cierto acá en vue el componente se traduce como decir
 * la etiqueta <>
 */

Vue.component('todo-item',{
    /**
     * Template es uno de los atributos, que es la cara prácticamente
     * de lo reemplazará a todo-item, es decir que en el navegador 
     * no verás ni las luces de todo-item, solo verás lo que está en el 
     * template es decir el bendito <li>bla bla bla</li>
     */
    props: ['heroes'],//Esto es para extraer los tributos de las etiquetas
    template: "<li>Aqui esta tu componente todo-item; {{heroes.text}}</li>"
    //Y en template pintas el nombre de del atributo y lo pinta, ese atributo
    //equivale en este caso los elementos del array q recorriste en la vista
});
 //#2 Ante todo siempre instancia al objeto Vue y señala dentro de qué vas a trabajar
 //en este caso es la etiqueta con el id "app7"
var app7 = new Vue({
    el: "#app7",
    data: {
        heroes: [
            {id: 0, text: "flash"},
            {id: 1, text: "spiderman"},
            {id: 2, text: "batman"},
            {id: 3, text: "flasupermansh"}
        ]
    }
})

/**
 * Conclusion esto es trabajar con componentes y la guia te dice q es la manera
 * mejor de trabajar par aun proyecto escalable , es decir desde pequeño hasta 
 * de gran amplitud y un ejemplo de la estructura que siempre te encontrarás es 
 * asi mas o menos: 
 * 
 <div id="app">
    <app-nav></app-nav>
    <app-view>
        <app-sidebar></app-sidebar>
        <app-content></app-content>
        </app-view>
    </div>
 * 
 * Si te has dado cuenta, es parecido a lo que hicimos en esta vista
 */

