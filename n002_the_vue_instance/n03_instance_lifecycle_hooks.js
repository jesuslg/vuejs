/**
 * A ver como te lo explico uhmmm
 * digamos son las instancias que sucede dentro de un pagina
 * cuando inicia la carga, cuando se muestran nuevas cosas, o cuando
 * eliminas algo de ahi... que te parece que esas cosas desencadenen otras
 * y tengas la opcion de controlar y hacer que ejecute algo?
 * 
 * pues Vue te lo permite checa el ejemplo y lo sabras :v 
 * 
 */
applife = new Vue({
    el: '#elap',
    data: {
        a:1
    },
    methods:{
        cambiar(){
            this.a = this.a +1;
            console.log(this.a);
        }
    },
    created: function(){
        console.log('hola');        
        console.log(this.a);
    },
    updated: function(){
        alert('se actualizó');
    }

})

