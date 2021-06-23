<template>
  <div id="app">
    <ListPersons msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import ListPersons from "./components/ListPersons.vue";

export default {
  name: "App",
  components: {
    ListPersons,
  },
};
</script>

<style>
body{
  margin: 0;
  font-family: sans-serif;
  padding: 0;
  box-sizing: border-box;
  font-size: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
