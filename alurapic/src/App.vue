<template>
  <div>
    <h1>{{titulo}}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "AluraPic",

      fotos: []
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

</style>
