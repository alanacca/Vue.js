
<template>
  <div class="corpo">
    <h1 class="centralizado">{{titulo}}</h1>
    
    <input type="search" class="filtro" @input="filtro= $event.target.value" placeholder="filtre por parte do título">
    <!--o data binding, v-on = @, vai indicar que no evento de input ele vai colocar a variavel filtro do data igual ao que fo digitado pelo usuário-->
    
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
      
        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel>
        
      </li>
    </ul>
  </div>
</template>

<script>

import Painel from './components/shared/painel/Painel.vue';

export default {

  components: {
    'meu-painel' : Painel//as aspas foram devido ao hífem no nome da "variavel"
  },

  data() {
    return {
      titulo: "AluraPic",

      fotos: [],

      filtro: ''
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

  created() {
    let promise = this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())//É pego a respota da API no seu formato json
      .then(fotos => this.fotos = fotos, err => console.log(err));//São pegas as fotos da API e colocadas na variavel do export(this.fotos)
  }

}
</script>

<style>
  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralizado{
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }

  .imagem-responsiva{
    width: 100%;
  }

  .filtro{
    display: block;
    width: 100%;
  }

</style>
