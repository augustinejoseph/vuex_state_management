<template>
    <input v-model="handleColorCode" type="text" placeholder="Enter color">
  
</template>

<script>
export default {
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
}
</script>

<style>

</style>