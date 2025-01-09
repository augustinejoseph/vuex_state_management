<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="counter">
    <h1 :style="{ color: $store.state.colorCode }">{{ $store.state.count }}</h1>
    <div class="counter-squared">
      {{ $store.state.count }}
      <sup>2</sup> =
      {{ $store.getters.getSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('increaseCounter')">+</button>
      <button @click="$store.dispatch('decreaseCounter')">-</button>
    </div>
    <input v-model="handleColorCode" type="text" placeholder="Enter color">
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    handleColorCode: {
      get() {
        return this.$store.state.colorCode
      },
      set(typedColor) {
        this.$store.commit('setColorCode', typedColor)
      }
    },
  },
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
