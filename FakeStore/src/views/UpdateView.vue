<template>
  <HeaderComponent></HeaderComponent>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Atualizar Produto
        </h2>
        <form class="mt-8 space-y-6" @submit.prevent="update">
          <input v-model="idProduct" class="block w-full p-2 border border-gray-300 rounded-md" placeholder="ID do Produto"
                 type="number">
          <input v-model="title" class="block w-full p-2 border border-gray-300 rounded-md" placeholder="Título"
                 type="text">
          <input v-model="price" class="block w-full p-2 border border-gray-300 rounded-md" placeholder="Preço"
                 type="text">
          <input v-model="description" class="block w-full p-2 border border-gray-300 rounded-md" placeholder="Descrição"
                 type="text">
          <input v-model="image" class="block w-full p-2 border border-gray-300 rounded-md" placeholder="URL da Imagem"
                 type="text">
          <input v-model="category" class="block w-full p-2 border border-gray-300 rounded-md" placeholder="Categoria"
                 type="text">
          <button class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  type="submit">
            Atualizar
          </button>
        </form>
      </div>
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Deletar Produto
        </h2>
        <form class="mt-8 space-y-6" @submit.prevent="deletar">
          <input v-model="idProduct" class="block w-full p-2 border border-gray-300 rounded-md" placeholder="ID do Produto"
                 type="number">
          <button class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  type="submit">
            Deletar
          </button>
        </form>
      </div>
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
                  {{ errorMessage }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" type="button"
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

export default defineComponent({
  name: 'updateView',
  components: { HeaderComponent },
  setup() {
    const idProduct = ref<number>(0);
    const title = ref<string>('');
    const price = ref<number>(0);
    const description = ref<string>('');
    const image = ref<string>('');
    const category = ref<string>('');
    const showModal = ref(false);
    const errorMessage = ref('');
    return {
      idProduct,
      title,
      price,
      description,
      image,
      category,
      showModal,
      errorMessage
    };
  },
  methods: {
    deletar: function () {
      fetch(`https://fakestoreapi.com/products/${this.idProduct}`, {
        method: 'DELETE'
      })
          .then((res) => {
            setTimeout(() => {
              this.showModal = true;
              this.errorMessage = 'Produto deletado com sucesso'
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
    update: function () {
      fetch(`https://fakestoreapi.com/products/${this.idProduct}`, {
        method: 'PUT',
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
              this.errorMessage = 'produto atualizado com sucesso'
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
    }
  }
});


</script>

<style scoped>

</style>
