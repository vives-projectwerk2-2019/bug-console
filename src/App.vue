<template>
  <div id="app">
    <img alt="BUG logo" src="./assets/logo.png" height="25%" width="25%">
    <BugConsole msg="BUG-console"/>
  </div>
</template>

<script>
import BugConsole from './components/BugConsole.vue'

export default {
  name: 'app',
  components: {
    BugConsole
  },
  mounted () {
    this.$mqtt.subscribe('BUG/#')
  }
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
