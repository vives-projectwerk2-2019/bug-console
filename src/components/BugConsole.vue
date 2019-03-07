<template>
  <div class="console">
    <h1>{{ msg }}</h1>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Movement</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-html="newrow">
        </tbody>
      </table>
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
      newrow:' '
    }
  },
  mqtt: {
    'TTN' (data) {
      var parsed = JSON.parse(data);
      this.newrow = this.newrow + '<tr>'+'<td>' + parsed.dev_id + '</td>'
                    + '<td>' + parsed.movement + '</td>'
                    + '<td>' + parsed.action + '</td>' +'</tr>' + '<br>'
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
