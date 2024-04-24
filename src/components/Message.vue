<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { EventBus } from "../utils/bus.js"
export default {
  name: 'Message',
  data () {
    return {
      msg: '',
    }
  },
  mounted() {
    const vm=this;
    // 監聽事件
    EventBus.$on("clickTestMsg", (msg) => (vm.msg = msg));
  },
  beforeDestroy() {
    // 銷毁監聽
    EventBus.$off("clickTestMsg");
  },
}
</script>
