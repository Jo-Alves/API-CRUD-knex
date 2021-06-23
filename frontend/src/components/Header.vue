<template>
  <header>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/persons">Pessoas</router-link>
      </div>
      <h3>Consumindo API Rest</h3>
  </header>
</template>

<script>
export default {

}
</script>

<style>
header{
    color: white;
    background-color: orangered;
    width: 100%;
    text-align: left;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    left: 0;
    top: 0;
}
h3{
  display: inline-block;
  text-align: center;
  background-color: black;
}
a{
  margin: auto 10px;
  text-decoration: none;
  color: black;
  background-color: white;
  padding: 10px 15px;
  border-radius: 10px;
  transition: .5s;
}
a:hover{
  background-color: #ccc;
}

</style>