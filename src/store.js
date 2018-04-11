import {SET_DIRTY, SET_CLEAN, SET_CONTENT} from './mutation-types'

export const state = {
  name: 'home',
  dirty: false,
  content: '<p>project 1804... ready to roll</p>'
}

export const mutations = {
  [SET_CONTENT](state, payload) { state.content = payload.value  },
  [SET_DIRTY](state) { state.dirty = true },
  [SET_CLEAN](state) { state.dirty = false }
}
