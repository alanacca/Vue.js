<template>
    <div>
        <h1 class="centralizado"> Cadastro </h1>
        <h2 class="centralizado"></h2>

        <form>
            <div class="controle">
                <label for="titulo">Titulo</label>
                <input id="titulo" autocomplete="off">
            </div>

            <div class="controle">
                <label for="url">URL</label>
                <input id="url" autocomplete="off">
                <imagem-reponsiva/>
            </div>

            <div class="controle">
                <label for="descriçãp">DESCRIÇÃO</label>
                <textarea id="titulo" autocomplete="off"></textarea>
            </div>

            <div class="centralizado">
                <meu-botao rotulo = "GRAVAR" tipo ="submit"/>
                <router-link to="/"><meu-botao rotulo= "VOLTAR" type = "button" for="titulo"/></router-link>
            </div>

        </form>
    
    
    
    
    </div>
</template>

<script>

export default {}
</script>

<style scoped> 
    
    .centralizado{
        text-align: center;
    }

</style>
