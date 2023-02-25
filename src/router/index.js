import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '@/views/ListView'
import KanbanView from '@/views/KanbanView'

Vue.use(VueRouter)

const routes = [
  {
    name: 'list',
    path: '/',
    component: ListView
  },
  {
    name: 'kanban',
    path: '/kanban',
    component: KanbanView
  }
]

const router = new VueRouter({ 
  routes,
  mode: "history"
})
export default router