<template>
  <div class="home">
    <h2>興趣：{{ interest }}</h2>
    <ul>
      <li v-for="item in lists" :key="item">
        {{item.todo}}

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props : {
    interest : {
        type : String,
        require : true
    },
    lists:{
      type : Object,
      require : true
    }
  }
}
</script>
