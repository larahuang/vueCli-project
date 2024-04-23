<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      info:[],
    }
  },
  created()  {
    this.getWeatherApi();
    this.getLists();
  },

  methods:{
    getWeatherApi(){
      const api =`${process.env.API_PATH}/data/2.5/forecast?q=Taipei,tw&APPID=${process.env.APP_ID}&lang=zh_tw&units=metric`;
      axios
      .get(api)
        .then(res => (
          this.info = res, console.log('info',this.info)
        ))
    },
    getLists (){
      const api ='https://api.coindesk.com/v1/bpi/currentprice.json';
      this.$http.get(api).then((res) => {
        console.log(res.data);
      });

    }
  },

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
