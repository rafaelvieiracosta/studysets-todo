<template>
  <div id="app">
    <header>
      <img class="img-responsive" src="@/assets/img/logo.svg" alt="Studysets">
    </header>

    <main>
      <form @submit.prevent="addTodo(toDo)">
        <input type="text" v-model="toDo.description" placeholder="Nova tarefa">
        <button class="adicionar"> Adicionar </button>
      </form>
    </main>

    <TransitionGroup name="list" tag="ul">
      <toDo 
        v-for="item in toDos" 
        :key="item.id" 
        :toDo="item"
        @toggle="toggleTodo" 
        @remove="removeTodo" 
      />
    </TransitionGroup>
  </div>
</template>

<script>
import toDo from '@/components/toDo'

export default {
  name: 'App',
  components: {
    toDo
  },
  data () {
    return {
      toDos: [],
      toDo: { 
        description: null,
        checked: false 
      }
    }
  },
  methods: {
    addTodo (item) {
      item.id = Date.now();
      this.toDos.push(item);
      this.toDo = { 
        description: null,
        checked: false 
      }
    },
    toggleTodo (item) {
      const index = this.toDos.findIndex(e => e.id === item.id)
      if (index > -1){
        const checked = !this.toDos[index].checked;
        this.$set(this.toDos, index, {...this.toDos[index], checked})
      }
    },
    removeTodo (item) {
      const index = this.toDos.findIndex(e => e.id === item.id)
      if (index > -1){
        this.$delete(this.toDos, index)
      }
    }
  }
}
</script>

<style scoped>
/* HEADER */
header {
  background-color: #0B0C12;
  padding: 40px 20px 20px;
}
header img {
  margin: 0 auto;
}

/* FORM INPUT E BUTTON */
main {
  background: linear-gradient(180deg,#0b0c12 50%, #FFFFFF 50%);
  padding: 0 20px;
}
form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  padding: 25px;
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0 0 32px rgb(0 0 0 / 10%);
}
input {
  flex: 1;
  padding: 12px;
  font: 400 1rem/1.5 Roboto,sans serif;
  color: #0b0c12;
  background-color: #f5f7fa;
  border: 1px solid #e6eaf0;
  border-radius: 4px;
  outline: none;
  transition: .2s;
}
input:focus {
  border-color: #18a0fb;
  background: var(--bgInputFocus);
  box-shadow: 0 0 0 2px #a8dcff;
}
button.adicionar {
  display: block;
  width: 100%;
  padding: 16px 24px;
  box-shadow: 0px 1px 2px rgb(0 0 0 / 10%);
  border-radius: 4px;
  border: none;
  font: 600 .9rem/1.35 "Poppins", sans-serif;
  text-transform: uppercase;
  color: #00234C;
  background: linear-gradient(180deg,#18a0fb,#0077c7);
  cursor: pointer;
  transition: .2s;
}
button.adicionar:hover {
  background: linear-gradient(#0077C7, #0061A7);
}
@media (min-width: 480px) {
  button.adicionar {
    max-width: max-content;
  }
}

/* LISTA DE TAREFAS */
ul {
  padding: 0 20px;
  max-width: 840px;
  margin: 0 auto;
  margin-top: 40px;
  list-style: none;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
