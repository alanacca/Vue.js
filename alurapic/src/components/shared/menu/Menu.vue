<template>
    <nav>
      <ul>
        <li v-for="rota in rotas">


          <router-link 
            :to="rota.path ? rota.path : '/'">
            {{rota.titulo}} <!--if path foi definido vai ser path, 
                                                                mas se estiver em branco vai ser uma barra-->
          </router-link>
          <!--o router link é um atributo do vue router para que a página não seja regarregada
          quando o botão do menu for clicado, ou seja, para que a aplicação contiuasse a ser uma single page aplication-->
        </li>
    
      </ul>
    </nav>
</template>

<script>

export default {
    props: ['rotas']
    /* O props permite que você defina o tipo que aquela props vai receber e se é obrigatoria ou não
    EX:
    props: {
        rotas: {
            type: Array,
            required: true
        }
    } */
}
</script>

<style scoped>

</style>
