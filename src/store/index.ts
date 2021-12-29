import { createStore } from 'vuex'
import state from './State'
import mutations from './Mutations'
import actions from './Actions'
import modules from './Modules'
import getters from './Getters'

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules
})