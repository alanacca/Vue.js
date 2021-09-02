<template>
    <button @click="disparaAcao()" class = "botao" :class="estiloBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>

export default {
    //props: ['tipo','rotulo','confirmacao','estilo'],

    props: {
        /* essas propriedades especificadas não previnem o erro,
        mas ajuda na hora da descrição do erro */
        tipo: {
            required: true,
            type: String
        },

        rotulo: {
            required: true,
            type: String
        },

        confirmacao: {
            type: Boolean
        },

        estilo: {
            type: String
        }
    },

    methods: {

        disparaAcao() {
            if(this.confirmacao){
                if(confirm('Confirma Operação?')){
                    this.$emit('botaoAtivado');//O filho passa uma informação pro elemento pai
                    //para mandar o dado é só passar o $event nos elementos do pai
                }
                return;
            }
            this.$emit('botaoAtivado');
        }
    },

    computed: {

        estiloBotao() {

            if(this.estilo=='padrao' || !this.estilo){
                return 'botao-padrao';
            }

            if(this.estilo=='perigo'){
                return 'botao-perigo';
            }

        }

    }

    
}
</script>

<style scoped lang="scss">
//caso eu queria usar o sass para estilizar

    @import './Botao.scss';


</style>
