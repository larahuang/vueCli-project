<template>
  <div class="home">
    <h2>興趣：{{ interest }}</h2>
    <ul>
      <li v-for="item in lists" :key="item">
        {{item.todo}}

      </li>
    </ul>
    <a style="background-color:green;border-radius: 4px;color:white;padding:8px 12px;" @click="sendMessage">Send</a>
    <a style="background-color:green;border-radius: 4px;color:white;padding:8px 12px;" @click="toMsg">TO</a>
  </div>
</template>

<script>
import { EventBus } from "../utils/bus.js"
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: '子傳父',
      msg: '哈哈哈哈ㄚ',
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
  },
  methods: {
    sendMessage() {
      const vm=this;
      // 發出 clickSendMsg 事件，並把 message 當作參數傳出去
      EventBus.$emit("clickSendMsg", vm.message);
    },
    toMsg() {
      const vm=this;
      // 發出 clickToMsg 事件，並把 message 當作參數傳出去
      EventBus.$emit("clickToMsg", vm.msg);
    },
  },
}
</script>
