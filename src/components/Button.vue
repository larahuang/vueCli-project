<template>
  <div>
 <a style="background-color:blue;border-radius: 4px;color:white;padding:8px 12px;" @click="sendTestMsg">TO</a>
  </div>
</template>

<script>
import { EventBus } from "../utils/bus.js"
export default {
  data () {
    return {
      testMsg:'Button to Message'
    }
  },
  methods:{
    sendTestMsg() {
      const vm=this;
      // 發出 clickTestMsg 事件，並把 testMsg 當作參數傳出去
      EventBus.$emit("clickTestMsg", vm.testMsg);
    },
  }
}
</script>
