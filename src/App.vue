<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="counter">
    <h1>{{ count }}</h1>
    <div class="buttons">
      <button @click="increaseCounter()">+</button>
      <button @click="decreaseCounter()">-</button>
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
  methods: {
    increaseCounter() {
      this.count++
    },
    decreaseCounter() {
      this.count--
    },
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
