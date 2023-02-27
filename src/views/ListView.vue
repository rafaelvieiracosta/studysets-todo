<template>
  <section>
    <div class="form-wrapper">
      <form @submit.prevent="add(toDo)">
        <input type="text" v-model="toDo.description" placeholder="Nova tarefa">
        <button class="adicionar" :class="{ 'adicionar-loading': loading }"> 
          <template v-if="!loading"> Adicionar </template> 
          <div v-else class="loading"></div> 
        </button>
      </form>
    </div>
  
    <TransitionGroup name="list" tag="ul">
      <toDo 
        v-for="item in toDos" 
        :key="item.id" 
        :toDo="item"
        @toggle="toggleToDos" 
        @remove="removeToDos" 
      />
    </TransitionGroup>
  </section>
</template>

<script>
import toDo from '@/components/toDo'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ListView',
  components: {
    toDo
  },
  data () {
    return {
      toDo: { 
        description: null,
        checked: false 
      }
    }
  },
  computed: {
    ...mapState(['toDos', 'loading'])
  },
  methods: {
    ...mapActions(['addToDos', 'toggleToDos', 'removeToDos']),
    async add (item) {
        await this.addToDos(item)
        this.toDo = { 
          description: null,
          checked: false 
        }
    }
  }
}
</script>

<style scoped>
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
.form-wrapper {
  padding: 0 20px;
  background: linear-gradient(180deg,#0b0c12 50%, #FFFFFF 50%);
}

/* FORM INPUT */
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

/* FORM BUTTON */
button.adicionar {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 127px;
  width: 100%;
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
button.adicionar.adicionar-loading {
  cursor: wait;
  pointer-events: none;
}
button.adicionar:hover {
  background: linear-gradient(#0077C7, #0061A7);
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}
.loading:after {
  content: " ";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 4px solid #0061A7;
  border-color: #0061A7 transparent #0061A7 transparent;
  animation: loading 1.2s linear infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (min-width: 480px) {
  button.adicionar {
    max-width: 127px;
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
