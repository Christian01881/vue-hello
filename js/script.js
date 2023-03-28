const { createApp } = Vue;

createApp({
    data() {
        return{
            title: 'Se stai leggendo questo messaggio significa che ho finito questo esercizio.',
            color: 'red',
            image: '../img/minato2.jpg',
            size: 'img-size',
            }
        },
}).mount('#app')