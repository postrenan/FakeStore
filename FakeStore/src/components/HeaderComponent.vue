<template>
  <header class="bg-blue-500 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold"><router-link to="/">Fake Store</router-link></h1>
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/" class="hover:text-gray-300">Login</router-link></li>
          <li><router-link to="/cadastrar-produto" class="hover:text-gray-300">Criar produto</router-link></li>
          <li><router-link to="/atualizar-produto" class="hover:text-gray-300">Atualizar/Deletar produto</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name:'HeaderComponent',

});
</script>

<style scoped>

</style>
