<template>
  <div>
    <input type="checkbox" :checked="checked" @change="changeChecked">
    <input type="text" :value="name" @input="changeName">
  </div>
</template>

<script>
export default {
  props: {
    checked: Boolean,
    name: String,
  },
  setup(props, ctx) {
    const changeChecked = () => {
      ctx.emit('update:checked', !props.checked);
    }
    const changeName = (e) => {
      ctx.emit('update:name', e.target.value);
    }
    return {
      changeChecked,
      changeName,
    }
  }
}
</script>

<style>

</style>