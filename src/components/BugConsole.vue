<template>
  <div class="console">
    <h1>{{ msg }}</h1>
    <div v-html="dev_id">

    </div>
    <div v-html="movement">
      
    </div>
    <div v-html="action">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'BugConsole',
  props: {
    msg: String
  },
  data () {
    return {
      dev_id:'dev_id:<br>',
      movement:'movement:<br>',
      action:'action:<br>'
    }
  },
  mqtt: {
    'BUG/TTN' (data) {
      var parsed = JSON.parse(data);
      this.dev_id = this.dev_id + parsed.dev_id + '<br>';
      this.movement = this.movement + parsed.movement + '<br>';
      this.action = this.action + parsed.action + '<br>';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
