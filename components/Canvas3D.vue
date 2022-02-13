<template>
  <div>
    <canvas class="canvas" ref="canvasEl" />
  </div>
</template>

<script>
import Scene from '~/js/SanDiego/Scene'

export default {
  name: 'Canvas3D',
  data() {
    return {}
  },
  mounted() {
    new Scene(this.$refs.canvasEl)
  },
}
</script>

<style>
  .canvas {
    display: block;
    height: 100vh;
    width: 100vw;
  }
</style>
