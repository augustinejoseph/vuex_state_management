<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="counter">
    <h1>{{ $store.state.count }}</h1>
    <div class="buttons">
      <button @click="$store.commit('increaseCounter')">+</button>
      <button @click="$store.commit('decreaseCounter')">-</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.counter {
  font-size: 40px;
}

.buttons button {
  font-size: 40px;
  widows: 100px;
  margin: 0 10px;
  padding: 0 20px;
}
</style>
