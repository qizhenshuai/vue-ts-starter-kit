import { ActionTree, MutationTree } from 'vuex'
import { RootState } from '../types'

export interface AppState {
  version: string;
}

export interface AppStateParams {
  version: string;
}

const state: AppState = {
  version: '1.x'
}
const mutations: MutationTree<AppState> = {
  UPDATE_VERSION(state: AppState, payload: AppStateParams) {
    state.version = payload.version
  }
}

const actions: ActionTree<AppState, RootState> = {
  UPDATE_VERSION_SYNC({ commit }, payload: AppStateParams) {
    commit('UPDATE_VERSION', {
      version: payload.version
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
