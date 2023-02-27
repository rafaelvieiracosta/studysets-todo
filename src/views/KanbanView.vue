<template>
  <section class="kanban">
    <div class="kanban-grid">
      <div class="kanban-grid-coluna">
        <h2>Pendentes</h2>
        <TransitionGroup name="listPendente" tag="ul">
          <toDo 
            v-for="item in tarefasPendentes" 
            :key="item.id" 
            :toDo="item"
            @toggle="toggleToDos" 
            @remove="removeToDos" 
          />
        </TransitionGroup>
      </div>
      <div class="kanban-grid-coluna">
        <h2>Concluídas</h2>
        <TransitionGroup name="listConcluidas" tag="ul">
          <toDo 
            v-for="item in tarefasConcluidas" 
            :key="item.id" 
            :toDo="item"
            @toggle="toggleToDos" 
            @remove="removeToDos" 
          />
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script>
import toDo from '@/components/toDo'
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'KanbanView',
  components: {
    toDo
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['tarefasPendentes', 'tarefasConcluidas'])
  },
  methods: {
    ...mapActions(['toggleToDos', 'removeToDos']),
  }
}
</script>

<style scoped>
.kanban {
  padding: 0 20px;
  background: linear-gradient(180deg,#0b0c12 50px, #FFFFFF 50px);
}
.kanban-grid {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.kanban-grid-coluna {
  padding: 20px;
  background-color: #f5f7fa;
  border: 1px solid #e6eaf0;
  border-radius: 4px;
  height: calc(100vh - 137px);
}
.kanban-grid-coluna h2 {
  color: #0b0c12;
  font: 600 0.9rem/1.35 "Poppins", sans-serif;
  text-transform: uppercase;
}
</style>
<style>
.kanban-grid-coluna ul {
  margin-top: 20px;
}
.kanban-grid-coluna ul li {
  display: flex;
  flex-direction: column;
  justify-content: initial;
  align-items: initial;
  gap: 20px;
  background: #E6EAF0;
  border: 1px solid #CED3D9;
}
.kanban-grid-coluna ul li button {
  text-align: left;
  max-width: fit-content;
}

.listPendente-enter-active,
.listPendente-leave-active {
  transition: all 0.5s ease;
}
.listPendente-enter,
.listPendente-leave-to,
.listPendente-leave-active {
  opacity: 0;
  transform: translateX(50px);
}

.listConcluidas-enter-active,
.listConcluidas-leave-active {
  transition: all 0.5s ease;
}
.listConcluidas-enter,
.listConcluidas-leave-to,
.listConcluidas-leave-active {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
