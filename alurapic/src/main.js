import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
/* Como o routes não está sendo importado como padrão no routes.js é necessário
colocar as {} para indicar qual o elemento de routes.js que eu quero importar */
import './directives/Transform';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';//Para as mensagens de erro virem em português
//Esse arquivo é pego em Pasta_projeto/node-modules/vee-validate/dist/locale/pt_BR
//depois é só copiar o arquivo pt_BR para Pasta_projeto/src/

//quando eu não digito um './' antes do endereço da pasta ele procura no node-modules
import 'bootstrap/dist/css/bootstrap.css'; //importando o css do node-module que foi configurado no webpack.config.js
import './assets/css/teste.css'; //importando meu próprio arquivo css
import './assets/js/teste.js'; //importando meu próprio js para o meu projeto

import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';

Vue.use(VueResouce);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);


const router = new VueRouter({ 
  routes, 
  mode: 'history' /* Para retirar o # do endereço url é utilizado o mode: 'history'
  que indica ao servidor vue cli que eu quero o endereço url sem o # */
});

Vue.use(VeeValidate,{//Para as mensagens sairem em português
  locale: 'pt_BR',
  dictionary:{
    pt_BR: {
      messages: msg
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
