import Cadastro from './components/cadastro/Cadastro.vue';
//const Cadastro = () => System.import('./components/cadastro/Cadastro.vue')//criando para só ser usado quando for acessado para o usuário
//e assim desfragmentar o documento do build.js em dois documentos
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', name:'home', component: Home, titulo: 'Home', menu: true},
    { path: '/cadastro',name:'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true},
    { path: '/cadastro/:id',name:'altera', component: Cadastro, titulo: 'Altera', menu: false},
    { path: '*', component: Home, menu: false}
];
