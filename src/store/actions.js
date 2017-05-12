import * as types from './mutation-types';

export default {
  increment({commit}){
    console.log('action:increment');
    commit(types.INCREMENT_COUNT);
  },
  decrement({commit}){
    console.log('action:decrement');
    commit(types.DECREMENT_COUNT);
  }
}
