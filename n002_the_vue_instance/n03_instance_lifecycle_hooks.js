/**
 *  Son momentos en que inicias un ciclo
 * aun no tengo mucha info ni se para que sirve pero si averiguo
 * lo pondré, solo sé que la funcion se utiliza this
 * q referencia al objeto
 * 
 */
applife = new Vue({
    el: '#elap',
    data: {
        a:1
    },
    created: function(){
        console.log('hola');        
        console.log(this.a);
    }

})