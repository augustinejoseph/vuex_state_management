<template>
  <div class="counter-squared">
      {{ $store.state.count }}
      <sup>2</sup> =
      {{ $store.getters.getSquared }}
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>