<template>
  <div id="app">
    <Header />
    <router-view></router-view>    
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
*{
box-sizing: border-box;
}
body {
  margin: 0;
  font-family: sans-serif;
  padding: 0;  
  font-size: 20px;
  background-color: rgb(87, 87, 187);
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
}
</style>
