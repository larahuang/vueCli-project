<template>
  <div class="home">
 <Child  :interest="interest" :lists="lists"/>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  name: 'Home',
  components: {
    Child
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      interest:'游泳',
      lists:[
        {id:'001',todo:'去旅行'},
        {id:'002',todo:'寫部落格'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
