<template>
  <div>
    <h4>Count is {{count}}</h4>
  </div>
</template>

<script type="text/javascript">
  import {mapGetters} from 'vuex';

  export default {
    computed: mapGetters({count:'getCount'})
//      computed: {
//          count(){
//              return this.$store.state.totalCount;
//          }
//      }
  }
</script>
