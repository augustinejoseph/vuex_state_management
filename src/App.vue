<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="counter">
    <Counter />
    <squared />
    <Button />
    <ColorCode />
  </div>
</template>

<script>
import Button from './components/Button.vue';
import Counter from './components/Counter.vue';
import Squared from './components/Squared.vue';
import ColorCode from './components/ColorCode.vue';


export default {
  name: 'App',
  components: {
    Counter,
    Squared,
    Button,
    ColorCode
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
