<template>
    <div>
        <h1 class="centralizado"> Cadastro </h1>
        <h2 class="centralizado">{{foto.titulo}}</h2>


        <h2 v-if="foto._id" class="centralizado">Alterando</h2><!--se tem foto._id, no caso, está alterando-->
        <h2 v-else class="centralizado">Incluindo</h2><!--caso não tenha foto._id, no caso incluindo-->


        <form @submit.prevent="grava()"> <!--O prevent vai cancelar a ação padrão do elemento, nesse caso submit-->
            <div class="controle">
                <label for="titulo">Titulo</label>
                <input id="titulo" autocomplete="off" v-model="foto.titulo">
            </div>

            <div class="controle">
                <label for="url">URL</label>
                <input id="url" autocomplete="off" v-model.lazy="foto.url">
                <imagem-responsiva v-show="foto.url" :url= "foto.url" :titulo="foto.titulo"/>
            </div>

            <div class="controle">
                <label for="descriçãp">DESCRIÇÃO</label>
                <textarea id="titulo" autocomplete="off" v-model="foto.descricao"></textarea>
            </div>

            <div class="centralizado">
                <meu-botao tipo ='submit' rotulo = "GRAVAR"></meu-botao>
                <router-link :to="{name: 'home'}"><meu-botao rotulo= "VOLTAR" type = "button" for="titulo"/></router-link>
            </div>

        </form>
    
    
    
    
    </div>
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue'
import Foto from '../../domain/foto/Foto'
import FotoService from '../../domain/foto/FotoService'

export default {

    components: {
        'imagem-responsiva': ImagemResponsiva,
        'meu-botao': Botao
    },

    data() {
        return{
            foto: new Foto(),

            id: this.$route.params.id
        }
    },

    methods: {
        grava (){

            this.service
                .cadastra(this.foto)
                .then(() => {
                    if(this.id){
                        this.$router.push({name: 'home'});//o router lida com todas as navegações do meu site
                    }
                    this.foto = new Foto()}
                    ,err => console.log(err));
                    
            /*this.$http
                .post('v1/fotos', this. foto)//o post envia dados para a API
                        //primeiro parametro do post é onde vai ser inserido e o segundo é o que vai ser inserido*/
        }
    },

    created() {
        this.service = new FotoService(this.$resource)
        if(this.id){
            this.service.busca(this.id)
            .then(foto=> this.foto = foto);
        }
    }

}
</script>

<style scoped> 
    
    .centralizado{
        text-align: center;
    }

    .controle {
        font-size: 1.2em;
        margin-bottom: 20px;
    }

    .controle label{
        display:blick;
        font-weight: bold;
    }

    .controle label + input, .controle textarea {
        width: 100%;
        font-size: inherit;
        border-radius: 5px;
    }



</style>
