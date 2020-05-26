<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="欢迎来到 beck.js App"/> -->
    <User/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import User from './components/User'
export default {
  name: 'App',
  components: {
    // HelloWorld
    User
  }
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
