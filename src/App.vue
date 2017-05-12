<!--<link rel="stylesheet" href="../bootstrap/dist/css/bootstrap.css">-->
<template>
  <div id="app">
    <display></display>
    <increment></increment>
  </div>
</template>

<script>
  import Display from './components/Display.vue';
  import Increment from './components/Increment.vue';

  export default {
    name: 'app',
    components: {Display, Increment}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
