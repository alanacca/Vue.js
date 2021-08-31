
<template>

        <div class="painel">

            <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2><!--@ = v-on-->
            <transition name="painel-fade"> <!--o transition só pode ter um elemento filho-->
                <div class="painel-conteudo"  v-show="visivel"> <!--Para adicionar a directiva v-show é necessário que seja dentro de uma div,
                pois se tentar colocar no slot não vai dar certo pois ele não aceita-->
                    <slot> <!--o slot serve para indicar que a tag "meu-painel" deve manter 
                    o conteúdo que ficar entre a abertura e fechamento dessa tag, nesse caso o img, 
                    dentro da tag slot-->
                
                    </slot>
                </div>
            </transition>

        </div>
      
</template>

<script>

export default {
  
    props: ['titulo'],//Ta indicando que pode receber um titulo

    data() {
        return{

            visivel: true

        }
    }
}
</script>

<style scoped>
    /* O scoped serve para indicar que eu quero que esse style só afete os elementos dentro 
    desse componente Painel.vue */
    
    /* Estilo do Painel */
    .painel {
        padding: 0 auto;
        border: solid 2px grey;
        display: inline-block;
        margin: 5px;
        box-shadow: 5px 5px 10px grey;
        width: 200px;
        height: 100%;
        vertical-align: top;
        text-align: center;
    }

    .painel .painel-titulo {
        text-align: center;
        border: solid 2px;
        background: lightblue;
        margin: 0 0 15px 0;
        padding: 10px;
        text-transform: uppercase;
    }

    *{
        box-shadow: 5px 5px 5px;
    }

    .painel-conteudo{
        overflow: hidden;
    }

    .painel-fade-enter, .painel-fade-leave-active {
        opacity: 0;
    }

    .painel-fade-enter-active, .painel-fade-leave-active {
        transition: opacity .4s;
    }

</style>
