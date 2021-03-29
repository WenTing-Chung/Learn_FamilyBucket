<template>
  <div id="app">
    <TitleComponent :title="title" />
    <!-- 1.使用 function 設定來執行修改 -->
    <!-- <InputComponent :text="title" @textChange="changeHandler" /> -->

    <!-- 2.使用 sync 同步資料 -->
    <InputComponent :text.sync="title" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TitleComponent from './components/TitleComponent.vue'
import InputComponent from './components/InputComponent/index.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TitleComponent,
    InputComponent,
  },
  data() {
    return {
      title: 'HelloWorld',
    }
  },
  //-- 1.使用 function 設定來執行修改
  // methods: {
  //   changeHandler(val) {
  //     this.title = val
  //   },
  // },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
