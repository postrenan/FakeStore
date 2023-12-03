<template>
  <HeaderComponent></HeaderComponent>
  <LoginComponent></LoginComponent>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginComponent from '@/components/LoginComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue'

export default defineComponent({
  name: 'login',
  components: {HeaderComponent, LoginComponent},
  setup() {
    return {
    };
  },
});
</script>

<style scoped>

</style>
