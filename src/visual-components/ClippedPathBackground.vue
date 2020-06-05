<template>
  <div class="clipped-path-background-wrapper">
    <svg width="101px" viewBox="0 0 101 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient x1="0%" y1="0%" x2="100%" y2="95.0633441%" id="background-gradient">
          <stop stop-color="#05afff" offset="0%"></stop>
          <stop stop-color="#009ce5" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <polygon fill="url(#background-gradient)" points="101 0 101 20 0 32 0 0"></polygon>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'ClippedPathBackground'
}
</script>
<style lang="scss">
.clipped-path-background-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  z-index: -1;
  svg {
    width: 100%;
  }
}
</style>
