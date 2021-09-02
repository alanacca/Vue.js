
<template>
  <div>
    <!--<img src="/static/asd.jpg"> para importar uma imagem pro código, deve-se criar a pasta static e colocar as imagens la dentro-->
    <!--quando for utilizar sa imagens direto do pc deve levar a pasta static para dentro da pasta do servidor junto com o index.html e a pasta dist-->
    <h1 class="centralizado">{{titulo}}</h1>
    
      <p v-show="mensagem" class="centralizado"> {{ mensagem }} </p>


    <input type="search" class="filtro" @input="filtro= $event.target.value" placeholder="filtre por parte do título">
    <!--o data binding, v-on = @, vai indicar que no evento de input ele vai colocar a variavel filtro do data igual ao que fo digitado pelo usuário-->
    
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
      
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:scale.animate="15" :url = "foto.url" :titulo = "foto.titulo"/>
          <router-link :to="{name: 'altera',params: {id: foto._id}}">
            <meu-botao tipo="button" rotulo="ALTERAR"></meu-botao>
          </router-link>
          <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove(foto)" :confirmacao="true" estilo="perigo"></meu-botao>
        </meu-painel>
        
      </li>
    </ul>
  </div>
</template>

<script>

import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue'
import FotoService from '../../domain/foto/FotoService'

export default {

  components: {
    'meu-painel' : Painel,//as aspas foram devido ao hífem no nome da "variavel"
    'imagem-responsiva' : ImagemResponsiva,
    'meu-botao' : Botao,
  },

  data() {
    return {
      titulo: "AluraPic",

      fotos: [],

      filtro: '',
      
      mensagem: ''
    }
  },

  computed: {
    fotosComFiltro() {
      if(this.filtro){
        //Cira uma expressão com o alor do filtro insesitivo
        let exp = new RegExp(this.filtro.trim(),'i');
        //retorna apenas as fotos que condizem com a expressão no filtro
        return this.fotos.filter(foto => exp.test(foto.titulo));//esse filter() é uma função prórpia do javascript
      }else{  
        //se não tiver nada no filtro mostra todos os elementos
        return this.fotos;
      }
    } 
  },

  methods: {

      remove(foto) {

        this.service
          .apaga(foto._id)
        //this.resource.delete({id: foto._id})//esse elemento tem que ter o mesmo nome do coringa na area do create
          .then(()=> {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice,1);
          this.mensagem = 'Foto removida com sucesso'}, err=> {
            this.mensagem = err.message;
        });
      },
  },


  created() {


    this.service = new FotoService(this.$resource);

    this.service
      .lista()
      .then(fotos => this.fotos = fotos, err=> {
        this.mensagem = err.message;
        });


    /*this.resource = this.$resource('v1/fotos{/id}')//indicando que aceita receber um parametro. Nesse caso o parametro via ser o id da foto usado no metodo remove
    this.resource
      .query()
      .then(res => res.json())//É pego a respota da API no seu formato json
      .then(fotos => this.fotos = fotos, err => console.log(err));//São pegas as fotos da API e colocadas na variavel do export(this.fotos)*/
  }
}
</script>

<style>
  

  .centralizado{
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }

  .filtro{
    display: block;
    width: 100%;
  }

</style>
