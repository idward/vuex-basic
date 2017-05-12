<template>
  <div>
    <button @click="addCount">Increment + 1</button>
  </div>
</template>

<script type="text/javascript">
  import {mapActions} from 'vuex';

  export default {
    methods: mapActions({addCount:'increment'})
//    methods: {
//      addCount(){
//        return this.$store.dispatch('increment');
//      }
//    }
  }
</script>
