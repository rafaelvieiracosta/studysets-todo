import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  toDos: [],
  loading: false
}

const getters = {
  tarefasPendentes(state) {
    return state.toDos.filter((element) => {
      return element.checked === false;
    })
  },
  tarefasConcluidas(state) {
    return state.toDos.filter((element) => {
      return element.checked;
    })
  }
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
  },
  toggleList(state, toDosIds) {
    const toDos = state.toDos.map((element) => {
      return toDosIds.includes(element.id) 
      ? {...element, checked: !element.checked } 
      : element
    })
    state.toDos = toDos;
  },
  removeList(state, toDosIds) {
    const toDos = state.toDos.filter((element) => {
      return !toDosIds.includes(element.id)
    })
    state.toDos = toDos;
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
  },
  concluirTodas({commit, state}) {
    const pendentesIds = state.toDos.filter((element) => {
      return !element.checked
    }).map((element) => {
      return element.id
    });
    commit('toggleList', pendentesIds)
  },
  desmarcarTodas({commit, state}) {
    const concluidasIds = state.toDos.filter((element) => {
      return element.checked
    }).map((element) => {
      return element.id
    });
    commit('toggleList', concluidasIds)
  },
  removerTodas({commit, state}) {
    const concluidasIds = state.toDos.filter((element) => {
      return element.checked
    }).map((element) => {
      return element.id
    });
    commit('removeList', concluidasIds)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store