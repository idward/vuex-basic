import * as types from './mutation-types';

export default {
  [types.INCREMENT_COUNT](state){
    state.totalCount = state.totalCount + 1;
    console.log(state.totalCount);
  },
  [types.DECREMENT_COUNT](state, count){
    state.totalCount = state.totalCount - 1;
    console.log(state.totalCount);
  }
}
