import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import KanbanView from '@/views/KanbanView'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView
  },
  {
    name: 'kanban',
    path: '/kanban',
    component: KanbanView
  }
]

const router = new VueRouter({ routes })
export default router