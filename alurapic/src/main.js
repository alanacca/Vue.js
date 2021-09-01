import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
/* Como o routes não está sendo importado como padrão no routes.js é necessário
colocar as {} para indicar qual o elemento de routes.js que eu quero importar */
import './directives/Transform';

Vue.use(VueResouce);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter)

const router = new VueRouter({ 
  routes, 
  mode: 'history' /* Para retirar o # do endereço url é utilizado o mode: 'history'
  que indica ao servidor vue cli que eu quero o endereço url sem o # */
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
