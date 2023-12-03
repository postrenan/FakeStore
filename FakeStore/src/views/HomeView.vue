<template>
  <div class="relative">
    <HeaderComponent></HeaderComponent>
    <div class="w-11/12 mx-auto mt-4">
      <div class="grid grid-cols-5 gap-4">
        <div v-for="item in items" :key="item.id" class="border p-4 rounded-lg shadow-md h-auto flex flex-col justify-between">
          <div>
            <img :src="item.image" class="w-full h-32 object-cover mb-2 rounded-t-lg">
            <h1 class="text-lg font-bold mb-2">{{item.title}}</h1>
            <p class="text-sm mb-2 line-clamp-4">{{item.description}}</p>
            <p class="text-sm font-bold mb-2">{{item.price}}</p>
          </div>
          <button @click="showModal = true" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Comprar</button>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="fixed top-0 right-0 mt-16 mr-4 bg-white rounded shadow-lg p-4">
      <h2 class="text-lg font-bold mb-2">Produto no carrinho</h2>
      <button @click="showModal = false" class="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Fechar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HeaderComponent from '@/components/HeaderComponent.vue'

interface item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export default defineComponent({
  name: 'homeView',
  components: {HeaderComponent},
  setup() {
      const items = ref<item[]>([]);
      const showModal = ref(false);
    return {
      items,
      showModal
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      this.items = await response.json();
    } catch (error) {
      alert(error)
    }
  },
});

</script>

<style scoped>

</style>
