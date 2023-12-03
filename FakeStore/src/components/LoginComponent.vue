<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Insira suas credenciais
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label class="sr-only" for="userName">Username</label>
            <input id="userName" v-model="userName" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" name="userName" placeholder="Username"
                   required
                   type="text">
          </div>
          <div>
            <label class="sr-only" for="password">Senha</label>
            <input id="password" v-model="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" name="password" placeholder="Senha"
                   required
                   type="password">
          </div>
        </div>

        <div>
          <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit">
            Entrar
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
                  Não foi possível entrar com o usuário especificado.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" type="button"
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
import router from '@/router';

export default defineComponent({
  name: 'LoginComponent',
  setup() {
    const userName = ref<string>('');
    const password = ref<string>('');
    const showModal = ref(false);
    return {
      userName,
      password,
      showModal
    };
  },
  methods: {
    login: function () {
      fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.userName,
          password: this.password,
        }),
      })
          .then((res) => {
            if (res.status !== 200) {
              setTimeout(()=>{
                this.showModal = true
              }, 500);
              return;
            }
            router.push('/loja');
          })
          .catch((error) =>{
            setTimeout(()=>{
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
