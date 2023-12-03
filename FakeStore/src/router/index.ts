import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';
import CreateView from '../views/CreateView.vue';
import UpdateView from '../views/UpdateView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/loja',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/cadastrar-produto',
      name: 'CreateView',
      component: CreateView
    },
    {
      path: '/atualizar-produto',
      name: 'UpdateView',
      component: UpdateView
    },
  ]
})

export default router
