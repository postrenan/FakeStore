<template>
  <HeaderComponent></HeaderComponent>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Criar Produto
      </h2>
      <form class="space-y-4" @submit.prevent="create">
        <div>
          <label class="block text-sm font-medium text-gray-700" for="title">Título</label>
          <input id="title" v-model="title" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" required
                 type="text">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700" for="price">Preço</label>
          <input id="price" v-model="price" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" required
                 type="number" min="0">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700" for="category">Categoria</label>
          <input id="category" v-model="category" class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                 required
                 type="text">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700" for="description">Descrição</label>
          <input id="description" v-model="description" class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                 required
                 type="text">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700" for="image">Imagem (URL)</label>
          <input id="image" v-model="image" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" required
                 type="url">
        </div>
        <div>
          <button
              class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
  <div v-if="showModal" aria-labelledby="modal-title" aria-modal="true" class="fixed z-10 inset-0 overflow-y-auto"
       role="dialog">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div aria-hidden="true" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <span aria-hidden="true" class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
      <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900">
                Alerta
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Produto criado
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              type="button"
              @click="showModal = false">
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import router from '@/router';

export default defineComponent({
  name: 'login',
  components: { HeaderComponent },
  setup() {
    const title = ref<string>('');
    const price = ref<number>(0);
    const description = ref<string>('');
    const image = ref<string>('');
    const category = ref<string>('');
    const showModal = ref(false);
    return {
      title,
      price,
      description,
      image,
      category,
      showModal
    };
  },
  methods: {
    create: function () {
      fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify({
          title: this.title,
          price: this.price,
          description: this.description,
          image: this.image,
          category: this.category,
        }),
      })
          .then((res) => {
            setTimeout(() => {
              this.showModal = true;
            }, 500);
            this.title='';
            this.image='';
            this.price=0;
            this.description='';
            this.category='';
            return;
          })
          .catch((error) => {
            setTimeout(() => {
              alert(error)
            }, 500);
            return;
          });
    },
  }
});

</script>

<style scoped>

</style>
