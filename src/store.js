import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  toDos: [],
  loading: false
}

const mutations = {
  addToDo(state, payload) {
    state.toDos.push(payload);
  },
   setLoading(state, payload) {
    state.loading = payload;
   },
   toggleToDo(state, payload) {
    const index = state.toDos.findIndex(e => e.id === payload.id)
    if (index > -1){
      const checked = !state.toDos[index].checked;
      Vue.set(state.toDos, index, {...state.toDos[index], checked})
    }
   },
   removeToDo(state, payload) {
    state.toDos = state.toDos.filter((item) => {
      return item.id !== payload.id
    })
   }
}

const actions = {
  addToDos({commit}, toDo) {
    commit('setLoading', true)
    return new Promise(resolve => {
      setTimeout(() => {
        toDo.id = Date.now();
        commit('addToDo', toDo);
        commit('setLoading', false)
        resolve();
      }, 500);
    })
  },
  toggleToDos({commit}, toDo) {
    commit('toggleToDo', toDo)
  },
  removeToDos({commit}, toDo) {
    commit('removeToDo', toDo)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store