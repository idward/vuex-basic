import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters'

Vue.use(Vuex);

//数据
const state = {
  totalCount: 0
};

const VuexStore = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});

export default VuexStore;
