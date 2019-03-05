<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
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
