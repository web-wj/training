<template>
  <div class="wrapper"><span>123456789</span></div>
</template>

<script>
export default {
  created() {
    console.log('-----------------------created');
  }
}
</script>

<style lang="less">
@red-color: #f40;

.wrapper {
  width: 100px;
  aspect-ratio: 1/1;
  color: @red-color;
}
</style>
