import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  toDos: [],
}

const mutations = {
  addToDo(state, payload) {
    state.toDos.push(payload);
  }
}

const actions = {
  loadToDos({commit}, toDo) {
    return new Promise(resolve => {
      setTimeout(() => {
        toDo.id = Date.now();
        commit('addToDo', toDo);
        resolve();
      }, 1000);
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store