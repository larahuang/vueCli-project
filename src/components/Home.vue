<template>
  <div class="home">
 <Child  :interest="interest" :lists="lists"/>
 <p>Button 傳來的 Message： {{ msg }}</p>
 <p> {{ toMsg }}</p>
 <Button></Button>
 <Message></Message>
  </div>
</template>

<script>
import Child from './Child.vue'
import Button from './Button.vue'
import Message from './Message.vue'
import { EventBus } from "../utils/bus.js"
export default {
  name: 'Home',
  components: {
    Child,Button,Message
  },
  data () {
    return {
      interest:'游泳',
      lists:[
        {id:'001',todo:'去旅行'},
        {id:'002',todo:'寫部落格'}
      ],
      msg: '',
      toMsg:''
    }
  },
  mounted() {
    const vm=this;
    // 監聽事件
    EventBus.$on("clickSendMsg", (msg) => (vm.msg = msg));
    EventBus.$on("clickToMsg", (msg) => (vm.toMsg = msg));
  },
  beforeDestroy() {
    // 銷毁監聽
    EventBus.$off("clickSendMsg");
    EventBus.$off("clickToMsg");
  },
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
