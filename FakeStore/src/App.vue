
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import  HeaderComponent  from '@/components/HeaderComponent.vue';
import './assets/style.css';

export default defineComponent({
    components: {
      HeaderComponent
    },
})

</script>

<style scoped>
</style>
